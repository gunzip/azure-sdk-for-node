/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource } from 'ms-rest-azure';
import { CloudError } from 'ms-rest-azure';
import * as moment from 'moment';

export { BaseResource } from 'ms-rest-azure';
export { CloudError } from 'ms-rest-azure';


/**
 * @class
 * Initializes a new instance of the CopyLogDetails class.
 * @constructor
 * Details for log generated during copy.
 *
 * @member {string} copyLogDetailsType Polymorphic Discriminator
 */
export interface CopyLogDetails {
  copyLogDetailsType: string;
}

/**
 * @class
 * Initializes a new instance of the AccountCopyLogDetails class.
 * @constructor
 * Copy log details for an storage account
 *
 * @member {string} accountName Destination account name.
 * @member {string} copyLogLink Link for copy logs.
 */
export interface AccountCopyLogDetails extends CopyLogDetails {
  accountName: string;
  copyLogLink: string;
}

/**
 * @class
 * Initializes a new instance of the ShareCredentialDetails class.
 * @constructor
 * Credential details of the shares in account.
 *
 * @member {string} [shareName] Name of the share.
 * @member {string} [userName] User name for the share.
 * @member {string} [password] Password for the share.
 */
export interface ShareCredentialDetails {
  shareName?: string;
  userName?: string;
  password?: string;
}

/**
 * @class
 * Initializes a new instance of the AccountCredentialDetails class.
 * @constructor
 * Credential details of the account.
 *
 * @member {string} [accountName] Name of the account.
 * @member {array} shareCredentialDetails Per share level unencrypted access
 * credentials.
 */
export interface AccountCredentialDetails {
  accountName?: string;
  shareCredentialDetails: ShareCredentialDetails[];
}

/**
 * @class
 * Initializes a new instance of the ShippingAddress class.
 * @constructor
 * Shipping address where customer wishes to receive the device.
 *
 * @member {string} streetAddress1 Street Address line 1.
 * @member {string} [streetAddress2] Street Address line 2.
 * @member {string} [streetAddress3] Street Address line 3.
 * @member {string} [city] Name of the City.
 * @member {string} [stateOrProvince] Name of the State or Province.
 * @member {string} country Name of the Country.
 * @member {string} postalCode Postal code.
 * @member {string} [zipExtendedCode] Extended Zip Code.
 * @member {string} [companyName] Name of the company.
 * @member {string} [addressType] Type of address. Possible values include:
 * 'None', 'Residential', 'Commercial'
 */
export interface ShippingAddress {
  streetAddress1: string;
  streetAddress2?: string;
  streetAddress3?: string;
  city?: string;
  stateOrProvince?: string;
  country: string;
  postalCode: string;
  zipExtendedCode?: string;
  companyName?: string;
  addressType?: string;
}

/**
 * @class
 * Initializes a new instance of the AddressValidationOutput class.
 * @constructor
 * Output of the address validation api.
 *
 * @member {string} [validationStatus] The address validation status. Possible
 * values include: 'Valid', 'Invalid', 'Ambiguous'
 * @member {array} [alternateAddresses] List of alternate addresses.
 */
export interface AddressValidationOutput {
  validationStatus?: string;
  alternateAddresses?: ShippingAddress[];
}

/**
 * @class
 * Initializes a new instance of the ArmBaseObject class.
 * @constructor
 * Base class for all objects under resource.
 *
 * @member {string} [name] Name of the object.
 * @member {string} [id] Id of the object.
 * @member {string} [type] Type of the object.
 */
export interface ArmBaseObject {
  readonly name?: string;
  readonly id?: string;
  readonly type?: string;
}

/**
 * @class
 * Initializes a new instance of the AvailableSkuRequest class.
 * @constructor
 * The filters for showing the available skus.
 *
 * @member {string} country ISO country code. Country for hardware shipment.
 * For codes check:
 * https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements
 * @member {string} location Location for data transfer. For locations check:
 * https://management.azure.com/subscriptions/SUBSCRIPTIONID/locations?api-version=2018-01-01
 */
export interface AvailableSkuRequest {
  country: string;
  location: string;
}

/**
 * @class
 * Initializes a new instance of the Sku class.
 * @constructor
 * The Sku.
 *
 * @member {string} name The sku name.
 * @member {string} [displayName] The display name of the sku.
 * @member {string} [family] The sku family.
 */
