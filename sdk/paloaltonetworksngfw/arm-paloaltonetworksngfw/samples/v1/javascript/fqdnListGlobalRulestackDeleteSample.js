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
 * This sample demonstrates how to Delete a FqdnListGlobalRulestackResource
 *
 * @summary Delete a FqdnListGlobalRulestackResource
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/stable/2023-09-01/examples/FqdnListGlobalRulestack_Delete_MaximumSet_Gen.json
 */
async function fqdnListGlobalRulestackDeleteMaximumSetGen() {
  const globalRulestackName = "praval";
  const name = "armid1";
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential);
  const result = await client.fqdnListGlobalRulestack.beginDeleteAndWait(globalRulestackName, name);
  console.log(result);
}

/**
 * This sample demonstrates how to Delete a FqdnListGlobalRulestackResource
 *
 * @summary Delete a FqdnListGlobalRulestackResource
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/stable/2023-09-01/examples/FqdnListGlobalRulestack_Delete_MinimumSet_Gen.json
 */
async function fqdnListGlobalRulestackDeleteMinimumSetGen() {
  const globalRulestackName = "praval";
  const name = "armid1";
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential);
  const result = await client.fqdnListGlobalRulestack.beginDeleteAndWait(globalRulestackName, name);
  console.log(result);
}

async function main() {
  fqdnListGlobalRulestackDeleteMaximumSetGen();
  fqdnListGlobalRulestackDeleteMinimumSetGen();
}

main().catch(console.error);
