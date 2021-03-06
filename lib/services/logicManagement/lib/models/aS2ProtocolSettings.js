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
 * The AS2 agreement protocol settings.
 *
 */
class AS2ProtocolSettings {
  /**
   * Create a AS2ProtocolSettings.
   * @member {object} messageConnectionSettings The message connection
   * settings.
   * @member {boolean}
   * [messageConnectionSettings.ignoreCertificateNameMismatch] The value
   * indicating whether to ignore mismatch in certificate name.
   * @member {boolean}
   * [messageConnectionSettings.supportHttpStatusCodeContinue] The value
   * indicating whether to support HTTP status code 'CONTINUE'.
   * @member {boolean} [messageConnectionSettings.keepHttpConnectionAlive] The
   * value indicating whether to keep the connection alive.
   * @member {boolean} [messageConnectionSettings.unfoldHttpHeaders] The value
   * indicating whether to unfold the HTTP headers.
   * @member {object} acknowledgementConnectionSettings The acknowledgement
   * connection settings.
   * @member {boolean}
   * [acknowledgementConnectionSettings.ignoreCertificateNameMismatch] The
   * value indicating whether to ignore mismatch in certificate name.
   * @member {boolean}
   * [acknowledgementConnectionSettings.supportHttpStatusCodeContinue] The
   * value indicating whether to support HTTP status code 'CONTINUE'.
   * @member {boolean}
   * [acknowledgementConnectionSettings.keepHttpConnectionAlive] The value
   * indicating whether to keep the connection alive.
   * @member {boolean} [acknowledgementConnectionSettings.unfoldHttpHeaders]
   * The value indicating whether to unfold the HTTP headers.
   * @member {object} mdnSettings The MDN settings.
   * @member {boolean} [mdnSettings.needMdn] The value indicating whether to
   * send or request a MDN.
   * @member {boolean} [mdnSettings.signMdn] The value indicating whether the
   * MDN needs to be signed or not.
   * @member {boolean} [mdnSettings.sendMdnAsynchronously] The value indicating
   * whether to send the asynchronous MDN.
   * @member {string} [mdnSettings.receiptDeliveryUrl] The receipt delivery
   * URL.
   * @member {string} [mdnSettings.dispositionNotificationTo] The disposition
   * notification to header value.
   * @member {boolean} [mdnSettings.signOutboundMdnIfOptional] The value
   * indicating whether to sign the outbound MDN if optional.
   * @member {string} [mdnSettings.mdnText] The MDN text.
   * @member {boolean} [mdnSettings.sendInboundMdnToMessageBox] The value
   * indicating whether to send inbound MDN to message box.
   * @member {string} [mdnSettings.micHashingAlgorithm] The signing or hashing
   * algorithm. Possible values include: 'NotSpecified', 'None', 'MD5', 'SHA1',
   * 'SHA2256', 'SHA2384', 'SHA2512'
   * @member {object} securitySettings The security settings.
   * @member {boolean} [securitySettings.overrideGroupSigningCertificate] The
   * value indicating whether to send or request a MDN.
   * @member {string} [securitySettings.signingCertificateName] The name of the
   * signing certificate.
   * @member {string} [securitySettings.encryptionCertificateName] The name of
   * the encryption certificate.
   * @member {boolean} [securitySettings.enableNrrForInboundEncodedMessages]
   * The value indicating whether to enable NRR for inbound encoded messages.
   * @member {boolean} [securitySettings.enableNrrForInboundDecodedMessages]
   * The value indicating whether to enable NRR for inbound decoded messages.
   * @member {boolean} [securitySettings.enableNrrForOutboundMdn] The value
   * indicating whether to enable NRR for outbound MDN.
   * @member {boolean} [securitySettings.enableNrrForOutboundEncodedMessages]
   * The value indicating whether to enable NRR for outbound encoded messages.
   * @member {boolean} [securitySettings.enableNrrForOutboundDecodedMessages]
   * The value indicating whether to enable NRR for outbound decoded messages.
   * @member {boolean} [securitySettings.enableNrrForInboundMdn] The value
   * indicating whether to enable NRR for inbound MDN.
   * @member {string} [securitySettings.sha2AlgorithmFormat] The Sha2 algorithm
   * format. Valid values are Sha2, ShaHashSize, ShaHyphenHashSize,
   * Sha2UnderscoreHashSize.
   * @member {object} validationSettings The validation settings.
   * @member {boolean} [validationSettings.overrideMessageProperties] The value
   * indicating whether to override incoming message properties with those in
   * agreement.
   * @member {boolean} [validationSettings.encryptMessage] The value indicating
   * whether the message has to be encrypted.
   * @member {boolean} [validationSettings.signMessage] The value indicating
   * whether the message has to be signed.
   * @member {boolean} [validationSettings.compressMessage] The value
   * indicating whether the message has to be compressed.
   * @member {boolean} [validationSettings.checkDuplicateMessage] The value
   * indicating whether to check for duplicate message.
   * @member {number} [validationSettings.interchangeDuplicatesValidityDays]
   * The number of days to look back for duplicate interchange.
   * @member {boolean}
   * [validationSettings.checkCertificateRevocationListOnSend] The value
   * indicating whether to check for certificate revocation list on send.
   * @member {boolean}
   * [validationSettings.checkCertificateRevocationListOnReceive] The value
   * indicating whether to check for certificate revocation list on receive.
   * @member {string} [validationSettings.encryptionAlgorithm] The encryption
   * algorithm. Possible values include: 'NotSpecified', 'None', 'DES3', 'RC2',
   * 'AES128', 'AES192', 'AES256'
   * @member {string} [validationSettings.signingAlgorithm] The signing
   * algorithm. Possible values include: 'NotSpecified', 'Default', 'SHA1',
   * 'SHA2256', 'SHA2384', 'SHA2512'
   * @member {object} envelopeSettings The envelope settings.
   * @member {string} [envelopeSettings.messageContentType] The message content
   * type.
   * @member {boolean} [envelopeSettings.transmitFileNameInMimeHeader] The
   * value indicating whether to transmit file name in mime header.
   * @member {string} [envelopeSettings.fileNameTemplate] The template for file
   * name.
   * @member {boolean}
   * [envelopeSettings.suspendMessageOnFileNameGenerationError] The value
   * indicating whether to suspend message on file name generation error.
   * @member {boolean} [envelopeSettings.autogenerateFileName] The value
   * indicating whether to auto generate file name.
   * @member {object} errorSettings The error settings.
   * @member {boolean} [errorSettings.suspendDuplicateMessage] The value
   * indicating whether to suspend duplicate message.
   * @member {boolean} [errorSettings.resendIfMdnNotReceived] The value
   * indicating whether to resend message If MDN is not received.
   */
  constructor() {
  }

