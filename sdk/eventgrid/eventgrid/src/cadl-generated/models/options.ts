// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";
import { ReleaseDelay } from "./models";

export interface PublishCloudEventOptions extends OperationOptions {
  /** Event data specific to the event type. */
  data?: any;
  /** Event data specific to the event type, encoded as a base64 string. */
  dataBase64?: Uint8Array;
  /** The time (in UTC) the event was generated, in RFC3339 format. */
  time?: Date;
  /** Identifies the schema that data adheres to. */
  dataschema?: string;
  /** Content type of data value. */
  datacontenttype?: string;
  /** This describes the subject of the event in the context of the event producer (identified by source). */
  subject?: string;
  /** content type */
  contentType?: string;
}

export interface PublishCloudEventsOptions extends OperationOptions {
  /** content type */
  contentType?: string;
}

export interface ReceiveCloudEventsOptions extends OperationOptions {
  /** Max Events count to be received. Minimum value is 1, while maximum value is 100 events. If not specified, the default value is 1. */
  maxEvents?: number;
  /** Max wait time value for receive operation in Seconds. It is the time in seconds that the server approximately waits for the availability of an event and responds to the request. If an event is available, the broker responds immediately to the client. Minimum value is 10 seconds, while maximum value is 120 seconds. If not specified, the default value is 60 seconds. */
  maxWaitTime?: number;
}

export interface AcknowledgeCloudEventsOptions extends OperationOptions {}

export interface ReleaseCloudEventsOptions extends OperationOptions {
  /** Release cloud events with the specified delay in seconds. */
  releaseDelayInSeconds?: ReleaseDelay;
}

export interface RejectCloudEventsOptions extends OperationOptions {}

export interface RenewCloudEventLocksOptions extends OperationOptions {}
