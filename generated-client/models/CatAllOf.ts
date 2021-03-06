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
/**
 * 
 * @export
 * @interface CatAllOf
 */
export interface CatAllOf {
    /**
     * 
     * @type {boolean}
     * @memberof CatAllOf
     */
    scaredy?: boolean;
}

export function CatAllOfFromJSON(json: any): CatAllOf {
    return CatAllOfFromJSONTyped(json, false);
}

export function CatAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'scaredy': !exists(json, 'scaredy') ? undefined : json['scaredy'],
    };
}

export function CatAllOfToJSON(value?: CatAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'scaredy': value.scaredy,
    };
}


