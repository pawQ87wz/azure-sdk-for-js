/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ComputeManagementClient } from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Reapplies the Virtual Machine Scale Set Virtual Machine Profile to the Virtual Machine Instances
 *
 * @summary Reapplies the Virtual Machine Scale Set Virtual Machine Profile to the Virtual Machine Instances
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2023-07-01/examples/virtualMachineScaleSetExamples/VirtualMachineScaleSet_Reapply_MaximumSet_Gen.json
 */
async function virtualMachineScaleSetsReapplyMaximumSetGen() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] ||
    "b4f1213b-cacc-4816-8bfb-f30f90643de8";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] ||
    "VirtualMachineScaleSetReapplyTestRG";
  const vmScaleSetName = "VMSSReapply-Test-ScaleSet";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineScaleSets.beginReapplyAndWait(
    resourceGroupName,
    vmScaleSetName
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Reapplies the Virtual Machine Scale Set Virtual Machine Profile to the Virtual Machine Instances
 *
 * @summary Reapplies the Virtual Machine Scale Set Virtual Machine Profile to the Virtual Machine Instances
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2023-07-01/examples/virtualMachineScaleSetExamples/VirtualMachineScaleSet_Reapply_MinimumSet_Gen.json
 */
async function virtualMachineScaleSetsReapplyMinimumSetGen() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] ||
    "b4f1213b-cacc-4816-8bfb-f30f90643de8";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] ||
    "VirtualMachineScaleSetReapplyTestRG";
  const vmScaleSetName = "VMSSReapply-Test-ScaleSet";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineScaleSets.beginReapplyAndWait(
    resourceGroupName,
    vmScaleSetName
  );
  console.log(result);
}

async function main() {
  virtualMachineScaleSetsReapplyMaximumSetGen();
  virtualMachineScaleSetsReapplyMinimumSetGen();
}

main().catch(console.error);
