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
 * Class representing a KeyPhraseBatchResult.
 */
class KeyPhraseBatchResult {
  /**
   * Create a KeyPhraseBatchResult.
   * @member {array} [documents]
   * @member {array} [errors]
   */
  constructor() {
  }

  /**
   * Defines the metadata of KeyPhraseBatchResult
   *
   * @returns {object} metadata of KeyPhraseBatchResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'KeyPhraseBatchResult',
      type: {
        name: 'Composite',
        className: 'KeyPhraseBatchResult',
        modelProperties: {
          documents: {
            required: false,
            readOnly: true,
            serializedName: 'documents',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'KeyPhraseBatchResultItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'KeyPhraseBatchResultItem'
                  }
              }
            }
          },
          errors: {
            required: false,
            readOnly: true,
            serializedName: 'errors',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ErrorRecordElementType',
                  type: {
                    name: 'Composite',
                    className: 'ErrorRecord'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = KeyPhraseBatchResult;