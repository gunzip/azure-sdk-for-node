/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a SkuProperty.
 */
class SkuProperty {
  /**
   * Create a SkuProperty.
   * @member {string} [name] An invariant to describe the feature.
   * @member {string} [value] An invariant if the feature is measured by
   * quantity.
   */
  constructor() {
  }

  /**
   * Defines the metadata of SkuProperty
   *
   * @returns {object} metadata of SkuProperty
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SkuProperty',
      type: {
        name: 'Composite',
        className: 'SkuProperty',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SkuProperty;