/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/galleryApplicationVersionsMappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";

/** Class representing a GalleryApplicationVersions. */
export class GalleryApplicationVersions {
  private readonly client: ComputeManagementClientContext;

  /**
   * Create a GalleryApplicationVersions.
   * @param {ComputeManagementClientContext} client Reference to the service client.
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * Create or update a gallery Application Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application
   * Definition resides.
   * @param galleryApplicationName The name of the gallery Application Definition in which the
   * Application Version is to be created.
   * @param galleryApplicationVersionName The name of the gallery Application Version to be created.
   * Needs to follow semantic version name pattern: The allowed characters are digit and period.
   * Digits must be within the range of a 32-bit integer. Format:
   * <MajorVersion>.<MinorVersion>.<Patch>
   * @param galleryApplicationVersion Parameters supplied to the create or update gallery Application
   * Version operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.GalleryApplicationVersionsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, galleryName: string, galleryApplicationName: string, galleryApplicationVersionName: string, galleryApplicationVersion: Models.GalleryApplicationVersion, options?: msRest.RequestOptionsBase): Promise<Models.GalleryApplicationVersionsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,galleryName,galleryApplicationName,galleryApplicationVersionName,galleryApplicationVersion,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.GalleryApplicationVersionsCreateOrUpdateResponse>;
  }

  /**
   * Update a gallery Application Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application
   * Definition resides.
   * @param galleryApplicationName The name of the gallery Application Definition in which the
   * Application Version is to be updated.
   * @param galleryApplicationVersionName The name of the gallery Application Version to be updated.
   * Needs to follow semantic version name pattern: The allowed characters are digit and period.
   * Digits must be within the range of a 32-bit integer. Format:
   * <MajorVersion>.<MinorVersion>.<Patch>
   * @param galleryApplicationVersion Parameters supplied to the update gallery Application Version
   * operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.GalleryApplicationVersionsUpdateResponse>
   */
  update(resourceGroupName: string, galleryName: string, galleryApplicationName: string, galleryApplicationVersionName: string, galleryApplicationVersion: Models.GalleryApplicationVersionUpdate, options?: msRest.RequestOptionsBase): Promise<Models.GalleryApplicationVersionsUpdateResponse> {
    return this.beginUpdate(resourceGroupName,galleryName,galleryApplicationName,galleryApplicationVersionName,galleryApplicationVersion,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.GalleryApplicationVersionsUpdateResponse>;
  }

  /**
   * Retrieves information about a gallery Application Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application
   * Definition resides.
   * @param galleryApplicationName The name of the gallery Application Definition in which the
   * Application Version resides.
   * @param galleryApplicationVersionName The name of the gallery Application Version to be
   * retrieved.
   * @param [options] The optional parameters
   * @returns Promise<Models.GalleryApplicationVersionsGetResponse>
   */
  get(resourceGroupName: string, galleryName: string, galleryApplicationName: string, galleryApplicationVersionName: string, options?: Models.GalleryApplicationVersionsGetOptionalParams): Promise<Models.GalleryApplicationVersionsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application
   * Definition resides.
   * @param galleryApplicationName The name of the gallery Application Definition in which the
   * Application Version resides.
   * @param galleryApplicationVersionName The name of the gallery Application Version to be
   * retrieved.
   * @param callback The callback
   */
  get(resourceGroupName: string, galleryName: string, galleryApplicationName: string, galleryApplicationVersionName: string, callback: msRest.ServiceCallback<Models.GalleryApplicationVersion>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application
   * Definition resides.
   * @param galleryApplicationName The name of the gallery Application Definition in which the
   * Application Version resides.
   * @param galleryApplicationVersionName The name of the gallery Application Version to be
   * retrieved.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, galleryName: string, galleryApplicationName: string, galleryApplicationVersionName: string, options: Models.GalleryApplicationVersionsGetOptionalParams, callback: msRest.ServiceCallback<Models.GalleryApplicationVersion>): void;
  get(resourceGroupName: string, galleryName: string, galleryApplicationName: string, galleryApplicationVersionName: string, options?: Models.GalleryApplicationVersionsGetOptionalParams | msRest.ServiceCallback<Models.GalleryApplicationVersion>, callback?: msRest.ServiceCallback<Models.GalleryApplicationVersion>): Promise<Models.GalleryApplicationVersionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        galleryName,
        galleryApplicationName,
        galleryApplicationVersionName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.GalleryApplicationVersionsGetResponse>;
  }