export interface Sku {
  name: string;
  displayName?: string;
  family?: string;
}

/**
 * @class
 * Initializes a new instance of the DestinationToServiceLocationMap class.
 * @constructor
 * Map of destination location to service location
 *
 * @member {string} [destinationLocation] Location of the destination.
 * @member {string} [serviceLocation] Location of the service.
 */
export interface DestinationToServiceLocationMap {
  destinationLocation?: string;
  serviceLocation?: string;
}

/**
 * @class
 * Initializes a new instance of the SkuCapacity class.
 * @constructor
 * Capacity of the sku.
 *
 * @member {string} usable Usable capacity in TB.
 * @member {string} maximum Maximum capacity in TB.
 */
export interface SkuCapacity {
  usable: string;
  maximum: string;
}

/**
 * @class
 * Initializes a new instance of the SkuCost class.
 * @constructor
 * Describes metadata for retrieving price info.
 *
 * @member {string} meterId Meter id of the Sku.
 * @member {string} meterType The type of the meter.
 */
export interface SkuCost {
  meterId: string;
  meterType: string;
}

/**
 * @class
 * Initializes a new instance of the SkuInformation class.
 * @constructor
 * Information of the sku.
 *
 * @member {object} sku The Sku.
 * @member {string} [sku.name] The sku name.
 * @member {string} [sku.displayName] The display name of the sku.
 * @member {string} [sku.family] The sku family.
 * @member {boolean} enabled The sku is enabled or not.
 * @member {array} [destinationToServiceLocationMap] The map of destination
 * location to service location.
 * @member {object} capacity Capacity of the Sku.
 * @member {string} [capacity.usable] Usable capacity in TB.
 * @member {string} [capacity.maximum] Maximum capacity in TB.
 * @member {array} costs Cost of the Sku.
 * @member {array} apiVersions Api versions that support this Sku.
 * @member {string} [disabledReason] Reason why the Sku is disabled.
 */
export interface SkuInformation {
  sku: Sku;
  enabled: boolean;
  destinationToServiceLocationMap?: DestinationToServiceLocationMap[];
  capacity: SkuCapacity;
  costs: SkuCost[];
  apiVersions: string[];
  disabledReason?: string;
}

/**
 * @class
 * Initializes a new instance of the CabinetPodSecret class.
 * @constructor
 * The secrets related to a cabinet pod.
 *
 * @member {string} [deviceSerialNumber] Serial number of the assigned device.
 * @member {string} [devicePassword] Password for out of the box experience on
 * device.
 * @member {array} [accountCredentialDetails] Per account level access
 * credentials.
 */
export interface CabinetPodSecret {
  deviceSerialNumber?: string;
  devicePassword?: string;
  accountCredentialDetails?: AccountCredentialDetails[];
}

/**
 * @class
 * Initializes a new instance of the JobSecrets class.
 * @constructor
 * The base class for the secrets
 *
 * @member {string} jobSecretsType Polymorphic Discriminator
 */
export interface JobSecrets {
  jobSecretsType: string;
}

/**
 * @class
 * Initializes a new instance of the CabinetJobSecrets class.
 * @constructor
 * The secrets related to a cabinet job.
 *
 * @member {array} [cabinetPodSecrets] Contains the list of secret objects for
 * a cabinet job.
 */
export interface CabinetJobSecrets extends JobSecrets {
  cabinetPodSecrets?: CabinetPodSecret[];
}

/**
 * @class
 * Initializes a new instance of the CancellationReason class.
 * @constructor
 * Reason for cancellation.
 *
 * @member {string} reason Reason for cancellation.
 */
export interface CancellationReason {
  reason: string;
}

/**
 * @class
 * Initializes a new instance of the NotificationPreference class.
 * @constructor
 * Notification preference for a job stage.
 *
 * @member {string} stageName Name of the stage. Possible values include:
 * 'DevicePrepared', 'Dispatched', 'Delivered', 'PickedUp', 'AtAzureDC',
 * 'DataCopy'
 * @member {boolean} sendNotification Notification is required or not.
 */
export interface NotificationPreference {
  stageName: string;
  sendNotification: boolean;
}

