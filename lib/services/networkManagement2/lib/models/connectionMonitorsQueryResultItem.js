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
 * Results of query particular connection monitor.
 *
 */
class ConnectionMonitorsQueryResultItem {
  /**
   * Create a ConnectionMonitorsQueryResultItem.
   * @member {string} [resourceId] Connection monitor resource ID.
   * @member {object} [report]
   * @member {string} [report.sourceStatus] Status of connection monitor
   * source. Possible values include: 'Uknown', 'Active', 'Inactive'
   * @member {array} [report.states] Information about connection states.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ConnectionMonitorsQueryResultItem
   *
   * @returns {object} metadata of ConnectionMonitorsQueryResultItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ConnectionMonitorsQueryResultItem',
      type: {
        name: 'Composite',
        className: 'ConnectionMonitorsQueryResultItem',
        modelProperties: {
          resourceId: {
            required: false,
            serializedName: 'resourceId',
            type: {
              name: 'String'
            }
          },
          report: {
            required: false,
            serializedName: 'report',
            type: {
              name: 'Composite',
              className: 'ConnectionMonitorQueryResult'
            }
          }
        }
      }
    };
  }
}

module.exports = ConnectionMonitorsQueryResultItem;
