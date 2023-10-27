/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AuthorizationManagementClient } = require("@azure/arm-authorization");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Delete access review schedule definition
 *
 * @summary Delete access review schedule definition
 * x-ms-original-file: specification/authorization/resource-manager/Microsoft.Authorization/preview/2021-12-01-preview/examples/DeleteAccessReviewScheduleDefinition.json
 */
async function deleteAccessReview() {
  const scope = "subscriptions/fa73e90b-5bf1-45fd-a182-35ce5fc0674d";
  const scheduleDefinitionId = "fa73e90b-5bf1-45fd-a182-35ce5fc0674d";
  const credential = new DefaultAzureCredential();
  const client = new AuthorizationManagementClient(credential);
  const result = await client.scopeAccessReviewScheduleDefinitions.deleteById(
    scope,
    scheduleDefinitionId
  );
  console.log(result);
}

async function main() {
  deleteAccessReview();
}

main().catch(console.error);
