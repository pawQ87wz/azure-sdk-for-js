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
  ContinueRequestBody,
  TroubleshootersContinueOptionalParams,
  HelpRP
} from "@azure/arm-selfhelp";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Uses ‘stepId’ and ‘responses’ as the trigger to continue the troubleshooting steps for the respective troubleshooter resource name. <br/>Continue API is used to provide inputs that are required for the specific troubleshooter to progress into the next step in the process. This API is used after the Troubleshooter has been created using the Create API.
 *
 * @summary Uses ‘stepId’ and ‘responses’ as the trigger to continue the troubleshooting steps for the respective troubleshooter resource name. <br/>Continue API is used to provide inputs that are required for the specific troubleshooter to progress into the next step in the process. This API is used after the Troubleshooter has been created using the Create API.
 * x-ms-original-file: specification/help/resource-manager/Microsoft.Help/preview/2023-09-01-preview/examples/Troubleshooter_Continue.json
 */
async function troubleshooterContinue() {
  const scope =
    "subscriptions/mySubscription/resourcegroups/myresourceGroup/providers/Microsoft.KeyVault/vaults/test-keyvault-rp";
  const troubleshooterName = "abf168ed-1b54-454a-86f6-e4b62253d3b1";
  const continueRequestBody: ContinueRequestBody = {
    stepId: "SampleStepId",
    responses: [
      {
        questionId: "SampleQuestionId",
        questionType: "Text",
        response: "Connection exception"
      }
    ]
  };
  const options: TroubleshootersContinueOptionalParams = {
    continueRequestBody
  };
  const credential = new DefaultAzureCredential();
  const client = new HelpRP(credential);
  const result = await client.troubleshooters.continue(
    scope,
    troubleshooterName,
    options
  );
  console.log(result);
}

async function main() {
  troubleshooterContinue();
}

main().catch(console.error);
