/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { CdnManagementClient } from "@azure/arm-cdn";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Checks the quota and actual usage of endpoints under the given Azure Front Door profile..
 *
 * @summary Checks the quota and actual usage of endpoints under the given Azure Front Door profile..
 * x-ms-original-file: specification/cdn/resource-manager/Microsoft.Cdn/stable/2023-05-01/examples/AFDOriginGroups_ListResourceUsage.json
 */
async function afdOriginGroupsListResourceUsage() {
  const subscriptionId = process.env["CDN_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["CDN_RESOURCE_GROUP"] || "RG";
  const profileName = "profile1";
  const originGroupName = "origingroup1";
  const credential = new DefaultAzureCredential();
  const client = new CdnManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.afdOriginGroups.listResourceUsage(
    resourceGroupName,
    profileName,
    originGroupName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  afdOriginGroupsListResourceUsage();
}

main().catch(console.error);
