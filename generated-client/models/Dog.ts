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

import { exists, mapValues } from '../runtime';
import {
    DogAllOf,
    DogAllOfFromJSON,
    DogAllOfFromJSONTyped,
    DogAllOfToJSON,
    Pet,
    PetFromJSON,
    PetFromJSONTyped,
    PetToJSON,
} from './';

/**
 * 
 * @export
 * @interface Dog
 */
export interface Dog extends Pet {
    /**
     * 
     * @type {boolean}
     * @memberof Dog
     */
    isCool?: boolean;
}

export function DogFromJSON(json: any): Dog {
    return DogFromJSONTyped(json, false);
}

export function DogFromJSONTyped(json: any, ignoreDiscriminator: boolean): Dog {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...PetFromJSONTyped(json, ignoreDiscriminator),
        'isCool': !exists(json, 'isCool') ? undefined : json['isCool'],
    };
}

export function DogToJSON(value?: Dog | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...PetToJSON(value),
        'isCool': value.isCool,
    };
}


