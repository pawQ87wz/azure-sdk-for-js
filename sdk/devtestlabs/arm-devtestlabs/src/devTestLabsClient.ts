/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import {
  PipelineRequest,
  PipelineResponse,
  SendRequest
} from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import {
  ProviderOperationsImpl,
  LabsImpl,
  OperationsImpl,
  GlobalSchedulesImpl,
  ArtifactSourcesImpl,
  ArmTemplatesImpl,
  ArtifactsImpl,
  CostsImpl,
  CustomImagesImpl,
  FormulasImpl,
  GalleryImagesImpl,
  NotificationChannelsImpl,
  PolicySetsImpl,
  PoliciesImpl,
  SchedulesImpl,
  ServiceRunnersImpl,
  UsersImpl,
  DisksImpl,
  EnvironmentsImpl,
  SecretsImpl,
  ServiceFabricsImpl,
  ServiceFabricSchedulesImpl,
  VirtualMachinesImpl,
  VirtualMachineSchedulesImpl,
  VirtualNetworksImpl
} from "./operations";
import {
  ProviderOperations,
  Labs,
  Operations,
  GlobalSchedules,
  ArtifactSources,
  ArmTemplates,
  Artifacts,
  Costs,
  CustomImages,
  Formulas,
  GalleryImages,
  NotificationChannels,
  PolicySets,
  Policies,
  Schedules,
  ServiceRunners,
  Users,
  Disks,
  Environments,
  Secrets,
  ServiceFabrics,
  ServiceFabricSchedules,
  VirtualMachines,
  VirtualMachineSchedules,
  VirtualNetworks
} from "./operationsInterfaces";
import { DevTestLabsClientOptionalParams } from "./models";

export class DevTestLabsClient extends coreClient.ServiceClient {
  $host: string;
  apiVersion: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the DevTestLabsClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The subscription ID.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: DevTestLabsClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: DevTestLabsClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-devtestlabs/4.1.1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      endpoint:
        options.endpoint ?? options.baseUri ?? "https://management.azure.com"
    };
    super(optionsWithDefaults);

    let bearerTokenAuthenticationPolicyFound: boolean = false;
    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] = options.pipeline.getOrderedPolicies();
      bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName
      );
    }
    if (
      !options ||
      !options.pipeline ||
      options.pipeline.getOrderedPolicies().length == 0 ||
      !bearerTokenAuthenticationPolicyFound
    ) {
      this.pipeline.removePolicy({
        name: coreRestPipeline.bearerTokenAuthenticationPolicyName
      });
      this.pipeline.addPolicy(
        coreRestPipeline.bearerTokenAuthenticationPolicy({
          credential: credentials,
          scopes:
            optionsWithDefaults.credentialScopes ??
            `${optionsWithDefaults.endpoint}/.default`,
          challengeCallbacks: {
            authorizeRequestOnChallenge:
              coreClient.authorizeRequestOnClaimChallenge
          }
        })
      );
    }
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2018-09-15";
    this.providerOperations = new ProviderOperationsImpl(this);
    this.labs = new LabsImpl(this);
    this.operations = new OperationsImpl(this);
    this.globalSchedules = new GlobalSchedulesImpl(this);
    this.artifactSources = new ArtifactSourcesImpl(this);
    this.armTemplates = new ArmTemplatesImpl(this);
    this.artifacts = new ArtifactsImpl(this);
    this.costs = new CostsImpl(this);
    this.customImages = new CustomImagesImpl(this);
    this.formulas = new FormulasImpl(this);
    this.galleryImages = new GalleryImagesImpl(this);
    this.notificationChannels = new NotificationChannelsImpl(this);
    this.policySets = new PolicySetsImpl(this);
    this.policies = new PoliciesImpl(this);
    this.schedules = new SchedulesImpl(this);
    this.serviceRunners = new ServiceRunnersImpl(this);
    this.users = new UsersImpl(this);
    this.disks = new DisksImpl(this);
    this.environments = new EnvironmentsImpl(this);
    this.secrets = new SecretsImpl(this);
    this.serviceFabrics = new ServiceFabricsImpl(this);
    this.serviceFabricSchedules = new ServiceFabricSchedulesImpl(this);
    this.virtualMachines = new VirtualMachinesImpl(this);
    this.virtualMachineSchedules = new VirtualMachineSchedulesImpl(this);
    this.virtualNetworks = new VirtualNetworksImpl(this);
    this.addCustomApiVersionPolicy(options.apiVersion);
  }

  /** A function that adds a policy that sets the api-version (or equivalent) to reflect the library version. */
  private addCustomApiVersionPolicy(apiVersion?: string) {
    if (!apiVersion) {
      return;
    }
    const apiVersionPolicy = {
      name: "CustomApiVersionPolicy",
      async sendRequest(
        request: PipelineRequest,
        next: SendRequest
      ): Promise<PipelineResponse> {
        const param = request.url.split("?");
        if (param.length > 1) {
          const newParams = param[1].split("&").map((item) => {
            if (item.indexOf("api-version") > -1) {
              return "api-version=" + apiVersion;
            } else {
              return item;
            }
          });
          request.url = param[0] + "?" + newParams.join("&");
        }
        return next(request);
      }
    };
    this.pipeline.addPolicy(apiVersionPolicy);
  }

  providerOperations: ProviderOperations;
  labs: Labs;
  operations: Operations;
  globalSchedules: GlobalSchedules;
  artifactSources: ArtifactSources;
  armTemplates: ArmTemplates;
  artifacts: Artifacts;
  costs: Costs;
  customImages: CustomImages;
  formulas: Formulas;
  galleryImages: GalleryImages;
  notificationChannels: NotificationChannels;
  policySets: PolicySets;
  policies: Policies;
  schedules: Schedules;
  serviceRunners: ServiceRunners;
  users: Users;
  disks: Disks;
  environments: Environments;
  secrets: Secrets;
  serviceFabrics: ServiceFabrics;
  serviceFabricSchedules: ServiceFabricSchedules;
  virtualMachines: VirtualMachines;
  virtualMachineSchedules: VirtualMachineSchedules;
  virtualNetworks: VirtualNetworks;
}