  /**
   * Delete a gallery Application Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application
   * Definition resides.
   * @param galleryApplicationName The name of the gallery Application Definition in which the
   * Application Version resides.
   * @param galleryApplicationVersionName The name of the gallery Application Version to be deleted.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, galleryName: string, galleryApplicationName: string, galleryApplicationVersionName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,galleryName,galleryApplicationName,galleryApplicationVersionName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * List gallery Application Versions in a gallery Application Definition.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application
   * Definition resides.
   * @param galleryApplicationName The name of the Shared Application Gallery Application Definition
   * from which the Application Versions are to be listed.
   * @param [options] The optional parameters
   * @returns Promise<Models.GalleryApplicationVersionsListByGalleryApplicationResponse>
   */
  listByGalleryApplication(resourceGroupName: string, galleryName: string, galleryApplicationName: string, options?: msRest.RequestOptionsBase): Promise<Models.GalleryApplicationVersionsListByGalleryApplicationResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application
   * Definition resides.
   * @param galleryApplicationName The name of the Shared Application Gallery Application Definition
   * from which the Application Versions are to be listed.
   * @param callback The callback
   */
  listByGalleryApplication(resourceGroupName: string, galleryName: string, galleryApplicationName: string, callback: msRest.ServiceCallback<Models.GalleryApplicationVersionList>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application
   * Definition resides.
   * @param galleryApplicationName The name of the Shared Application Gallery Application Definition
   * from which the Application Versions are to be listed.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByGalleryApplication(resourceGroupName: string, galleryName: string, galleryApplicationName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GalleryApplicationVersionList>): void;
  listByGalleryApplication(resourceGroupName: string, galleryName: string, galleryApplicationName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.GalleryApplicationVersionList>, callback?: msRest.ServiceCallback<Models.GalleryApplicationVersionList>): Promise<Models.GalleryApplicationVersionsListByGalleryApplicationResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        galleryName,
        galleryApplicationName,
        options
      },
      listByGalleryApplicationOperationSpec,
      callback) as Promise<Models.GalleryApplicationVersionsListByGalleryApplicationResponse>;
  }

  /**
   * Create or update a gallery Application Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application
   * Definition resides.
   * @param galleryApplicationName The name of the gallery Application Definition in which the
   * Application Version is to be created.
   * @param galleryApplicationVersionName The name of the gallery Application Version to be created.
   * Needs to follow semantic version name pattern: The allowed characters are digit and period.
   * Digits must be within the range of a 32-bit integer. Format:
   * <MajorVersion>.<MinorVersion>.<Patch>
   * @param galleryApplicationVersion Parameters supplied to the create or update gallery Application
   * Version operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, galleryName: string, galleryApplicationName: string, galleryApplicationVersionName: string, galleryApplicationVersion: Models.GalleryApplicationVersion, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        galleryName,
        galleryApplicationName,
        galleryApplicationVersionName,
        galleryApplicationVersion,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Update a gallery Application Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application
   * Definition resides.
   * @param galleryApplicationName The name of the gallery Application Definition in which the
   * Application Version is to be updated.
   * @param galleryApplicationVersionName The name of the gallery Application Version to be updated.
   * Needs to follow semantic version name pattern: The allowed characters are digit and period.
   * Digits must be within the range of a 32-bit integer. Format:
   * <MajorVersion>.<MinorVersion>.<Patch>
   * @param galleryApplicationVersion Parameters supplied to the update gallery Application Version
   * operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, galleryName: string, galleryApplicationName: string, galleryApplicationVersionName: string, galleryApplicationVersion: Models.GalleryApplicationVersionUpdate, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        galleryName,
        galleryApplicationName,
        galleryApplicationVersionName,
        galleryApplicationVersion,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Delete a gallery Application Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application
   * Definition resides.
   * @param galleryApplicationName The name of the gallery Application Definition in which the
   * Application Version resides.
   * @param galleryApplicationVersionName The name of the gallery Application Version to be deleted.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, galleryName: string, galleryApplicationName: string, galleryApplicationVersionName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        galleryName,
        galleryApplicationName,
        galleryApplicationVersionName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * List gallery Application Versions in a gallery Application Definition.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.GalleryApplicationVersionsListByGalleryApplicationNextResponse>
   */
  listByGalleryApplicationNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.GalleryApplicationVersionsListByGalleryApplicationNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByGalleryApplicationNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.GalleryApplicationVersionList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByGalleryApplicationNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GalleryApplicationVersionList>): void;
  listByGalleryApplicationNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.GalleryApplicationVersionList>, callback?: msRest.ServiceCallback<Models.GalleryApplicationVersionList>): Promise<Models.GalleryApplicationVersionsListByGalleryApplicationNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByGalleryApplicationNextOperationSpec,
      callback) as Promise<Models.GalleryApplicationVersionsListByGalleryApplicationNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName}/versions/{galleryApplicationVersionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.galleryName,
    Parameters.galleryApplicationName,
    Parameters.galleryApplicationVersionName
  ],
  queryParameters: [
    Parameters.expand0,
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.GalleryApplicationVersion
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByGalleryApplicationOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName}/versions",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.galleryName,
    Parameters.galleryApplicationName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.GalleryApplicationVersionList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName}/versions/{galleryApplicationVersionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.galleryName,
    Parameters.galleryApplicationName,
    Parameters.galleryApplicationVersionName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "galleryApplicationVersion",
    mapper: {
      ...Mappers.GalleryApplicationVersion,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.GalleryApplicationVersion
    },
    201: {
      bodyMapper: Mappers.GalleryApplicationVersion
    },
    202: {
      bodyMapper: Mappers.GalleryApplicationVersion
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName}/versions/{galleryApplicationVersionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.galleryName,
    Parameters.galleryApplicationName,
    Parameters.galleryApplicationVersionName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "galleryApplicationVersion",
    mapper: {
      ...Mappers.GalleryApplicationVersionUpdate,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.GalleryApplicationVersion
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName}/versions/{galleryApplicationVersionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.galleryName,
    Parameters.galleryApplicationName,
    Parameters.galleryApplicationVersionName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByGalleryApplicationNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.GalleryApplicationVersionList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
