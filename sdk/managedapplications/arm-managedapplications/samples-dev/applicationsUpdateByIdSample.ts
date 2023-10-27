/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  ApplicationPatchable,
  ApplicationsUpdateByIdOptionalParams,
  ApplicationClient
} from "@azure/arm-managedapplications";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Updates an existing managed application.
 *
 * @summary Updates an existing managed application.
 * x-ms-original-file: specification/solutions/resource-manager/Microsoft.Solutions/stable/2021-07-01/examples/updateApplicationById.json
 */
async function updatesAnExistingManagedApplication() {
  const applicationId =
    "subscriptions/subid/resourceGroups/rg/providers/Microsoft.Solutions/applications/myManagedApplication";
  const parameters: ApplicationPatchable = {
    applicationDefinitionId:
      "/subscriptions/subid/resourceGroups/rg/providers/Microsoft.Solutions/applicationDefinitions/myAppDef",
    kind: "ServiceCatalog",
    managedResourceGroupId: "/subscriptions/subid/resourceGroups/myManagedRG"
  };
  const options: ApplicationsUpdateByIdOptionalParams = { parameters };
  const credential = new DefaultAzureCredential();
  const client = new ApplicationClient(credential);
  const result = await client.applications.beginUpdateByIdAndWait(
    applicationId,
    options
  );
  console.log(result);
}

async function main() {
  updatesAnExistingManagedApplication();
}

main().catch(console.error);
