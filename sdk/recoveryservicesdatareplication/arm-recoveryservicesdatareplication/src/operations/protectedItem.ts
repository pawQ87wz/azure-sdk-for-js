/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ProtectedItem } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureSiteRecoveryManagementServiceAPI } from "../azureSiteRecoveryManagementServiceAPI";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  ProtectedItemModel,
  ProtectedItemListNextOptionalParams,
  ProtectedItemListOptionalParams,
  ProtectedItemListResponse,
  ProtectedItemGetOptionalParams,
  ProtectedItemGetResponse,
  ProtectedItemCreateOptionalParams,
  ProtectedItemCreateResponse,
  ProtectedItemDeleteOptionalParams,
  ProtectedItemDeleteResponse,
  ProtectedItemPlannedFailoverOptionalParams,
  ProtectedItemPlannedFailoverResponse,
  ProtectedItemListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ProtectedItem operations. */
export class ProtectedItemImpl implements ProtectedItem {
  private readonly client: AzureSiteRecoveryManagementServiceAPI;

  /**
   * Initialize a new instance of the class ProtectedItem class.
   * @param client Reference to the service client
   */
  constructor(client: AzureSiteRecoveryManagementServiceAPI) {
    this.client = client;
  }

  /**
   * Gets the list of protected items in the given vault.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The vault name.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    vaultName: string,
    options?: ProtectedItemListOptionalParams
  ): PagedAsyncIterableIterator<ProtectedItemModel> {
    const iter = this.listPagingAll(resourceGroupName, vaultName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(
          resourceGroupName,
          vaultName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    vaultName: string,
    options?: ProtectedItemListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ProtectedItemModel[]> {
    let result: ProtectedItemListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, vaultName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        vaultName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    vaultName: string,
    options?: ProtectedItemListOptionalParams
  ): AsyncIterableIterator<ProtectedItemModel> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      vaultName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets the details of the protected item.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The vault name.
   * @param protectedItemName The protected item name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vaultName: string,
    protectedItemName: string,
    options?: ProtectedItemGetOptionalParams
  ): Promise<ProtectedItemGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vaultName, protectedItemName, options },
      getOperationSpec
    );
  }

  /**
   * Creates the protected item.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The vault name.
   * @param protectedItemName The protected item name.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    vaultName: string,
    protectedItemName: string,
    options?: ProtectedItemCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ProtectedItemCreateResponse>,
      ProtectedItemCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ProtectedItemCreateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, vaultName, protectedItemName, options },
      spec: createOperationSpec
    });
    const poller = await createHttpPoller<
      ProtectedItemCreateResponse,
      OperationState<ProtectedItemCreateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates the protected item.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The vault name.
   * @param protectedItemName The protected item name.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    vaultName: string,
    protectedItemName: string,
    options?: ProtectedItemCreateOptionalParams
  ): Promise<ProtectedItemCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      vaultName,
      protectedItemName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Removes the protected item.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The vault name.
   * @param protectedItemName The protected item name.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    vaultName: string,
    protectedItemName: string,
    options?: ProtectedItemDeleteOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ProtectedItemDeleteResponse>,
      ProtectedItemDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ProtectedItemDeleteResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, vaultName, protectedItemName, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<
      ProtectedItemDeleteResponse,
      OperationState<ProtectedItemDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Removes the protected item.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The vault name.
   * @param protectedItemName The protected item name.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    vaultName: string,
    protectedItemName: string,
    options?: ProtectedItemDeleteOptionalParams
  ): Promise<ProtectedItemDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      vaultName,
      protectedItemName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets the list of protected items in the given vault.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The vault name.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    vaultName: string,
    options?: ProtectedItemListOptionalParams
  ): Promise<ProtectedItemListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vaultName, options },
      listOperationSpec
    );
  }

  /**
   * Performs the planned failover on the protected item.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The vault name.
   * @param protectedItemName The protected item name.
   * @param options The options parameters.
   */
  async beginPlannedFailover(
    resourceGroupName: string,
    vaultName: string,
    protectedItemName: string,
    options?: ProtectedItemPlannedFailoverOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ProtectedItemPlannedFailoverResponse>,
      ProtectedItemPlannedFailoverResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ProtectedItemPlannedFailoverResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, vaultName, protectedItemName, options },
      spec: plannedFailoverOperationSpec
    });
    const poller = await createHttpPoller<
      ProtectedItemPlannedFailoverResponse,
      OperationState<ProtectedItemPlannedFailoverResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Performs the planned failover on the protected item.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The vault name.
   * @param protectedItemName The protected item name.
   * @param options The options parameters.
   */
  async beginPlannedFailoverAndWait(
    resourceGroupName: string,
    vaultName: string,
    protectedItemName: string,
    options?: ProtectedItemPlannedFailoverOptionalParams
  ): Promise<ProtectedItemPlannedFailoverResponse> {
    const poller = await this.beginPlannedFailover(
      resourceGroupName,
      vaultName,
      protectedItemName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The vault name.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    vaultName: string,
    nextLink: string,
    options?: ProtectedItemListNextOptionalParams
  ): Promise<ProtectedItemListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vaultName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults/{vaultName}/protectedItems/{protectedItemName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProtectedItemModel
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName,
    Parameters.protectedItemName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults/{vaultName}/protectedItems/{protectedItemName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ProtectedItemModel
    },
    201: {
      bodyMapper: Mappers.ProtectedItemModel
    },
    202: {
      bodyMapper: Mappers.ProtectedItemModel
    },
    204: {
      bodyMapper: Mappers.ProtectedItemModel
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body5,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName,
    Parameters.protectedItemName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults/{vaultName}/protectedItems/{protectedItemName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.ProtectedItemDeleteHeaders
    },
    201: {
      headersMapper: Mappers.ProtectedItemDeleteHeaders
    },
    202: {
      headersMapper: Mappers.ProtectedItemDeleteHeaders
    },
    204: {
      headersMapper: Mappers.ProtectedItemDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.forceDelete],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName,
    Parameters.protectedItemName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults/{vaultName}/protectedItems",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProtectedItemModelCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const plannedFailoverOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults/{vaultName}/protectedItems/{protectedItemName}/plannedFailover",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.PlannedFailoverModel
    },
    201: {
      bodyMapper: Mappers.PlannedFailoverModel
    },
    202: {
      bodyMapper: Mappers.PlannedFailoverModel
    },
    204: {
      bodyMapper: Mappers.PlannedFailoverModel
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body6,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName,
    Parameters.protectedItemName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProtectedItemModelCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.vaultName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