/**
 * @class
 * Initializes a new instance of the ContactDetails class.
 * @constructor
 * Contact Details.
 *
 * @member {string} [contactName] Contact name of the person.
 * @member {string} phone Phone number of the contact person.
 * @member {string} [phoneExtension] Phone extension number of the contact
 * person.
 * @member {string} [mobile] Mobile number of the contact person.
 * @member {array} emailList List of Email-ids to be notified about job
 * progress.
 * @member {array} [notificationPreference] Notification preference for a job
 * stage.
 */
export interface ContactDetails {
  contactName?: string;
  phone: string;
  phoneExtension?: string;
  mobile?: string;
  emailList: string[];
  notificationPreference?: NotificationPreference[];
}

/**
 * @class
 * Initializes a new instance of the CopyProgress class.
 * @constructor
 * Copy progress.
 *
 * @member {string} [storageAccountName] Name of the storage account where the
 * data needs to be uploaded.
 * @member {number} [bytesSentToCloud] Amount of data uploaded by the job as of
 * now.
 * @member {number} [totalBytesToProcess] Total amount of data to be processed
 * by the job.
 */
export interface CopyProgress {
  storageAccountName?: string;
  bytesSentToCloud?: number;
  totalBytesToProcess?: number;
}

/**
 * @class
 * Initializes a new instance of the DestinationAccountDetails class.
 * @constructor
 * Details for the destination account.
 *
 * @member {string} accountId Destination storage account id.
 */
export interface DestinationAccountDetails {
  accountId: string;
}

/**
 * @class
 * Initializes a new instance of the DiskCopyLogDetails class.
 * @constructor
 * Copy Log Details for a disk
 *
 * @member {string} diskSerialNumber Disk Serial Number.
 * @member {string} errorLogLink Link for copy error logs.
 * @member {string} verboseLogLink Link for copy verbose logs.
 */
export interface DiskCopyLogDetails extends CopyLogDetails {
  diskSerialNumber: string;
  errorLogLink: string;
  verboseLogLink: string;
}

/**
 * @class
 * Initializes a new instance of the DiskCopyProgress class.
 * @constructor
 * Disk Copy Progress
 *
 * @member {string} [serialNumber] The serial number of the disk
 * @member {number} [percentComplete] Indicates the percentage completed for
 * the copy of the disk.
 * @member {string} [status] The Status of the copy. Possible values include:
 * 'NotStarted', 'InProgress', 'Completed', 'CompletedWithErrors', 'Failed'
 */
export interface DiskCopyProgress {
  serialNumber?: string;
  percentComplete?: number;
  status?: string;
}

/**
 * @class
 * Initializes a new instance of the JobDetails class.
 * @constructor
 * Job details.
 *
 * @member {number} [expectedDataSizeInTeraBytes] The expected size of the
 * data, which needs to be transfered in this job, in tera bytes.
 * @member {array} [jobStages] List of stages that run in the job.
 * @member {object} contactDetails Contact details for notification and
 * shipping.
 * @member {string} [contactDetails.contactName] Contact name of the person.
 * @member {string} [contactDetails.phone] Phone number of the contact person.
 * @member {string} [contactDetails.phoneExtension] Phone extension number of
 * the contact person.
 * @member {string} [contactDetails.mobile] Mobile number of the contact
 * person.
 * @member {array} [contactDetails.emailList] List of Email-ids to be notified
 * about job progress.
 * @member {array} [contactDetails.notificationPreference] Notification
 * preference for a job stage.
 * @member {object} shippingAddress Shipping address of the customer.
 * @member {string} [shippingAddress.streetAddress1] Street Address line 1.
 * @member {string} [shippingAddress.streetAddress2] Street Address line 2.
 * @member {string} [shippingAddress.streetAddress3] Street Address line 3.
 * @member {string} [shippingAddress.city] Name of the City.
 * @member {string} [shippingAddress.stateOrProvince] Name of the State or
 * Province.
 * @member {string} [shippingAddress.country] Name of the Country.
 * @member {string} [shippingAddress.postalCode] Postal code.
 * @member {string} [shippingAddress.zipExtendedCode] Extended Zip Code.
 * @member {string} [shippingAddress.companyName] Name of the company.
 * @member {string} [shippingAddress.addressType] Type of address. Possible
 * values include: 'None', 'Residential', 'Commercial'
 * @member {array} [errorDetails] Error details for failure. This is optional.
 * @member {string} jobDetailsType Polymorphic Discriminator
 */
