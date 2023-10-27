/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { IotHubDescription, IotHubClient } from "@azure/arm-iothub";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create or update the metadata of an Iot hub. The usual pattern to modify a property is to retrieve the IoT hub metadata and security metadata, and then combine them with the modified values in a new body to update the IoT hub. If certain properties are missing in the JSON, updating IoT Hub may cause these values to fallback to default, which may lead to unexpected behavior.
 *
 * @summary Create or update the metadata of an Iot hub. The usual pattern to modify a property is to retrieve the IoT hub metadata and security metadata, and then combine them with the modified values in a new body to update the IoT hub. If certain properties are missing in the JSON, updating IoT Hub may cause these values to fallback to default, which may lead to unexpected behavior.
 * x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2023-06-30/examples/iothub_addRoutingCosmosDBEndpoint.json
 */
async function iotHubResourceAddCosmosDbEndpoint() {
  const subscriptionId =
    process.env["IOTHUB_SUBSCRIPTION_ID"] ||
    "91d12660-3dec-467a-be2a-213b5544ddc0";
  const resourceGroupName =
    process.env["IOTHUB_RESOURCE_GROUP"] || "myResourceGroup";
  const resourceName = "testHub";
  const iotHubDescription: IotHubDescription = {
    etag: "AAAAAAFD6M4=",
    location: "centraluseuap",
    properties: {
      cloudToDevice: {
        defaultTtlAsIso8601: "PT1H",
        feedback: {
          lockDurationAsIso8601: "PT1M",
          maxDeliveryCount: 10,
          ttlAsIso8601: "PT1H"
        },
        maxDeliveryCount: 10
      },
      enableDataResidency: false,
      enableFileUploadNotifications: false,
      eventHubEndpoints: {
        events: { partitionCount: 2, retentionTimeInDays: 1 }
      },
      features: "None",
      ipFilterRules: [],
      messagingEndpoints: {
        fileNotifications: {
          lockDurationAsIso8601: "PT1M",
          maxDeliveryCount: 10,
          ttlAsIso8601: "PT1H"
        }
      },
      minTlsVersion: "1.2",
      networkRuleSets: {
        applyToBuiltInEventHubEndpoint: true,
        defaultAction: "Deny",
        ipRules: [
          { action: "Allow", filterName: "rule1", ipMask: "131.117.159.53" },
          { action: "Allow", filterName: "rule2", ipMask: "157.55.59.128/25" }
        ]
      },
      routing: {
        endpoints: {
          cosmosDBSqlContainers: [
            {
              name: "endpointcosmos",
              authenticationType: "keyBased",
              containerName: "test",
              databaseName: "systemstore",
              endpointUri: "https://test-systemstore-test2.documents.azure.com",
              partitionKeyName: "keystamped",
              partitionKeyTemplate: "{deviceid}-{YYYY}-{MM}",
              primaryKey: "<primary-key>",
              resourceGroup: "rg-test",
              secondaryKey: "<secondary-key>",
              subscriptionId: "<subscription-id>"
            }
          ],
          eventHubs: [],
          serviceBusQueues: [],
          serviceBusTopics: [],
          storageContainers: []
        },
        fallbackRoute: {
          name: "$fallback",
          condition: "true",
          endpointNames: ["events"],
          isEnabled: true,
          source: "DeviceMessages"
        },
        routes: []
      },
      storageEndpoints: {
        $default: {
          connectionString: "",
          containerName: "",
          sasTtlAsIso8601: "PT1H"
        }
      }
    },
    sku: { name: "S1", capacity: 1 },
    tags: {}
  };
  const credential = new DefaultAzureCredential();
  const client = new IotHubClient(credential, subscriptionId);
  const result = await client.iotHubResource.beginCreateOrUpdateAndWait(
    resourceGroupName,
    resourceName,
    iotHubDescription
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update the metadata of an Iot hub. The usual pattern to modify a property is to retrieve the IoT hub metadata and security metadata, and then combine them with the modified values in a new body to update the IoT hub. If certain properties are missing in the JSON, updating IoT Hub may cause these values to fallback to default, which may lead to unexpected behavior.
 *
 * @summary Create or update the metadata of an Iot hub. The usual pattern to modify a property is to retrieve the IoT hub metadata and security metadata, and then combine them with the modified values in a new body to update the IoT hub. If certain properties are missing in the JSON, updating IoT Hub may cause these values to fallback to default, which may lead to unexpected behavior.
 * x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2023-06-30/examples/iothub_createOrUpdate.json
 */
async function iotHubResourceCreateOrUpdate() {
  const subscriptionId =
    process.env["IOTHUB_SUBSCRIPTION_ID"] ||
    "91d12660-3dec-467a-be2a-213b5544ddc0";
  const resourceGroupName =
    process.env["IOTHUB_RESOURCE_GROUP"] || "myResourceGroup";
  const resourceName = "testHub";
  const iotHubDescription: IotHubDescription = {
    etag: "AAAAAAFD6M4=",
    location: "centraluseuap",
    properties: {
      cloudToDevice: {
        defaultTtlAsIso8601: "PT1H",
        feedback: {
          lockDurationAsIso8601: "PT1M",
          maxDeliveryCount: 10,
          ttlAsIso8601: "PT1H"
        },
        maxDeliveryCount: 10
      },
      enableDataResidency: false,
      enableFileUploadNotifications: false,
      eventHubEndpoints: {
        events: { partitionCount: 2, retentionTimeInDays: 1 }
      },
      features: "None",
      ipFilterRules: [],
      messagingEndpoints: {
        fileNotifications: {
          lockDurationAsIso8601: "PT1M",
          maxDeliveryCount: 10,
          ttlAsIso8601: "PT1H"
        }
      },
      minTlsVersion: "1.2",
      networkRuleSets: {
        applyToBuiltInEventHubEndpoint: true,
        defaultAction: "Deny",
        ipRules: [
          { action: "Allow", filterName: "rule1", ipMask: "131.117.159.53" },
          { action: "Allow", filterName: "rule2", ipMask: "157.55.59.128/25" }
        ]
      },
      routing: {
        endpoints: {
          eventHubs: [],
          serviceBusQueues: [],
          serviceBusTopics: [],
          storageContainers: []
        },
        fallbackRoute: {
          name: "$fallback",
          condition: "true",
          endpointNames: ["events"],
          isEnabled: true,
          source: "DeviceMessages"
        },
        routes: []
      },
      storageEndpoints: {
        $default: {
          connectionString: "",
          containerName: "",
          sasTtlAsIso8601: "PT1H"
        }
      }
    },
    sku: { name: "S1", capacity: 1 },
    tags: {}
  };
  const credential = new DefaultAzureCredential();
  const client = new IotHubClient(credential, subscriptionId);
  const result = await client.iotHubResource.beginCreateOrUpdateAndWait(
    resourceGroupName,
    resourceName,
    iotHubDescription
  );
  console.log(result);
}

async function main() {
  iotHubResourceAddCosmosDbEndpoint();
  iotHubResourceCreateOrUpdate();
}

main().catch(console.error);
