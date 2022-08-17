/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  SoftwareUpdateConfiguration,
  SoftwareUpdateConfigurationsCreateOptionalParams,
  SoftwareUpdateConfigurationsCreateResponse,
  SoftwareUpdateConfigurationsGetByNameOptionalParams,
  SoftwareUpdateConfigurationsGetByNameResponse,
  SoftwareUpdateConfigurationsDeleteOptionalParams,
  SoftwareUpdateConfigurationsListOptionalParams,
  SoftwareUpdateConfigurationsListResponse
} from "../models";

/** Interface representing a SoftwareUpdateConfigurations. */
export interface SoftwareUpdateConfigurations {
  /**
   * Create a new software update configuration with the name given in the URI.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param softwareUpdateConfigurationName The name of the software update configuration to be created.
   * @param parameters Request body.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    automationAccountName: string,
    softwareUpdateConfigurationName: string,
    parameters: SoftwareUpdateConfiguration,
    options?: SoftwareUpdateConfigurationsCreateOptionalParams
  ): Promise<SoftwareUpdateConfigurationsCreateResponse>;
  /**
   * Get a single software update configuration by name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param softwareUpdateConfigurationName The name of the software update configuration to be created.
   * @param options The options parameters.
   */
  getByName(
    resourceGroupName: string,
    automationAccountName: string,
    softwareUpdateConfigurationName: string,
    options?: SoftwareUpdateConfigurationsGetByNameOptionalParams
  ): Promise<SoftwareUpdateConfigurationsGetByNameResponse>;
  /**
   * delete a specific software update configuration.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param softwareUpdateConfigurationName The name of the software update configuration to be created.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    automationAccountName: string,
    softwareUpdateConfigurationName: string,
    options?: SoftwareUpdateConfigurationsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Get all software update configurations for the account.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    automationAccountName: string,
    options?: SoftwareUpdateConfigurationsListOptionalParams
  ): Promise<SoftwareUpdateConfigurationsListResponse>;
}
