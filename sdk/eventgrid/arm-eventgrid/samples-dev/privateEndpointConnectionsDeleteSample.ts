/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { EventGridManagementClient } from "@azure/arm-eventgrid";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Delete a specific private endpoint connection under a topic, domain, or partner namespace or namespace.
 *
 * @summary Delete a specific private endpoint connection under a topic, domain, or partner namespace or namespace.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/preview/2023-06-01-preview/examples/PrivateEndpointConnections_Delete.json
 */
async function privateEndpointConnectionsDelete() {
  const subscriptionId =
    process.env["EVENTGRID_SUBSCRIPTION_ID"] ||
    "8f6b6269-84f2-4d09-9e31-1127efcd1e40";
  const resourceGroupName =
    process.env["EVENTGRID_RESOURCE_GROUP"] || "examplerg";
  const parentType = "topics";
  const parentName = "exampletopic1";
  const privateEndpointConnectionName =
    "BMTPE5.8A30D251-4C61-489D-A1AA-B37C4A329B8B";
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.privateEndpointConnections.beginDeleteAndWait(
    resourceGroupName,
    parentType,
    parentName,
    privateEndpointConnectionName
  );
  console.log(result);
}

async function main() {
  privateEndpointConnectionsDelete();
}

main().catch(console.error);
