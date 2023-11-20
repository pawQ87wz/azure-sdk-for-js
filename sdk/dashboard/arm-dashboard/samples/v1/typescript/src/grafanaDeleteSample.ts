/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { DashboardManagementClient } from "@azure/arm-dashboard";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Delete a workspace for Grafana resource.
 *
 * @summary Delete a workspace for Grafana resource.
 * x-ms-original-file: specification/dashboard/resource-manager/Microsoft.Dashboard/stable/2023-09-01/examples/Grafana_Delete.json
 */
async function grafanaDelete() {
  const subscriptionId =
    process.env["DASHBOARD_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["DASHBOARD_RESOURCE_GROUP"] || "myResourceGroup";
  const workspaceName = "myWorkspace";
  const credential = new DefaultAzureCredential();
  const client = new DashboardManagementClient(credential, subscriptionId);
  const result = await client.grafana.beginDeleteAndWait(
    resourceGroupName,
    workspaceName
  );
  console.log(result);
}

async function main() {
  grafanaDelete();
}

main().catch(console.error);
