/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { KustoManagementClient } = require("@azure/arm-kusto");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Add a list of language extensions that can run within KQL queries.
 *
 * @summary Add a list of language extensions that can run within KQL queries.
 * x-ms-original-file: specification/azure-kusto/resource-manager/Microsoft.Kusto/stable/2023-08-15/examples/KustoClusterAddLanguageExtensions.json
 */
async function kustoClusterAddLanguageExtensions() {
  const subscriptionId =
    process.env["KUSTO_SUBSCRIPTION_ID"] || "12345678-1234-1234-1234-123456789098";
  const resourceGroupName = process.env["KUSTO_RESOURCE_GROUP"] || "kustorptest";
  const clusterName = "kustoCluster";
  const languageExtensionsToAdd = {
    value: [{ languageExtensionName: "PYTHON" }, { languageExtensionName: "R" }],
  };
  const credential = new DefaultAzureCredential();
  const client = new KustoManagementClient(credential, subscriptionId);
  const result = await client.clusters.beginAddLanguageExtensionsAndWait(
    resourceGroupName,
    clusterName,
    languageExtensionsToAdd
  );
  console.log(result);
}

async function main() {
  kustoClusterAddLanguageExtensions();
}

main().catch(console.error);
