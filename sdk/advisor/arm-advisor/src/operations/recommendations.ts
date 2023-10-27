/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Recommendations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AdvisorManagementClient } from "../advisorManagementClient";
import {
  ResourceRecommendationBase,
  RecommendationsListNextOptionalParams,
  RecommendationsListOptionalParams,
  RecommendationsListResponse,
  RecommendationsGenerateOptionalParams,
  RecommendationsGenerateResponse,
  RecommendationsGetGenerateStatusOptionalParams,
  RecommendationsGetOptionalParams,
  RecommendationsGetResponse,
  RecommendationsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Recommendations operations. */
export class RecommendationsImpl implements Recommendations {
  private readonly client: AdvisorManagementClient;

  /**
   * Initialize a new instance of the class Recommendations class.
   * @param client Reference to the service client
   */
  constructor(client: AdvisorManagementClient) {
    this.client = client;
  }

  /**
   * Obtains cached recommendations for a subscription. The recommendations are generated or computed by
   * invoking generateRecommendations.
   * @param options The options parameters.
   */
  public list(
    options?: RecommendationsListOptionalParams
  ): PagedAsyncIterableIterator<ResourceRecommendationBase> {
    const iter = this.listPagingAll(options);
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
        return this.listPagingPage(options, settings);
      }
    };
  }

  private async *listPagingPage(
    options?: RecommendationsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ResourceRecommendationBase[]> {
    let result: RecommendationsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: RecommendationsListOptionalParams
  ): AsyncIterableIterator<ResourceRecommendationBase> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Initiates the recommendation generation or computation process for a subscription. This operation is
   * asynchronous. The generated recommendations are stored in a cache in the Advisor service.
   * @param options The options parameters.
   */
  generate(
    options?: RecommendationsGenerateOptionalParams
  ): Promise<RecommendationsGenerateResponse> {
    return this.client.sendOperationRequest({ options }, generateOperationSpec);
  }

  /**
   * Retrieves the status of the recommendation computation or generation process. Invoke this API after
   * calling the generation recommendation. The URI of this API is returned in the Location field of the
   * response header.
   * @param operationId The operation ID, which can be found from the Location field in the generate
   *                    recommendation response header.
   * @param options The options parameters.
   */
  getGenerateStatus(
    operationId: string,
    options?: RecommendationsGetGenerateStatusOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { operationId, options },
      getGenerateStatusOperationSpec
    );
  }

  /**
   * Obtains cached recommendations for a subscription. The recommendations are generated or computed by
   * invoking generateRecommendations.
   * @param options The options parameters.
   */
  private _list(
    options?: RecommendationsListOptionalParams
  ): Promise<RecommendationsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Obtains details of a cached recommendation.
   * @param resourceUri The fully qualified Azure Resource Manager identifier of the resource to which
   *                    the recommendation applies.
   * @param recommendationId The recommendation ID.
   * @param options The options parameters.
   */
  get(
    resourceUri: string,
    recommendationId: string,
    options?: RecommendationsGetOptionalParams
  ): Promise<RecommendationsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, recommendationId, options },
      getOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: RecommendationsListNextOptionalParams
  ): Promise<RecommendationsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const generateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Advisor/generateRecommendations",
  httpMethod: "POST",
  responses: {
    202: {
      headersMapper: Mappers.RecommendationsGenerateHeaders
    },
    default: {
      bodyMapper: Mappers.ArmErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const getGenerateStatusOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Advisor/generateRecommendations/{operationId}",
  httpMethod: "GET",
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ArmErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.operationId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Advisor/recommendations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceRecommendationBaseListResult
    },
    default: {
      bodyMapper: Mappers.ArmErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top,
    Parameters.skipToken
  ],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/{resourceUri}/providers/Microsoft.Advisor/recommendations/{recommendationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceRecommendationBase
    },
    default: {
      bodyMapper: Mappers.ArmErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceUri,
    Parameters.recommendationId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceRecommendationBaseListResult
    },
    default: {
      bodyMapper: Mappers.ArmErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
