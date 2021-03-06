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

const models = require('./index');

/**
 * The properties of updating a task step.
 *
 * @extends models['TaskStepUpdateParameters']
 */
class FileTaskStepUpdateParameters extends models['TaskStepUpdateParameters'] {
  /**
   * Create a FileTaskStepUpdateParameters.
   * @member {string} [taskFilePath] The task template/definition file path
   * relative to the source context.
   * @member {string} [valuesFilePath] The values/parameters file path relative
   * to the source context.
   * @member {array} [values] The collection of overridable values that can be
   * passed when running a task.
   * @member {string} [contextPath] The URL(absolute or relative) of the source
   * context for the build task.
   * If it is relative, the context will be relative to the source repository
   * URL of the build task.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of FileTaskStepUpdateParameters
   *
   * @returns {object} metadata of FileTaskStepUpdateParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'FileTask',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'TaskStepUpdateParameters',
        className: 'FileTaskStepUpdateParameters',
        modelProperties: {
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          taskFilePath: {
            required: false,
            serializedName: 'taskFilePath',
            type: {
              name: 'String'
            }
          },
          valuesFilePath: {
            required: false,
            serializedName: 'valuesFilePath',
            type: {
              name: 'String'
            }
          },
          values: {
            required: false,
            serializedName: 'values',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'SetValueElementType',
                  type: {
                    name: 'Composite',
                    className: 'SetValue'
                  }
              }
            }
          },
          contextPath: {
            required: false,
            serializedName: 'contextPath',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = FileTaskStepUpdateParameters;
