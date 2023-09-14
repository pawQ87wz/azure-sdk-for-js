/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { IotHubClient } from "@azure/arm-iothub";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get a list of the consumer groups in the Event Hub-compatible device-to-cloud endpoint in an IoT hub.
 *
 * @summary Get a list of the consumer groups in the Event Hub-compatible device-to-cloud endpoint in an IoT hub.
 * x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/preview/2023-06-30-preview/examples/iothub_listehgroups.json
 */
async function iotHubResourceListEventHubConsumerGroups() {
  const subscriptionId =
    process.env["IOTHUB_SUBSCRIPTION_ID"] ||
    "91d12660-3dec-467a-be2a-213b5544ddc0";
  const resourceGroupName =
    process.env["IOTHUB_RESOURCE_GROUP"] || "myResourceGroup";
  const resourceName = "testHub";
  const eventHubEndpointName = "events";
  const credential = new DefaultAzureCredential();
  const client = new IotHubClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.iotHubResource.listEventHubConsumerGroups(
    resourceGroupName,
    resourceName,
    eventHubEndpointName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  iotHubResourceListEventHubConsumerGroups();
}

main().catch(console.error);
