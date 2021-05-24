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
    CatAllOf,
    CatAllOfFromJSON,
    CatAllOfFromJSONTyped,
    CatAllOfToJSON,
    Pet,
    PetFromJSON,
    PetFromJSONTyped,
    PetToJSON,
} from './';

/**
 * 
 * @export
 * @interface Cat
 */
export interface Cat extends Pet {
    /**
     * 
     * @type {boolean}
     * @memberof Cat
     */
    scaredy?: boolean;
}

export function CatFromJSON(json: any): Cat {
    return CatFromJSONTyped(json, false);
}

export function CatFromJSONTyped(json: any, ignoreDiscriminator: boolean): Cat {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...PetFromJSONTyped(json, ignoreDiscriminator),
        'scaredy': !exists(json, 'scaredy') ? undefined : json['scaredy'],
    };
}

export function CatToJSON(value?: Cat | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...PetToJSON(value),
        'scaredy': value.scaredy,
    };
}


