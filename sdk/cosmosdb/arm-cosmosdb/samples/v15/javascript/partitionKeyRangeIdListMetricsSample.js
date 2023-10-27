/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Retrieves the metrics determined by the given filter for the given partition key range id.
 *
 * @summary Retrieves the metrics determined by the given filter for the given partition key range id.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2023-04-15/examples/CosmosDBPKeyRangeIdGetMetrics.json
 */
async function cosmosDbDatabaseAccountRegionGetMetrics() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const databaseRid = "databaseRid";
  const collectionRid = "collectionRid";
  const partitionKeyRangeId = "0";
  const filter =
    "$filter=(name.value eq 'Max RUs Per Second') and timeGrain eq duration'PT1M' and startTime eq '2017-11-19T23:53:55.2780000Z' and endTime eq '2017-11-20T23:58:55.2780000Z";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.partitionKeyRangeId.listMetrics(
    resourceGroupName,
    accountName,
    databaseRid,
    collectionRid,
    partitionKeyRangeId,
    filter
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  cosmosDbDatabaseAccountRegionGetMetrics();
}

main().catch(console.error);
