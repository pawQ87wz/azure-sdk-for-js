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
  LocalRulestacksListAppIdsOptionalParams,
  PaloAltoNetworksCloudngfw
} from "@azure/arm-paloaltonetworksngfw";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List of AppIds for LocalRulestack ApiVersion
 *
 * @summary List of AppIds for LocalRulestack ApiVersion
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/stable/2023-09-01/examples/LocalRulestacks_listAppIds_MaximumSet_Gen.json
 */
async function localRulestacksListAppIdsMaximumSetGen() {
  const subscriptionId =
    process.env["PALOALTONETWORKSNGFW_SUBSCRIPTION_ID"] ||
    "2bf4a339-294d-4c25-b0b2-ef649e9f5c27";
  const resourceGroupName =
    process.env["PALOALTONETWORKSNGFW_RESOURCE_GROUP"] || "rgopenapi";
  const localRulestackName = "lrs1";
  const appIdVersion = "8543";
  const appPrefix = "pref";
  const skip = "a6a321";
  const top = 20;
  const options: LocalRulestacksListAppIdsOptionalParams = {
    appIdVersion,
    appPrefix,
    skip,
    top
  };
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.localRulestacks.listAppIds(
    resourceGroupName,
    localRulestackName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to List of AppIds for LocalRulestack ApiVersion
 *
 * @summary List of AppIds for LocalRulestack ApiVersion
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/stable/2023-09-01/examples/LocalRulestacks_listAppIds_MinimumSet_Gen.json
 */
async function localRulestacksListAppIdsMinimumSetGen() {
  const subscriptionId =
    process.env["PALOALTONETWORKSNGFW_SUBSCRIPTION_ID"] ||
    "2bf4a339-294d-4c25-b0b2-ef649e9f5c27";
  const resourceGroupName =
    process.env["PALOALTONETWORKSNGFW_RESOURCE_GROUP"] || "rgopenapi";
  const localRulestackName = "lrs1";
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.localRulestacks.listAppIds(
    resourceGroupName,
    localRulestackName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  localRulestacksListAppIdsMaximumSetGen();
  localRulestacksListAppIdsMinimumSetGen();
}

main().catch(console.error);
