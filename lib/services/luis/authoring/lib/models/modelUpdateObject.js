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
 * Object model for updating an intent classifier.
 *
 */
class ModelUpdateObject {
  /**
   * Create a ModelUpdateObject.
   * @member {string} [name] The entity's new name.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ModelUpdateObject
   *
   * @returns {object} metadata of ModelUpdateObject
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ModelUpdateObject',
      type: {
        name: 'Composite',
        className: 'ModelUpdateObject',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ModelUpdateObject;
