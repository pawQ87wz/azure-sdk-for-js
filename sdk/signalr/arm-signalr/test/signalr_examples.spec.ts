/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */


import {
  env,
  Recorder,
  RecorderStartOptions,
  delay,
  isPlaybackMode,
} from "@azure-tools/test-recorder";
import { createTestCredential } from "@azure-tools/test-credential";
import { assert } from "chai";
import { Context } from "mocha";
import { SignalRManagementClient } from "../src/signalRManagementClient";

const replaceableVariables: Record<string, string> = {
  AZURE_CLIENT_ID: "azure_client_id",
  AZURE_CLIENT_SECRET: "azure_client_secret",
  AZURE_TENANT_ID: "88888888-8888-8888-8888-888888888888",
  SUBSCRIPTION_ID: "88888888-8888-8888-8888-888888888888"
};

const recorderOptions: RecorderStartOptions = {
  envSetupForPlayback: replaceableVariables
};

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("signalr test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: SignalRManagementClient;
  let location: string;
  let resourceGroup: string;
  let resourceName: string;

  beforeEach(async function (this: Context) {
    recorder = new Recorder(this.currentTest);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || '';
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new SignalRManagementClient(credential, subscriptionId, recorder.configureClientOptions({}));
    location = "eastus";
    resourceGroup = "myjstest";
    resourceName = "mySignalRService1";
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("checkname test", async function () {
    const res = await client.signalR.checkNameAvailability(
      location,
      {
        name: resourceName,
        type: "Microsoft.SignalRService/SignalR"
      }
    );
  })

  it("signalr create test", async function () {
    const res = await client.signalR.beginCreateOrUpdateAndWait(
      resourceGroup,
      resourceName,
      {
        location,
        tags: { key1: "value1" },
        sku: { name: "Free_F1", capacity: 1, tier: "free" },
        kind: "SignalR",
        identity: { type: "SystemAssigned" },
        tls: {
          clientCertEnabled: false
        },
        features: [
          { flag: "ServiceMode", properties: {}, value: "Serverless" },
          { flag: "EnableConnectivityLogs", properties: {}, value: "True" },
          { flag: "EnableMessagingLogs", properties: {}, value: "False" },
          { flag: "EnableLiveTrace", properties: {}, value: "False" }
        ],
        cors: {
          allowedOrigins: ["*"]
        },
        serverless: { connectionTimeoutInSeconds: 30 },
        upstream: {
          templates: []
        },
        networkACLs: {
          defaultAction: "Deny",
          privateEndpoints: [],
          publicNetwork: {
            allow: [
              "ServerConnection",
              "ClientConnection",
              "RESTAPI",
              "Trace"
            ]
          }
        },
        publicNetworkAccess: "Enabled",
        disableLocalAuth: false,
        disableAadAuth: false,
      }, testPollingOptions);
    assert.equal(res.name, resourceName);
  });

  it("signalr get test", async function () {
    const res = await client.signalR.get(resourceGroup, resourceName);
    assert.equal(res.name, resourceName);
  });

  it("signalr list test", async function () {
    const resArray = new Array();
    for await (let item of client.signalR.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  it("signalr delete test", async function () {
    const resArray = new Array();
    const res = await client.signalR.beginDeleteAndWait(resourceGroup, resourceName, testPollingOptions)
    for await (let item of client.signalR.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
  });
})
