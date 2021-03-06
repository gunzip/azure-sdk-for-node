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
 * Base properties for any task step.
 *
 */
class TaskStepProperties {
  /**
   * Create a TaskStepProperties.
   * @member {array} [baseImageDependencies] List of base image dependencies
   * for a step.
   * @member {string} type Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of TaskStepProperties
   *
   * @returns {object} metadata of TaskStepProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TaskStepProperties',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'TaskStepProperties',
        className: 'TaskStepProperties',
        modelProperties: {
          baseImageDependencies: {
            required: false,
            readOnly: true,
            serializedName: 'baseImageDependencies',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'BaseImageDependencyElementType',
                  type: {
                    name: 'Composite',
                    className: 'BaseImageDependency'
                  }
              }
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = TaskStepProperties;
