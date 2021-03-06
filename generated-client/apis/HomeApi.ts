/* tslint:disable */
/* eslint-disable */
/**
 * My Title
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    Pet,
    PetFromJSON,
    PetToJSON,
} from '../models';

export interface HomeAddPetRequest {
    pet: Pet;
}

/**
 * 
 */
export class HomeApi extends runtime.BaseAPI {

    /**
     */
    async homeAddPetRaw(requestParameters: HomeAddPetRequest): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.pet === null || requestParameters.pet === undefined) {
            throw new runtime.RequiredError('pet','Required parameter requestParameters.pet was null or undefined when calling homeAddPet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PetToJSON(requestParameters.pet),
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async homeAddPet(requestParameters: HomeAddPetRequest): Promise<string> {
        const response = await this.homeAddPetRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async homeGetPetsRaw(): Promise<runtime.ApiResponse<Array<Pet>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PetFromJSON));
    }

    /**
     */
    async homeGetPets(): Promise<Array<Pet>> {
        const response = await this.homeGetPetsRaw();
        return await response.value();
    }

}
