/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { PaloAltoNetworksCloudngfw } from "@azure/arm-paloaltonetworksngfw";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List of Firewalls associated with Rulestack
 *
 * @summary List of Firewalls associated with Rulestack
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/stable/2022-08-29/examples/GlobalRulestack_listFirewalls_MaximumSet_Gen.json
 */
async function globalRulestackListFirewallsMaximumSetGen() {
  const globalRulestackName = "praval";
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential);
  const result = await client.globalRulestack.listFirewalls(
    globalRulestackName
  );
  console.log(result);
}

/**
 * This sample demonstrates how to List of Firewalls associated with Rulestack
 *
 * @summary List of Firewalls associated with Rulestack
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/stable/2022-08-29/examples/GlobalRulestack_listFirewalls_MinimumSet_Gen.json
 */
async function globalRulestackListFirewallsMinimumSetGen() {
  const globalRulestackName = "praval";
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential);
  const result = await client.globalRulestack.listFirewalls(
    globalRulestackName
  );
  console.log(result);
}

async function main() {
  globalRulestackListFirewallsMaximumSetGen();
  globalRulestackListFirewallsMinimumSetGen();
}

main().catch(console.error);
