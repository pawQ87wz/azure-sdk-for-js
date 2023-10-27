/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { HybridConnectivityManagementAPI } = require("@azure/arm-hybridconnectivity");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to API to enumerate registered services in service configurations under a Endpoint Resource
 *
 * @summary API to enumerate registered services in service configurations under a Endpoint Resource
 * x-ms-original-file: specification/hybridconnectivity/resource-manager/Microsoft.HybridConnectivity/stable/2023-03-15/examples/ServiceConfigurationsList.json
 */
async function getClustersExample() {
  const resourceUri =
    "subscriptions/f5bcc1d9-23af-4ae9-aca1-041d0f593a63/resourceGroups/hybridRG/providers/Microsoft.HybridCompute/machines/testMachine/providers/Microsoft.HybridConnectivity/endpoints/default";
  const endpointName = "default";
  const credential = new DefaultAzureCredential();
  const client = new HybridConnectivityManagementAPI(credential);
  const resArray = new Array();
  for await (let item of client.serviceConfigurations.listByEndpointResource(
    resourceUri,
    endpointName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  getClustersExample();
}

main().catch(console.error);
