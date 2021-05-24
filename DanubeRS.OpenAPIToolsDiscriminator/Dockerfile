FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["DanubeRS.OpenAPIToolsDiscriminator/DanubeRS.OpenAPIToolsDiscriminator.csproj", "DanubeRS.OpenAPIToolsDiscriminator/"]
RUN dotnet restore "DanubeRS.OpenAPIToolsDiscriminator/DanubeRS.OpenAPIToolsDiscriminator.csproj"
COPY . .
WORKDIR "/src/DanubeRS.OpenAPIToolsDiscriminator"
RUN dotnet build "DanubeRS.OpenAPIToolsDiscriminator.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "DanubeRS.OpenAPIToolsDiscriminator.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "DanubeRS.OpenAPIToolsDiscriminator.dll"]