export interface JobDetails {
  expectedDataSizeInTeraBytes?: number;
  jobStages?: JobStages[];
  contactDetails: ContactDetails;
  shippingAddress: ShippingAddress;
  errorDetails?: JobErrorDetails[];
  jobDetailsType: string;
}

/**
 * @class
 * Initializes a new instance of the DiskJobDetails class.
 * @constructor
 * Disk Job Details.
 *
 * @member {object} [preferredDisks] User preference on what size disks are
 * needed for the job. The map is from the disk size in TB to the count. Eg.
 * {2,5} means 5 disks of 2 TB size. Key is string but will be checked against
 * an int.
 * @member {array} [copyProgress] Copy progress per disk.
 * @member {object} [disksAndSizeDetails] Contains the map of disk serial
 * number to the disk size being used for the job. Is returned only after the
 * disks are shipped to the customer.
 */
export interface DiskJobDetails extends JobDetails {
  preferredDisks?: { [propertyName: string]: number };
  copyProgress?: DiskCopyProgress[];
  disksAndSizeDetails?: { [propertyName: string]: number };
}

/**
 * @class
 * Initializes a new instance of the DiskSecret class.
 * @constructor
 * Contains all the secrets of a Disk.
 *
 * @member {string} [diskSerialNumber] Serial number of the assigned disk.
 * @member {string} [bitLockerKey] Bit Locker key of the disk which can be used
 * to unlock the disk to copy data.
 */
export interface DiskSecret {
  diskSerialNumber?: string;
  bitLockerKey?: string;
}

/**
 * @class
 * Initializes a new instance of the DiskJobSecrets class.
 * @constructor
 * The secrets related to disk job.
 *
 * @member {array} [diskSecrets] Contains the list of secrets object for that
 * device.
 */
export interface DiskJobSecrets extends JobSecrets {
  diskSecrets?: DiskSecret[];
}

/**
 * @class
 * Initializes a new instance of the ErrorModel class.
 * @constructor
 * Top level error for the job.
 *
 * @member {string} code Error code that can be used to programmatically
 * identify the error.
 * @member {string} [message] Describes the error in detail and provides
 * debugging information.
 */
export interface ErrorModel {
  code: string;
  message?: string;
}

/**
 * @class
 * Initializes a new instance of the GetCopyLogsUriOutput class.
 * @constructor
 * Output for the GetCopyLogsUri.
 *
 * @member {string} [logType] Type/Level of the log.
 * @member {array} [copyLogDetails] List of copy log details.
 */
export interface GetCopyLogsUriOutput {
  logType?: string;
  copyLogDetails?: CopyLogDetails[];
}

/**
 * @class
 * Initializes a new instance of the JobErrorDetails class.
 * @constructor
 * Job Error Details for providing the information and recommended action.
 *
 * @member {string} [errorMessage] Message for the error.
 * @member {number} [errorCode] Code for the error.
 * @member {string} [recommendedAction] Recommended action for the error.
 * @member {string} [exceptionMessage] Contains the non localized exception
 * message
 */
export interface JobErrorDetails {
  errorMessage?: string;
  errorCode?: number;
  recommendedAction?: string;
  exceptionMessage?: string;
}

/**
 * @class
 * Initializes a new instance of the JobStages class.
 * @constructor
 * Job stages.
 *
 * @member {string} stageName Name of the job stage. Possible values include:
 * 'DeviceOrdered', 'DevicePrepared', 'Dispatched', 'Delivered', 'PickedUp',
 * 'AtAzureDC', 'DataCopy', 'Completed', 'CompletedWithErrors', 'Cancelled',
 * 'Failed_IssueReportedAtCustomer', 'Failed_IssueDetectedAtAzureDC', 'Aborted'
 * @member {string} [displayName] Display name of the job stage.
 * @member {string} stageStatus Status of the job stage. Possible values
 * include: 'None', 'InProgress', 'Succeeded', 'Failed', 'Cancelled',
 * 'Cancelling', 'SucceededWithErrors'
 * @member {date} [stageTime] Time for the job stage in UTC ISO 8601 format.
 * @member {object} [jobStageDetails] Job Stage Details
 * @member {array} [errorDetails] Error details for the stage.
 */
export interface JobStages {
  stageName: string;
  displayName?: string;
  stageStatus: string;
  stageTime?: Date;
  jobStageDetails?: any;
  errorDetails?: JobErrorDetails[];
}

