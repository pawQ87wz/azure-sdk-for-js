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
  VirtualMachineScaleSetVMInstanceIDs,
  VirtualMachineScaleSetsRedeployOptionalParams,
  ComputeManagementClient
} from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Shuts down all the virtual machines in the virtual machine scale set, moves them to a new node, and powers them back on.
 *
 * @summary Shuts down all the virtual machines in the virtual machine scale set, moves them to a new node, and powers them back on.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2023-07-01/examples/virtualMachineScaleSetExamples/VirtualMachineScaleSet_Redeploy_MaximumSet_Gen.json
 */
async function virtualMachineScaleSetRedeployMaximumSetGen() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "rgcompute";
  const vmScaleSetName = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  const vmInstanceIDs: VirtualMachineScaleSetVMInstanceIDs = {
    instanceIds: ["aaaaaaaaaaaaaaaaa"]
  };
  const options: VirtualMachineScaleSetsRedeployOptionalParams = {
    vmInstanceIDs
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineScaleSets.beginRedeployAndWait(
    resourceGroupName,
    vmScaleSetName,
    options
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Shuts down all the virtual machines in the virtual machine scale set, moves them to a new node, and powers them back on.
 *
 * @summary Shuts down all the virtual machines in the virtual machine scale set, moves them to a new node, and powers them back on.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2023-07-01/examples/virtualMachineScaleSetExamples/VirtualMachineScaleSet_Redeploy_MinimumSet_Gen.json
 */
async function virtualMachineScaleSetRedeployMinimumSetGen() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "rgcompute";
  const vmScaleSetName = "aaaaaaaaaaaaaaaaaaaaaa";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineScaleSets.beginRedeployAndWait(
    resourceGroupName,
    vmScaleSetName
  );
  console.log(result);
}

async function main() {
  virtualMachineScaleSetRedeployMaximumSetGen();
  virtualMachineScaleSetRedeployMinimumSetGen();
}

main().catch(console.error);
