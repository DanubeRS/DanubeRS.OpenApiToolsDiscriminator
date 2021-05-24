using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using NJsonSchema.Converters;
using NSwag.Annotations;

namespace DanubeRS.OpenAPIToolsDiscriminator.Controllers
{
    [Route("/")]
    public class HomeController : Controller
    {
        private readonly List<Pet> _testData = new List<Pet>(InitialPets);

        private static readonly IEnumerable<Pet> InitialPets = new Pet[]
        {
            new Cat {Id = Guid.NewGuid(), Name = "Scratchy", Scaredy = false},
            new Mouse {Id = Guid.NewGuid(), Name = "Itchy", LikesCheese = true},
            new Dog {Id = Guid.NewGuid(), Name = "Poochie", IsCool = true}
        };

        [HttpGet]
        [SwaggerResponse(HttpStatusCode.OK, typeof(Pet[]), Description = "Gets all pets")]
        public IActionResult GetPets()
        {
            return Ok(_testData);
        }

        [HttpPost]
        [SwaggerResponse(HttpStatusCode.Created, typeof(Guid), Description = "Add a pet to the collection")]
        public IActionResult AddPet([FromBody] Pet pet)
        {
            pet.Id = Guid.NewGuid();
            _testData.Add(pet);
            return Ok(pet.Id);
        }
    }

    [JsonConverter(typeof(JsonInheritanceConverter))]
    [JsonInheritance("cat", typeof(Cat))]
    [JsonInheritance("dog", typeof(Dog))]
    [JsonInheritance("mouse", typeof(Mouse))]
    public abstract class Pet
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
    }

    public class Dog : Pet
    {
        public bool IsCool { get; set; }
    }

    public class Cat : Pet
    {
        public bool Scaredy { get; set; }
    }

    public class Mouse : Pet
    {
        public bool LikesCheese { get; set; }
    }
}