/**
 * @class
 * Initializes a new instance of the PackageShippingDetails class.
 * @constructor
 * Shipping details.
 *
 * @member {string} [carrierName] Name of the carrier.
 * @member {string} [trackingId] Tracking Id of shipment.
 * @member {string} [trackingUrl] Url where shipment can be tracked.
 */
export interface PackageShippingDetails {
  carrierName?: string;
  trackingId?: string;
  trackingUrl?: string;
}

/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * Model of the Resource.
 *
 * @member {string} location The location of the resource. This will be one of
 * the supported and registered Azure Regions (e.g. West US, East US, Southeast
 * Asia, etc.). The region of a resource cannot be changed once it is created,
 * but if an identical region is specified on update the request will succeed.
 * @member {object} [tags] The list of key value pairs that describe the
 * resource. These tags can be used in viewing and grouping this resource
 * (across resource groups).
 * @member {object} sku The sku type.
 * @member {string} [sku.name] The sku name.
 * @member {string} [sku.displayName] The display name of the sku.
 * @member {string} [sku.family] The sku family.
 */
export interface Resource extends BaseResource {
  location: string;
  tags?: { [propertyName: string]: string };
  sku: Sku;
}

/**
 * @class
 * Initializes a new instance of the JobResource class.
 * @constructor
 * Job Resource.
 *
 * @member {string} [deviceType] Type of the device to be used for the job.
 * Possible values include: 'Pod', 'Disk', 'Cabinet'
 * @member {boolean} [isCancellable] Describes whether the job is cancellable
 * or not.
 * @member {boolean} [isShippingAddressEditable] Describes whether the shipping
 * address is editable or not.
 * @member {string} [status] Name of the stage which is in progress. Possible
 * values include: 'DeviceOrdered', 'DevicePrepared', 'Dispatched',
 * 'Delivered', 'PickedUp', 'AtAzureDC', 'DataCopy', 'Completed',
 * 'CompletedWithErrors', 'Cancelled', 'Failed_IssueReportedAtCustomer',
 * 'Failed_IssueDetectedAtAzureDC', 'Aborted'
 * @member {date} [startTime] Time at which the job was started in UTC ISO 8601
 * format.
 * @member {object} [error] Top level error for the job.
 * @member {string} [error.code] Error code that can be used to
 * programmatically identify the error.
 * @member {string} [error.message] Describes the error in detail and provides
 * debugging information.
 * @member {object} [deliveryPackage] Delivery package shipping details.
 * @member {string} [deliveryPackage.carrierName] Name of the carrier.
 * @member {string} [deliveryPackage.trackingId] Tracking Id of shipment.
 * @member {string} [deliveryPackage.trackingUrl] Url where shipment can be
 * tracked.
 * @member {object} [returnPackage] Return package shipping details.
 * @member {string} [returnPackage.carrierName] Name of the carrier.
 * @member {string} [returnPackage.trackingId] Tracking Id of shipment.
 * @member {string} [returnPackage.trackingUrl] Url where shipment can be
 * tracked.
 * @member {array} destinationAccountDetails Destination account details.
 * @member {object} [details] Details of a job run. This field will only be
 * sent for expand details filter.
 * @member {number} [details.expectedDataSizeInTeraBytes] The expected size of
 * the data, which needs to be transfered in this job, in tera bytes.
 * @member {array} [details.jobStages] List of stages that run in the job.
 * @member {object} [details.contactDetails] Contact details for notification
 * and shipping.
 * @member {string} [details.contactDetails.contactName] Contact name of the
 * person.
 * @member {string} [details.contactDetails.phone] Phone number of the contact
 * person.
 * @member {string} [details.contactDetails.phoneExtension] Phone extension
 * number of the contact person.
 * @member {string} [details.contactDetails.mobile] Mobile number of the
 * contact person.
 * @member {array} [details.contactDetails.emailList] List of Email-ids to be
 * notified about job progress.
 * @member {array} [details.contactDetails.notificationPreference] Notification
 * preference for a job stage.
 * @member {object} [details.shippingAddress] Shipping address of the customer.
 * @member {string} [details.shippingAddress.streetAddress1] Street Address
 * line 1.
 * @member {string} [details.shippingAddress.streetAddress2] Street Address
 * line 2.
 * @member {string} [details.shippingAddress.streetAddress3] Street Address
 * line 3.
 * @member {string} [details.shippingAddress.city] Name of the City.
 * @member {string} [details.shippingAddress.stateOrProvince] Name of the State
 * or Province.
 * @member {string} [details.shippingAddress.country] Name of the Country.
 * @member {string} [details.shippingAddress.postalCode] Postal code.
 * @member {string} [details.shippingAddress.zipExtendedCode] Extended Zip
 * Code.
 * @member {string} [details.shippingAddress.companyName] Name of the company.
 * @member {string} [details.shippingAddress.addressType] Type of address.
 * Possible values include: 'None', 'Residential', 'Commercial'
 * @member {array} [details.errorDetails] Error details for failure. This is
 * optional.
 * @member {string} [details.jobDetailsType] Polymorphic Discriminator
 * @member {string} [cancellationReason] Reason for cancellation.
 * @member {string} [name] Name of the object.
 * @member {string} [id] Id of the object.
 * @member {string} [type] Type of the object.
 */
