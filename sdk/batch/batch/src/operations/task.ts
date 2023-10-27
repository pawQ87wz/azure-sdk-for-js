/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/taskMappers";
import * as Parameters from "../models/parameters";
import { BatchServiceClientContext } from "../batchServiceClientContext";

/** Class representing a Task. */
export class Task {
  private readonly client: BatchServiceClientContext;

  /**
   * Create a Task.
   * @param {BatchServiceClientContext} client Reference to the service client.
   */
  constructor(client: BatchServiceClientContext) {
    this.client = client;
  }

  /**
   * The maximum lifetime of a Task from addition to completion is 180 days. If a Task has not
   * completed within 180 days of being added it will be terminated by the Batch service and left in
   * whatever state it was in at that time.
   * @summary Adds a Task to the specified Job.
   * @param jobId The ID of the Job to which the Task is to be added.
   * @param task The Task to be added.
   * @param [options] The optional parameters
   * @returns Promise<Models.TaskAddResponse>
   */
  add(jobId: string, task: Models.TaskAddParameter, options?: Models.TaskAddOptionalParams): Promise<Models.TaskAddResponse>;
  /**
   * @param jobId The ID of the Job to which the Task is to be added.
   * @param task The Task to be added.
   * @param callback The callback
   */
  add(jobId: string, task: Models.TaskAddParameter, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param jobId The ID of the Job to which the Task is to be added.
   * @param task The Task to be added.
   * @param options The optional parameters
   * @param callback The callback
   */
  add(jobId: string, task: Models.TaskAddParameter, options: Models.TaskAddOptionalParams, callback: msRest.ServiceCallback<void>): void;
  add(jobId: string, task: Models.TaskAddParameter, options?: Models.TaskAddOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.TaskAddResponse> {
    return this.client.sendOperationRequest(
      {
        jobId,
        task,
        options
      },
      addOperationSpec,
      callback) as Promise<Models.TaskAddResponse>;
  }

  /**
   * For multi-instance Tasks, information such as affinityId, executionInfo and nodeInfo refer to
   * the primary Task. Use the list subtasks API to retrieve information about subtasks.
   * @summary Lists all of the Tasks that are associated with the specified Job.
   * @param jobId The ID of the Job.
   * @param [options] The optional parameters
   * @returns Promise<Models.TaskListResponse>
   */
  list(jobId: string, options?: Models.TaskListOptionalParams): Promise<Models.TaskListResponse>;
  /**
   * @param jobId The ID of the Job.
   * @param callback The callback
   */
  list(jobId: string, callback: msRest.ServiceCallback<Models.CloudTaskListResult>): void;
  /**
   * @param jobId The ID of the Job.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(jobId: string, options: Models.TaskListOptionalParams, callback: msRest.ServiceCallback<Models.CloudTaskListResult>): void;
  list(jobId: string, options?: Models.TaskListOptionalParams | msRest.ServiceCallback<Models.CloudTaskListResult>, callback?: msRest.ServiceCallback<Models.CloudTaskListResult>): Promise<Models.TaskListResponse> {
    return this.client.sendOperationRequest(
      {
        jobId,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.TaskListResponse>;
  }

  /**
   * Note that each Task must have a unique ID. The Batch service may not return the results for each
   * Task in the same order the Tasks were submitted in this request. If the server times out or the
   * connection is closed during the request, the request may have been partially or fully processed,
   * or not at all. In such cases, the user should re-issue the request. Note that it is up to the
   * user to correctly handle failures when re-issuing a request. For example, you should use the
   * same Task IDs during a retry so that if the prior operation succeeded, the retry will not create
   * extra Tasks unexpectedly. If the response contains any Tasks which failed to add, a client can
   * retry the request. In a retry, it is most efficient to resubmit only Tasks that failed to add,
   * and to omit Tasks that were successfully added on the first attempt. The maximum lifetime of a
   * Task from addition to completion is 180 days. If a Task has not completed within 180 days of
   * being added it will be terminated by the Batch service and left in whatever state it was in at
   * that time.
   * @summary Adds a collection of Tasks to the specified Job.
   * @param jobId The ID of the Job to which the Task collection is to be added.
   * @param value The collection of Tasks to add. The maximum count of Tasks is 100. The total
   * serialized size of this collection must be less than 1MB. If it is greater than 1MB (for example
   * if each Task has 100's of resource files or environment variables), the request will fail with
   * code 'RequestBodyTooLarge' and should be retried again with fewer Tasks.
   * @param [options] The optional parameters
   * @returns Promise<Models.TaskAddCollectionResponse>
   */
  addCollection(jobId: string, value: Models.TaskAddParameter[], options?: Models.TaskAddCollectionOptionalParams): Promise<Models.TaskAddCollectionResponse>;
  /**
   * @param jobId The ID of the Job to which the Task collection is to be added.
   * @param value The collection of Tasks to add. The maximum count of Tasks is 100. The total
   * serialized size of this collection must be less than 1MB. If it is greater than 1MB (for example
   * if each Task has 100's of resource files or environment variables), the request will fail with
   * code 'RequestBodyTooLarge' and should be retried again with fewer Tasks.
   * @param callback The callback
   */
  addCollection(jobId: string, value: Models.TaskAddParameter[], callback: msRest.ServiceCallback<Models.TaskAddCollectionResult>): void;
  /**
   * @param jobId The ID of the Job to which the Task collection is to be added.
   * @param value The collection of Tasks to add. The maximum count of Tasks is 100. The total
   * serialized size of this collection must be less than 1MB. If it is greater than 1MB (for example
   * if each Task has 100's of resource files or environment variables), the request will fail with
   * code 'RequestBodyTooLarge' and should be retried again with fewer Tasks.
   * @param options The optional parameters
   * @param callback The callback
   */
  addCollection(jobId: string, value: Models.TaskAddParameter[], options: Models.TaskAddCollectionOptionalParams, callback: msRest.ServiceCallback<Models.TaskAddCollectionResult>): void;
  addCollection(jobId: string, value: Models.TaskAddParameter[], options?: Models.TaskAddCollectionOptionalParams | msRest.ServiceCallback<Models.TaskAddCollectionResult>, callback?: msRest.ServiceCallback<Models.TaskAddCollectionResult>): Promise<Models.TaskAddCollectionResponse> {
    return this.client.sendOperationRequest(
      {
        jobId,
        value,
        options
      },
      addCollectionOperationSpec,
      callback) as Promise<Models.TaskAddCollectionResponse>;
  }

  /**
   * When a Task is deleted, all of the files in its directory on the Compute Node where it ran are
   * also deleted (regardless of the retention time). For multi-instance Tasks, the delete Task
   * operation applies synchronously to the primary task; subtasks and their files are then deleted
   * asynchronously in the background.
   * @summary Deletes a Task from the specified Job.
   * @param jobId The ID of the Job from which to delete the Task.
   * @param taskId The ID of the Task to delete.
   * @param [options] The optional parameters
   * @returns Promise<Models.TaskDeleteResponse>
   */
  deleteMethod(jobId: string, taskId: string, options?: Models.TaskDeleteMethodOptionalParams): Promise<Models.TaskDeleteResponse>;
  /**
   * @param jobId The ID of the Job from which to delete the Task.
   * @param taskId The ID of the Task to delete.
   * @param callback The callback
   */
  deleteMethod(jobId: string, taskId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param jobId The ID of the Job from which to delete the Task.
   * @param taskId The ID of the Task to delete.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(jobId: string, taskId: string, options: Models.TaskDeleteMethodOptionalParams, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(jobId: string, taskId: string, options?: Models.TaskDeleteMethodOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.TaskDeleteResponse> {
    return this.client.sendOperationRequest(
      {
        jobId,
        taskId,
        options
      },
      deleteMethodOperationSpec,
      callback) as Promise<Models.TaskDeleteResponse>;
  }

  /**
   * For multi-instance Tasks, information such as affinityId, executionInfo and nodeInfo refer to
   * the primary Task. Use the list subtasks API to retrieve information about subtasks.
   * @summary Gets information about the specified Task.
   * @param jobId The ID of the Job that contains the Task.
   * @param taskId The ID of the Task to get information about.
   * @param [options] The optional parameters
   * @returns Promise<Models.TaskGetResponse>
   */
  get(jobId: string, taskId: string, options?: Models.TaskGetOptionalParams): Promise<Models.TaskGetResponse>;
  /**
   * @param jobId The ID of the Job that contains the Task.
   * @param taskId The ID of the Task to get information about.
   * @param callback The callback
   */
  get(jobId: string, taskId: string, callback: msRest.ServiceCallback<Models.CloudTask>): void;
  /**
   * @param jobId The ID of the Job that contains the Task.
   * @param taskId The ID of the Task to get information about.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(jobId: string, taskId: string, options: Models.TaskGetOptionalParams, callback: msRest.ServiceCallback<Models.CloudTask>): void;
  get(jobId: string, taskId: string, options?: Models.TaskGetOptionalParams | msRest.ServiceCallback<Models.CloudTask>, callback?: msRest.ServiceCallback<Models.CloudTask>): Promise<Models.TaskGetResponse> {
    return this.client.sendOperationRequest(
      {
        jobId,
        taskId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.TaskGetResponse>;
  }

  /**
   * Updates the properties of the specified Task.
   * @param jobId The ID of the Job containing the Task.
   * @param taskId The ID of the Task to update.
   * @param [options] The optional parameters
   * @returns Promise<Models.TaskUpdateResponse>
   */
  update(jobId: string, taskId: string, options?: Models.TaskUpdateOptionalParams): Promise<Models.TaskUpdateResponse>;
  /**
   * @param jobId The ID of the Job containing the Task.
   * @param taskId The ID of the Task to update.
   * @param callback The callback
   */
  update(jobId: string, taskId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param jobId The ID of the Job containing the Task.
   * @param taskId The ID of the Task to update.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(jobId: string, taskId: string, options: Models.TaskUpdateOptionalParams, callback: msRest.ServiceCallback<void>): void;
  update(jobId: string, taskId: string, options?: Models.TaskUpdateOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.TaskUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        jobId,
        taskId,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.TaskUpdateResponse>;
  }

  /**
   * If the Task is not a multi-instance Task then this returns an empty collection.
   * @summary Lists all of the subtasks that are associated with the specified multi-instance Task.
   * @param jobId The ID of the Job.
   * @param taskId The ID of the Task.
   * @param [options] The optional parameters
   * @returns Promise<Models.TaskListSubtasksResponse>
   */
  listSubtasks(jobId: string, taskId: string, options?: Models.TaskListSubtasksOptionalParams): Promise<Models.TaskListSubtasksResponse>;
  /**
   * @param jobId The ID of the Job.
   * @param taskId The ID of the Task.
   * @param callback The callback
   */
  listSubtasks(jobId: string, taskId: string, callback: msRest.ServiceCallback<Models.CloudTaskListSubtasksResult>): void;
  /**
   * @param jobId The ID of the Job.
   * @param taskId The ID of the Task.
   * @param options The optional parameters
   * @param callback The callback
   */
  listSubtasks(jobId: string, taskId: string, options: Models.TaskListSubtasksOptionalParams, callback: msRest.ServiceCallback<Models.CloudTaskListSubtasksResult>): void;
  listSubtasks(jobId: string, taskId: string, options?: Models.TaskListSubtasksOptionalParams | msRest.ServiceCallback<Models.CloudTaskListSubtasksResult>, callback?: msRest.ServiceCallback<Models.CloudTaskListSubtasksResult>): Promise<Models.TaskListSubtasksResponse> {
    return this.client.sendOperationRequest(
      {
        jobId,
        taskId,
        options
      },
      listSubtasksOperationSpec,
      callback) as Promise<Models.TaskListSubtasksResponse>;
  }

  /**
   * When the Task has been terminated, it moves to the completed state. For multi-instance Tasks,
   * the terminate Task operation applies synchronously to the primary task; subtasks are then
   * terminated asynchronously in the background.
   * @summary Terminates the specified Task.
   * @param jobId The ID of the Job containing the Task.
   * @param taskId The ID of the Task to terminate.
   * @param [options] The optional parameters
   * @returns Promise<Models.TaskTerminateResponse>
   */
  terminate(jobId: string, taskId: string, options?: Models.TaskTerminateOptionalParams): Promise<Models.TaskTerminateResponse>;
  /**
   * @param jobId The ID of the Job containing the Task.
   * @param taskId The ID of the Task to terminate.
   * @param callback The callback
   */
  terminate(jobId: string, taskId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param jobId The ID of the Job containing the Task.
   * @param taskId The ID of the Task to terminate.
   * @param options The optional parameters
   * @param callback The callback
   */
  terminate(jobId: string, taskId: string, options: Models.TaskTerminateOptionalParams, callback: msRest.ServiceCallback<void>): void;
  terminate(jobId: string, taskId: string, options?: Models.TaskTerminateOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.TaskTerminateResponse> {
    return this.client.sendOperationRequest(
      {
        jobId,
        taskId,
        options
      },
      terminateOperationSpec,
      callback) as Promise<Models.TaskTerminateResponse>;
  }

  /**
   * Reactivation makes a Task eligible to be retried again up to its maximum retry count. The Task's
   * state is changed to active. As the Task is no longer in the completed state, any previous exit
   * code or failure information is no longer available after reactivation. Each time a Task is
   * reactivated, its retry count is reset to 0. Reactivation will fail for Tasks that are not
   * completed or that previously completed successfully (with an exit code of 0). Additionally, it
   * will fail if the Job has completed (or is terminating or deleting).
   * @summary Reactivates a Task, allowing it to run again even if its retry count has been
   * exhausted.
   * @param jobId The ID of the Job containing the Task.
   * @param taskId The ID of the Task to reactivate.
   * @param [options] The optional parameters
   * @returns Promise<Models.TaskReactivateResponse>
   */
  reactivate(jobId: string, taskId: string, options?: Models.TaskReactivateOptionalParams): Promise<Models.TaskReactivateResponse>;
  /**
   * @param jobId The ID of the Job containing the Task.
   * @param taskId The ID of the Task to reactivate.
   * @param callback The callback
   */
  reactivate(jobId: string, taskId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param jobId The ID of the Job containing the Task.
   * @param taskId The ID of the Task to reactivate.
   * @param options The optional parameters
   * @param callback The callback
   */
  reactivate(jobId: string, taskId: string, options: Models.TaskReactivateOptionalParams, callback: msRest.ServiceCallback<void>): void;
  reactivate(jobId: string, taskId: string, options?: Models.TaskReactivateOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.TaskReactivateResponse> {
    return this.client.sendOperationRequest(
      {
        jobId,
        taskId,
        options
      },
      reactivateOperationSpec,
      callback) as Promise<Models.TaskReactivateResponse>;
  }

  /**
   * For multi-instance Tasks, information such as affinityId, executionInfo and nodeInfo refer to
   * the primary Task. Use the list subtasks API to retrieve information about subtasks.
   * @summary Lists all of the Tasks that are associated with the specified Job.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.TaskListResponse>
   */
  listNext(nextPageLink: string, options?: Models.TaskListNextOptionalParams): Promise<Models.TaskListResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.CloudTaskListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: Models.TaskListNextOptionalParams, callback: msRest.ServiceCallback<Models.CloudTaskListResult>): void;
  listNext(nextPageLink: string, options?: Models.TaskListNextOptionalParams | msRest.ServiceCallback<Models.CloudTaskListResult>, callback?: msRest.ServiceCallback<Models.CloudTaskListResult>): Promise<Models.TaskListResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.TaskListResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const addOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "jobs/{jobId}/tasks",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.jobId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.timeout53
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId65,
    Parameters.returnClientRequestId65,
    Parameters.ocpDate65
  ],
  requestBody: {
    parameterPath: "task",
    mapper: {
      ...Mappers.TaskAddParameter,
      required: true
    }
  },
  contentType: "application/json; odata=minimalmetadata; charset=utf-8",
  responses: {
    201: {
      headersMapper: Mappers.TaskAddHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError,
      headersMapper: Mappers.TaskAddHeaders
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "jobs/{jobId}/tasks",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.jobId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter11,
    Parameters.select10,
    Parameters.expand7,
    Parameters.maxResults12,
    Parameters.timeout54
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId66,
    Parameters.returnClientRequestId66,
    Parameters.ocpDate66
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CloudTaskListResult,
      headersMapper: Mappers.TaskListHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError,
      headersMapper: Mappers.TaskListHeaders
    }
  },
  serializer
};

const addCollectionOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "jobs/{jobId}/addtaskcollection",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.jobId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.timeout55
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId67,
    Parameters.returnClientRequestId67,
    Parameters.ocpDate67
  ],
  requestBody: {
    parameterPath: {
      value: "value"
    },
    mapper: {
      ...Mappers.TaskAddCollectionParameter,
      required: true
    }
  },
  contentType: "application/json; odata=minimalmetadata; charset=utf-8",
  responses: {
    200: {
      bodyMapper: Mappers.TaskAddCollectionResult,
      headersMapper: Mappers.TaskAddCollectionHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError,
      headersMapper: Mappers.TaskAddCollectionHeaders
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "jobs/{jobId}/tasks/{taskId}",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.jobId,
    Parameters.taskId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.timeout56
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId68,
    Parameters.returnClientRequestId68,
    Parameters.ocpDate68,
    Parameters.ifMatch23,
    Parameters.ifNoneMatch23,
    Parameters.ifModifiedSince27,
    Parameters.ifUnmodifiedSince27
  ],
  responses: {
    200: {
      headersMapper: Mappers.TaskDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError,
      headersMapper: Mappers.TaskDeleteHeaders
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "jobs/{jobId}/tasks/{taskId}",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.jobId,
    Parameters.taskId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.select11,
    Parameters.expand8,
    Parameters.timeout57
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId69,
    Parameters.returnClientRequestId69,
    Parameters.ocpDate69,
    Parameters.ifMatch24,
    Parameters.ifNoneMatch24,
    Parameters.ifModifiedSince28,
    Parameters.ifUnmodifiedSince28
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CloudTask,
      headersMapper: Mappers.TaskGetHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError,
      headersMapper: Mappers.TaskGetHeaders
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "jobs/{jobId}/tasks/{taskId}",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.jobId,
    Parameters.taskId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.timeout58
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId70,
    Parameters.returnClientRequestId70,
    Parameters.ocpDate70,
    Parameters.ifMatch25,
    Parameters.ifNoneMatch25,
    Parameters.ifModifiedSince29,
    Parameters.ifUnmodifiedSince29
  ],
  requestBody: {
    parameterPath: {
      constraints: [
        "options",
        "constraints"
      ]
    },
    mapper: {
      ...Mappers.TaskUpdateParameter,
      required: true
    }
  },
  contentType: "application/json; odata=minimalmetadata; charset=utf-8",
  responses: {
    200: {
      headersMapper: Mappers.TaskUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError,
      headersMapper: Mappers.TaskUpdateHeaders
    }
  },
  serializer
};

const listSubtasksOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "jobs/{jobId}/tasks/{taskId}/subtasksinfo",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.jobId,
    Parameters.taskId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.select12,
    Parameters.timeout59
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId71,
    Parameters.returnClientRequestId71,
    Parameters.ocpDate71
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CloudTaskListSubtasksResult,
      headersMapper: Mappers.TaskListSubtasksHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError,
      headersMapper: Mappers.TaskListSubtasksHeaders
    }
  },
  serializer
};

const terminateOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "jobs/{jobId}/tasks/{taskId}/terminate",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.jobId,
    Parameters.taskId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.timeout60
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId72,
    Parameters.returnClientRequestId72,
    Parameters.ocpDate72,
    Parameters.ifMatch26,
    Parameters.ifNoneMatch26,
    Parameters.ifModifiedSince30,
    Parameters.ifUnmodifiedSince30
  ],
  responses: {
    204: {
      headersMapper: Mappers.TaskTerminateHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError,
      headersMapper: Mappers.TaskTerminateHeaders
    }
  },
  serializer
};

const reactivateOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "jobs/{jobId}/tasks/{taskId}/reactivate",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.jobId,
    Parameters.taskId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.timeout61
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId73,
    Parameters.returnClientRequestId73,
    Parameters.ocpDate73,
    Parameters.ifMatch27,
    Parameters.ifNoneMatch27,
    Parameters.ifModifiedSince31,
    Parameters.ifUnmodifiedSince31
  ],
  responses: {
    204: {
      headersMapper: Mappers.TaskReactivateHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError,
      headersMapper: Mappers.TaskReactivateHeaders
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "{batchUrl}",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId74,
    Parameters.returnClientRequestId74,
    Parameters.ocpDate74
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CloudTaskListResult,
      headersMapper: Mappers.TaskListHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError,
      headersMapper: Mappers.TaskListHeaders
    }
  },
  serializer
};
