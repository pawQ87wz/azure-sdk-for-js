/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { MicrosoftResourceHealth } = require("@azure/arm-resourcehealth");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Lists impacted resources in the subscription by an event.
 *
 * @summary Lists impacted resources in the subscription by an event.
 * x-ms-original-file: specification/resourcehealth/resource-manager/Microsoft.ResourceHealth/preview/2023-10-01-preview/examples/ImpactedResources_ListBySubscriptionId_ListByEventId.json
 */
async function listImpactedResourcesBySubscriptionId() {
  const subscriptionId = process.env["RESOURCEHEALTH_SUBSCRIPTION_ID"] || "subscriptionId";
  const eventTrackingId = "BC_1-FXZ";
  const filter = "targetRegion eq 'westus'";
  const options = {
    filter,
  };
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftResourceHealth(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.impactedResources.listBySubscriptionIdAndEventId(
    eventTrackingId,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listImpactedResourcesBySubscriptionId();
}

main().catch(console.error);