export interface JobResource extends Resource {
  deviceType?: string;
  isCancellable?: boolean;
  isShippingAddressEditable?: boolean;
  status?: string;
  startTime?: Date;
  error?: ErrorModel;
  deliveryPackage?: PackageShippingDetails;
  returnPackage?: PackageShippingDetails;
  destinationAccountDetails: DestinationAccountDetails[];
  details?: JobDetails;
  cancellationReason?: string;
  readonly name?: string;
  readonly id?: string;
  readonly type?: string;
}

/**
 * @class
 * Initializes a new instance of the UpdateJobDetails class.
 * @constructor
 * Job details for update.
 *
 * @member {object} [contactDetails] Contact details for notification and
 * shipping.
 * @member {string} [contactDetails.contactName] Contact name of the person.
 * @member {string} [contactDetails.phone] Phone number of the contact person.
 * @member {string} [contactDetails.phoneExtension] Phone extension number of
 * the contact person.
 * @member {string} [contactDetails.mobile] Mobile number of the contact
 * person.
 * @member {array} [contactDetails.emailList] List of Email-ids to be notified
 * about job progress.
 * @member {array} [contactDetails.notificationPreference] Notification
 * preference for a job stage.
 * @member {object} [shippingAddress] Shipping address of the customer.
 * @member {string} [shippingAddress.streetAddress1] Street Address line 1.
 * @member {string} [shippingAddress.streetAddress2] Street Address line 2.
 * @member {string} [shippingAddress.streetAddress3] Street Address line 3.
 * @member {string} [shippingAddress.city] Name of the City.
 * @member {string} [shippingAddress.stateOrProvince] Name of the State or
 * Province.
 * @member {string} [shippingAddress.country] Name of the Country.
 * @member {string} [shippingAddress.postalCode] Postal code.
 * @member {string} [shippingAddress.zipExtendedCode] Extended Zip Code.
 * @member {string} [shippingAddress.companyName] Name of the company.
 * @member {string} [shippingAddress.addressType] Type of address. Possible
 * values include: 'None', 'Residential', 'Commercial'
 */
export interface UpdateJobDetails {
  contactDetails?: ContactDetails;
  shippingAddress?: ShippingAddress;
}

/**
 * @class
 * Initializes a new instance of the JobResourceUpdateParameter class.
 * @constructor
 * The JobResourceUpdateParameter.
 *
 * @member {object} details Details of a job to be updated.
 * @member {object} [details.contactDetails] Contact details for notification
 * and shipping.
 * @member {string} [details.contactDetails.contactName] Contact name of the
 * person.
 * @member {string} [details.contactDetails.phone] Phone number of the contact
 * person.
 * @member {string} [details.contactDetails.phoneExtension] Phone extension
 * number of the contact person.
 * @member {string} [details.contactDetails.mobile] Mobile number of the
 * contact person.
 * @member {array} [details.contactDetails.emailList] List of Email-ids to be
 * notified about job progress.
 * @member {array} [details.contactDetails.notificationPreference] Notification
 * preference for a job stage.
 * @member {object} [details.shippingAddress] Shipping address of the customer.
 * @member {string} [details.shippingAddress.streetAddress1] Street Address
 * line 1.
 * @member {string} [details.shippingAddress.streetAddress2] Street Address
 * line 2.
 * @member {string} [details.shippingAddress.streetAddress3] Street Address
 * line 3.
 * @member {string} [details.shippingAddress.city] Name of the City.
 * @member {string} [details.shippingAddress.stateOrProvince] Name of the State
 * or Province.
 * @member {string} [details.shippingAddress.country] Name of the Country.
 * @member {string} [details.shippingAddress.postalCode] Postal code.
 * @member {string} [details.shippingAddress.zipExtendedCode] Extended Zip
 * Code.
 * @member {string} [details.shippingAddress.companyName] Name of the company.
 * @member {string} [details.shippingAddress.addressType] Type of address.
 * Possible values include: 'None', 'Residential', 'Commercial'
 * @member {object} [tags] The list of key value pairs that describe the
 * resource. These tags can be used in viewing and grouping this resource
 * (across resource groups).
 */
