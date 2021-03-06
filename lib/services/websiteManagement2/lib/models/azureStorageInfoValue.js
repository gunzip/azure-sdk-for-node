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
 * Azure Files or Blob Storage access information value for dictionary storage.
 *
 */
class AzureStorageInfoValue {
  /**
   * Create a AzureStorageInfoValue.
   * @member {string} [type] Type of storage. Possible values include:
   * 'AzureFiles', 'AzureBlob'
   * @member {string} [accountName] Name of the storage account.
   * @member {string} [shareName] Name of the file share (container name, for
   * Blob storage).
   * @member {string} [accessKey] Access key for the storage account.
   * @member {string} [mountPath] Path to mount the storage within the site's
   * runtime environment.
   * @member {string} [state] State of the storage account. Possible values
   * include: 'Ok', 'InvalidCredentials', 'InvalidShare'
   */
  constructor() {
  }

  /**
   * Defines the metadata of AzureStorageInfoValue
   *
   * @returns {object} metadata of AzureStorageInfoValue
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AzureStorageInfoValue',
      type: {
        name: 'Composite',
        className: 'AzureStorageInfoValue',
        modelProperties: {
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'Enum',
              allowedValues: [ 'AzureFiles', 'AzureBlob' ]
            }
          },
          accountName: {
            required: false,
            serializedName: 'accountName',
            type: {
              name: 'String'
            }
          },
          shareName: {
            required: false,
            serializedName: 'shareName',
            type: {
              name: 'String'
            }
          },
          accessKey: {
            required: false,
            serializedName: 'accessKey',
            type: {
              name: 'String'
            }
          },
          mountPath: {
            required: false,
            serializedName: 'mountPath',
            type: {
              name: 'String'
            }
          },
          state: {
            required: false,
            readOnly: true,
            serializedName: 'state',
            type: {
              name: 'Enum',
              allowedValues: [ 'Ok', 'InvalidCredentials', 'InvalidShare' ]
            }
          }
        }
      }
    };
  }
}

module.exports = AzureStorageInfoValue;
