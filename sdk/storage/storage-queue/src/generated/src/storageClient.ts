/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttpCompat from "@azure/core-http-compat";
import {
  ServiceImpl,
  QueueImpl,
  MessagesImpl,
  MessageIdImpl
} from "./operations";
import { Service, Queue, Messages, MessageId } from "./operationsInterfaces";
import { StorageClientOptionalParams } from "./models";

export class StorageClient extends coreHttpCompat.ExtendedServiceClient {
  url: string;
  version: string;

  /**
   * Initializes a new instance of the StorageClient class.
   * @param url The URL of the service account, queue or message that is the target of the desired
   *            operation.
   * @param options The parameter options
   */
  constructor(url: string, options?: StorageClientOptionalParams) {
    if (url === undefined) {
      throw new Error("'url' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: StorageClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-azure-storage-queue/12.22.0-beta.2`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      endpoint: options.endpoint ?? options.baseUri ?? "{url}"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.url = url;

    // Assigning values to Constant parameters
    this.version = options.version || "2023-01-03";
    this.service = new ServiceImpl(this);
    this.queue = new QueueImpl(this);
    this.messages = new MessagesImpl(this);
    this.messageId = new MessageIdImpl(this);
  }

  service: Service;
  queue: Queue;
  messages: Messages;
  messageId: MessageId;
}