export interface JobResourceUpdateParameter {
  details: UpdateJobDetails;
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the OperationDisplay class.
 * @constructor
 * Operation display
 *
 * @member {string} [provider] Provider name.
 * @member {string} [resource] Resource name.
 * @member {string} [operation] Localized name of the operation for display
 * purpose.
 * @member {string} [description] Localized description of the operation for
 * display purpose.
 */
export interface OperationDisplay {
  provider?: string;
  resource?: string;
  operation?: string;
  description?: string;
}

/**
 * @class
 * Initializes a new instance of the Operation class.
 * @constructor
 * Operation entity.
 *
 * @member {string} name Name of the operation. Format:
 * {resourceProviderNamespace}/{resourceType}/{read|write|delete|action}
 * @member {object} display Operation display values.
 * @member {string} [display.provider] Provider name.
 * @member {string} [display.resource] Resource name.
 * @member {string} [display.operation] Localized name of the operation for
 * display purpose.
 * @member {string} [display.description] Localized description of the
 * operation for display purpose.
 * @member {object} properties Operation properties.
 * @member {string} origin Origin of the operation. Can be :
 * user|system|user,system
 */
export interface Operation {
  name: string;
  display: OperationDisplay;
  properties: any;
  origin: string;
}

/**
 * @class
 * Initializes a new instance of the PodJobDetails class.
 * @constructor
 * Pod Job Details
 *
 * @member {array} [copyProgress] Copy progress per account.
 */
export interface PodJobDetails extends JobDetails {
  copyProgress?: CopyProgress[];
}

/**
 * @class
 * Initializes a new instance of the PodSecret class.
 * @constructor
 * The secrets related to a Pod.
 *
 * @member {string} [deviceSerialNumber] Serial number of the assigned device.
 * @member {string} [devicePassword] Password for out of the box experience on
 * device.
 * @member {array} [accountCredentialDetails] Per account level access
 * credentials.
 */
export interface PodSecret {
  deviceSerialNumber?: string;
  devicePassword?: string;
  accountCredentialDetails?: AccountCredentialDetails[];
}

/**
 * @class
 * Initializes a new instance of the PodJobSecrets class.
 * @constructor
 * The secrets related to a pod job.
 *
 * @member {array} [podSecrets] Contains the list of secret objects for a job.
 */
export interface PodJobSecrets extends JobSecrets {
  podSecrets?: PodSecret[];
}

/**
 * @class
 * Initializes a new instance of the ReportIssueDetails class.
 * @constructor
 * Details of the reported issue.
 *
 * @member {string} [issueType] Issue Type. Possible values include:
 * 'DeviceMismatch', 'ValidationStringMismatch', 'CredentialNotWorking',
 * 'DeviceFailure'
 * @member {string} [deviceIssueType] Device Issue Type. Only used for Device
 * failure issue. Possible values include: 'DeviceTampering',
 * 'DeviceNotBootingUp', 'DeviceHealthCheckShowFailures', 'NICsAreNotWorking',
 * 'Misc'
 */
export interface ReportIssueDetails {
  issueType?: string;
  deviceIssueType?: string;
}

/**
 * @class
 * Initializes a new instance of the ServiceHealthResponse class.
 * @constructor
 * Response of the GetServiceHealth api.
 *
 * @member {string} [connectorType] Name of the connector.
 * @member {date} [startTime] Time when the action was triggered.
 * @member {date} [endTime] Time when the action got completed.
 * @member {boolean} [status] Status of the service.
 */
export interface ServiceHealthResponse {
  connectorType?: string;
  startTime?: Date;
  endTime?: Date;
  status?: boolean;
}

/**
 * @class
 * Initializes a new instance of the ServiceHealthResponseList class.
 * @constructor
 * List of service health response.
 *
 * @member {array} [dependencies] List of ServiceHealthResponse.
 * @member {string} [serviceVersion] Version of the service.
 */
export interface ServiceHealthResponseList {
  dependencies?: ServiceHealthResponse[];
  serviceVersion?: string;
}

/**
 * @class
 * Initializes a new instance of the ShipmentPickUpRequest class.
 * @constructor
 * Shipment pick up request details.
 *
 * @member {date} [startTime] Minimum date after which the pick up should
 * commence, this must be in local time of pick up area.
 * @member {date} [endTime] Maximum date before which the pick up should
 * commence, this must be in local time of pick up area.
 * @member {string} [shipmentLocation] Shipment Location in the pickup place.
 * Eg.front desk
 */
export interface ShipmentPickUpRequest {
  startTime?: Date;
  endTime?: Date;
  shipmentLocation?: string;
}

/**
 * @class
 * Initializes a new instance of the ShipmentPickUpResponse class.
 * @constructor
 * Shipment pick up response.
 *
 * @member {string} [confirmationNumber] Confirmation number for the pick up
 * request.
 * @member {date} [readyByTime] Time by which shipment should be ready for pick
 * up, this is in local time of pick up area.
 */
export interface ShipmentPickUpResponse {
  confirmationNumber?: string;
  readyByTime?: Date;
}

/**
 * @class
 * Initializes a new instance of the ShippingLabelDetails class.
 * @constructor
 * Details for the shipping label.
 *
 * @member {string} shippingLabelSasUri Sas uri for accessing the shipping
 * label.
 */
export interface ShippingLabelDetails {
  shippingLabelSasUri: string;
}

/**
 * @class
 * Initializes a new instance of the UnencryptedSecrets class.
 * @constructor
 * Unencrypted secrets for accessing device.
 *
 * @member {string} jobName Name of the job.
 * @member {string} [deviceType] The Device Type used in the job. Possible
 * values include: 'Pod', 'Disk', 'Cabinet'
 * @member {object} [jobSecrets] Secrets related to this job.
 * @member {string} [jobSecrets.jobSecretsType] Polymorphic Discriminator
 */
export interface UnencryptedSecrets {
  jobName: string;
  deviceType?: string;
  jobSecrets?: JobSecrets;
}

/**
 * @class
 * Initializes a new instance of the ValidateAddress class.
 * @constructor
 * The requirements to validate customer address where the device needs to be
 * shipped.
 *
 * @member {object} [shippingAddress] Shipping address of the customer.
 * @member {string} [shippingAddress.streetAddress1] Street Address line 1.
 * @member {string} [shippingAddress.streetAddress2] Street Address line 2.
 * @member {string} [shippingAddress.streetAddress3] Street Address line 3.
 * @member {string} [shippingAddress.city] Name of the City.
 * @member {string} [shippingAddress.stateOrProvince] Name of the State or
 * Province.
 * @member {string} [shippingAddress.country] Name of the Country.
 * @member {string} [shippingAddress.postalCode] Postal code.
 * @member {string} [shippingAddress.zipExtendedCode] Extended Zip Code.
 * @member {string} [shippingAddress.companyName] Name of the company.
 * @member {string} [shippingAddress.addressType] Type of address. Possible
 * values include: 'None', 'Residential', 'Commercial'
 * @member {string} [deviceType] Device type to be used for the job. Possible
 * values include: 'Pod', 'Disk', 'Cabinet'
 */
export interface ValidateAddress {
  shippingAddress?: ShippingAddress;
  deviceType?: string;
}


/**
 * @class
 * Initializes a new instance of the OperationList class.
 * @constructor
 * Operation Collection.
 *
 * @member {string} [nextLink] Link for the next set of operations.
 */
export interface OperationList extends Array<Operation> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the JobResourceList class.
 * @constructor
 * Job Resource Collection
 *
 * @member {string} [nextLink] Link for the next set of job resources.
 */
export interface JobResourceList extends Array<JobResource> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the AvailableSkusResult class.
 * @constructor
 * The available skus operation response.
 *
 * @member {string} [nextLink] Link for the next set of skus.
 */
export interface AvailableSkusResult extends Array<SkuInformation> {
  nextLink?: string;
}
