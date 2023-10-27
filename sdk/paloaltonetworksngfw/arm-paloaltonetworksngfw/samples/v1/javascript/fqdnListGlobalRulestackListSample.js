/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { PaloAltoNetworksCloudngfw } = require("@azure/arm-paloaltonetworksngfw");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to List FqdnListGlobalRulestackResource resources by Tenant
 *
 * @summary List FqdnListGlobalRulestackResource resources by Tenant
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/stable/2022-08-29/examples/FqdnListGlobalRulestack_List_MaximumSet_Gen.json
 */
async function fqdnListGlobalRulestackListMaximumSetGen() {
  const globalRulestackName = "praval";
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential);
  const resArray = new Array();
  for await (let item of client.fqdnListGlobalRulestack.list(globalRulestackName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to List FqdnListGlobalRulestackResource resources by Tenant
 *
 * @summary List FqdnListGlobalRulestackResource resources by Tenant
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/stable/2022-08-29/examples/FqdnListGlobalRulestack_List_MinimumSet_Gen.json
 */
async function fqdnListGlobalRulestackListMinimumSetGen() {
  const globalRulestackName = "praval";
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential);
  const resArray = new Array();
  for await (let item of client.fqdnListGlobalRulestack.list(globalRulestackName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  fqdnListGlobalRulestackListMaximumSetGen();
  fqdnListGlobalRulestackListMinimumSetGen();
}

main().catch(console.error);