  /**
   * Defines the metadata of AS2ProtocolSettings
   *
   * @returns {object} metadata of AS2ProtocolSettings
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AS2ProtocolSettings',
      type: {
        name: 'Composite',
        className: 'AS2ProtocolSettings',
        modelProperties: {
          messageConnectionSettings: {
            required: true,
            serializedName: 'messageConnectionSettings',
            type: {
              name: 'Composite',
              className: 'AS2MessageConnectionSettings'
            }
          },
          acknowledgementConnectionSettings: {
            required: true,
            serializedName: 'acknowledgementConnectionSettings',
            type: {
              name: 'Composite',
              className: 'AS2AcknowledgementConnectionSettings'
            }
          },
          mdnSettings: {
            required: true,
            serializedName: 'mdnSettings',
            type: {
              name: 'Composite',
              className: 'AS2MdnSettings'
            }
          },
          securitySettings: {
            required: true,
            serializedName: 'securitySettings',
            type: {
              name: 'Composite',
              className: 'AS2SecuritySettings'
            }
          },
          validationSettings: {
            required: true,
            serializedName: 'validationSettings',
            type: {
              name: 'Composite',
              className: 'AS2ValidationSettings'
            }
          },
          envelopeSettings: {
            required: true,
            serializedName: 'envelopeSettings',
            type: {
              name: 'Composite',
              className: 'AS2EnvelopeSettings'
            }
          },
          errorSettings: {
            required: true,
            serializedName: 'errorSettings',
            type: {
              name: 'Composite',
              className: 'AS2ErrorSettings'
            }
          }
        }
      }
    };
  }
}

module.exports = AS2ProtocolSettings;
