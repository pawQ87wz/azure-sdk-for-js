// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export { AzureKeyCredential, AzureSASCredential } from "@azure/core-auth";

export { CloudEvent, EventGridEvent, SendCloudEventInput, SendEventGridEventInput } from "./models";

export {
  EventGridPublisherClient,
  EventGridPublisherClientOptions,
  SendOptions,
  CloudEventSendOptions,
  InputSchema,
  InputSchemaToInputTypeMap,
  InputSchemaToOptionsTypeMap,
} from "./eventGridClient";

export {
  generateSharedAccessSignature,
  GenerateSharedAccessSignatureOptions,
} from "./generateSharedAccessSignature";

export { EventGridDeserializer } from "./consumer";

export { isSystemEvent, KnownSystemEventTypes, SystemEventNameToEventData } from "./predicates";

export {
  AcsChatEventBase,
  AcsChatEventInThreadBase,
  AcsChatMessageEventInThreadBase,
  AcsChatMessageDeletedEventData,
  AcsChatMessageDeletedInThreadEventData,
  AcsChatMessageEditedEventData,
  AcsChatMessageEditedInThreadEventData,
  AcsChatMessageReceivedEventData,
  AcsChatMessageReceivedInThreadEventData,
  AcsChatMessageEventBase,
  AcsChatThreadCreatedWithUserEventData,
  AcsChatThreadPropertiesUpdatedPerUserEventData,
  AcsChatThreadWithUserDeletedEventData,
  AcsChatThreadEventBase,
  AcsChatParticipantAddedToThreadEventData,
  AcsChatParticipantAddedToThreadWithUserEventData,
  AcsChatParticipantRemovedFromThreadEventData,
  AcsChatParticipantRemovedFromThreadWithUserEventData,
  AcsRecordingFileStatusUpdatedEventData,
  AcsRecordingStorageInfo,
  AcsRecordingChunkInfo,
  ApiManagementApiCreatedEventData,
  ApiManagementApiDeletedEventData,
  ApiManagementApiReleaseCreatedEventData,
  ApiManagementApiReleaseDeletedEventData,
  ApiManagementApiReleaseUpdatedEventData,
  ApiManagementApiUpdatedEventData,
  ApiManagementProductCreatedEventData,
  ApiManagementProductDeletedEventData,
  ApiManagementProductUpdatedEventData,
  ApiManagementSubscriptionCreatedEventData,
  ApiManagementSubscriptionDeletedEventData,
  ApiManagementSubscriptionUpdatedEventData,
  ApiManagementUserCreatedEventData,
  ApiManagementUserDeletedEventData,
  ApiManagementUserUpdatedEventData,
  CommunicationIdentifierModel,
  CommunicationUserIdentifierModel,
  CommunicationCloudEnvironmentModel,
  MicrosoftTeamsUserIdentifierModel,
  PhoneNumberIdentifierModel,
  AcsChatThreadParticipant,
  AcsUserDisconnectedEventData,
  AcsSmsDeliveryAttempt,
  AcsSmsDeliveryReportReceivedEventData,
  AcsSmsEventBase,
  AcsSmsReceivedEventData,
  AppConfigurationKeyValueDeletedEventData,
  AppConfigurationKeyValueModifiedEventData,
  AppEventTypeDetail,
  AppServicePlanEventTypeDetail,
  ContainerRegistryArtifactEventTarget,
  ContainerRegistryEventData,
  ContainerRegistryImagePushedEventData,
  ContainerRegistryImageDeletedEventData,
  ContainerRegistryChartDeletedEventData,
  ContainerRegistryChartPushedEventData,
  ContainerServiceNewKubernetesVersionAvailableEventData,
  DeviceConnectionStateEventInfo,
  DeviceTwinInfo,
  DeviceTwinInfoProperties,
  DeviceTwinInfoX509Thumbprint,
  HealthcareDicomImageCreatedEventData,
  HealthcareDicomImageDeletedEventData,
  HealthcareFhirResourceCreatedEventData,
  HealthcareFhirResourceUpdatedEventData,
  HealthcareFhirResourceDeletedEventData,
  HealthcareFhirResourceType,
  IotHubDeviceCreatedEventData,
  IotHubDeviceDeletedEventData,
  IotHubDeviceConnectedEventData,
  IotHubDeviceDisconnectedEventData,
  IotHubDeviceTelemetryEventData,
  KeyVaultCertificateNewVersionCreatedEventData,
  KeyVaultCertificateNearExpiryEventData,
  KeyVaultCertificateExpiredEventData,
  KeyVaultKeyNewVersionCreatedEventData,
  KeyVaultKeyNearExpiryEventData,
  KeyVaultKeyExpiredEventData,
  KeyVaultSecretNewVersionCreatedEventData,
  KeyVaultSecretNearExpiryEventData,
  KeyVaultSecretExpiredEventData,
  KeyVaultAccessPolicyChangedEventData,
  SubscriptionValidationEventData,
  SubscriptionDeletedEventData,
  EventHubCaptureFileCreatedEventData,
  MachineLearningServicesDatasetDriftDetectedEventData,
  MachineLearningServicesModelDeployedEventData,
  MachineLearningServicesModelRegisteredEventData,
  MachineLearningServicesRunCompletedEventData,
  MachineLearningServicesRunStatusChangedEventData,
  MapsGeofenceEvent,
  MapsGeofenceEnteredEventData,
  MapsGeofenceExitedEventData,
  MapsGeofenceResultEventData,
  MediaJobStateChangeEventData,
  MediaJobOutputStateChangeEventData,
  MediaJobScheduledEventData,
  MediaJobProcessingEventData,
  MediaJobCancelingEventData,
  MediaJobFinishedEventData,
  MediaJobCanceledEventData,
  MediaJobError,
  MediaJobErrorCategory,
  MediaJobErrorDetail,
  MediaJobErrorCode,
  MediaJobRetry,
  MediaJobErroredEventData,
  MediaJobOutputCanceledEventData,
  MediaJobOutputCancelingEventData,
  MediaJobOutputErroredEventData,
  MediaJobOutputFinishedEventData,
  MediaJobOutputProcessingEventData,
  MediaJobOutputScheduledEventData,
  MediaJobOutputProgressEventData,
  MediaJobOutputUnion,
  MediaJobState,
  MediaLiveEventChannelArchiveHeartbeatEventData,
  MediaLiveEventEncoderConnectedEventData,
  MediaLiveEventConnectionRejectedEventData,
  MediaLiveEventEncoderDisconnectedEventData,
  MediaLiveEventIncomingStreamReceivedEventData,
  MediaLiveEventIncomingStreamsOutOfSyncEventData,
  MediaLiveEventIncomingVideoStreamsOutOfSyncEventData,
  MediaLiveEventIncomingDataChunkDroppedEventData,
  MediaLiveEventIngestHeartbeatEventData,
  MediaLiveEventTrackDiscontinuityDetectedEventData,
  ResourceWriteSuccessEventData,
  ResourceWriteFailureEventData,
  ResourceWriteCancelEventData,
  ResourceDeleteSuccessEventData,
  ResourceDeleteFailureEventData,
  ResourceDeleteCancelEventData,
  ResourceActionSuccessEventData,
  ResourceActionFailureEventData,
  ResourceActionCancelEventData,
  ServiceBusActiveMessagesAvailableWithNoListenersEventData,
  ServiceBusDeadletterMessagesAvailableWithNoListenersEventData,
  StorageBlobCreatedEventData,
  StorageBlobDeletedEventData,
  StorageBlobRenamedEventData,
  StorageDirectoryCreatedEventData,
  StorageDirectoryDeletedEventData,
  StorageDirectoryRenamedEventData,
  StorageLifecyclePolicyActionSummaryDetail,
  StorageLifecyclePolicyCompletedEventData,
  WebAppUpdatedEventData,
  WebBackupOperationStartedEventData,
  WebBackupOperationCompletedEventData,
  WebBackupOperationFailedEventData,
  WebRestoreOperationStartedEventData,
  WebRestoreOperationCompletedEventData,
  WebRestoreOperationFailedEventData,
  WebSlotSwapStartedEventData,
  WebSlotSwapCompletedEventData,
  WebSlotSwapFailedEventData,
  WebSlotSwapWithPreviewStartedEventData,
  WebSlotSwapWithPreviewCancelledEventData,
  WebAppServicePlanUpdatedEventData,
  WebAppServicePlanUpdatedEventDataSku,
  AppAction,
  KnownAppAction,
  StampKind,
  KnownStampKind,
  AsyncStatus,
  KnownAsyncStatus,
  ContainerRegistryArtifactEventData,
  ContainerRegistryEventActor,
  ContainerRegistryEventRequest,
  ContainerRegistryEventSource,
  ContainerRegistryEventTarget,
  DeviceConnectionStateEvent,
  DeviceLifeCycleEvent,
  DeviceTelemetryEvent,
  MapsGeofenceGeometry,
  MediaJobOutput,
  MediaJobOutputAsset,
  DeviceTwin,
  DeviceTwinMetadata,
  AppServicePlanAction,
  KnownAppServicePlanAction,
  PolicyInsightsPolicyStateChangedEventData,
  PolicyInsightsPolicyStateCreatedEventData,
  PolicyInsightsPolicyStateDeletedEventData,
  StorageAsyncOperationInitiatedEventData,
  StorageBlobTierChangedEventData,
  StorageBlobInventoryPolicyCompletedEventData,
  RecordingChannelType,
  RecordingContentType,
  RecordingFormatType,
  ResourceAuthorization,
  ResourceHttpRequest,
  ContainerRegistryEventConnectedRegistry,
  StorageTaskQueuedEventData,
  StorageTaskCompletedEventData,
  DataBoxCopyStartedEventData,
  DataBoxCopyCompletedEventData,
  DataBoxOrderCompletedEventData,
  AcsIncomingCallEventData,
  AcsEmailDeliveryReportReceivedEventData,
  AcsEmailEngagementTrackingReportReceivedEventData,
  ApiManagementGatewayCreatedEventData,
  ApiManagementGatewayUpdatedEventData,
  ApiManagementGatewayDeletedEventData,
  ApiManagementGatewayHostnameConfigurationCreatedEventData,
  ApiManagementGatewayHostnameConfigurationUpdatedEventData,
  ApiManagementGatewayHostnameConfigurationDeletedEventData,
  ApiManagementGatewayCertificateAuthorityCreatedEventData,
  ApiManagementGatewayCertificateAuthorityUpdatedEventData,
  ApiManagementGatewayCertificateAuthorityDeletedEventData,
  ApiManagementGatewayApiAddedEventData,
  ApiManagementGatewayApiRemovedEventData,
  HealthcareDicomImageUpdatedEventData,
  AcsEmailDeliveryReportStatusDetails,
  AcsEmailDeliveryReportStatus,
  AcsUserEngagement,
  AcsIncomingCallCustomContext,
  DataBoxStageName,
  StorageTaskCompletedStatus,
  ContainerServiceClusterSupportEndedEventData,
  ContainerServiceClusterSupportEndingEventData,
  ContainerServiceNodePoolRollingStartedEventData,
  ContainerServiceNodePoolRollingSucceededEventData,
  ContainerServiceNodePoolRollingFailedEventData,
  ContainerServiceClusterSupportEventData,
  ContainerServiceNodePoolRollingEventData,
  EventGridMqttClientCreatedOrUpdatedEventData,
  EventGridMqttClientDeletedEventData,
  EventGridMqttClientSessionConnectedEventData,
  EventGridMqttClientSessionDisconnectedEventData,
  EventGridMqttClientEventData,
  EventGridMqttClientState,
  KnownEventGridMqttClientState,
  EventGridMqttClientDisconnectionReason,
  KnownEventGridMqttClientDisconnectionReason,
  AppConfigurationSnapshotCreatedEventData,
  AppConfigurationSnapshotModifiedEventData,
  AppConfigurationSnapshotEventData,
  AcsRouterJobEventData,
  AcsRouterWorkerEventData,
  AcsRouterWorkerDeregisteredEventData,
  AcsRouterWorkerRegisteredEventData,
  ResourceNotificationsResourceUpdatedEventData,
  ResourceNotificationsOperationalDetails,
  ResourceNotificationsResourceUpdatedDetails,
  ResourceNotificationsHealthResourcesAvailabilityStatusChangedEventData,
  ResourceNotificationsHealthResourcesAnnotatedEventData,
  AcsRouterCommunicationError,
  AcsRouterQueueDetails,
  AcsRouterWorkerSelector,
  AcsRouterJobStatus,
  KnownAcsRouterJobStatus,
  AcsRouterEventData,
  AcsRouterLabelOperator,
  KnownAcsRouterLabelOperator,
  AcsRouterWorkerSelectorState,
  KnownAcsRouterWorkerSelectorState,
  AcsRouterJobCancelledEventData,
  AcsRouterJobClassificationFailedEventData,
  AcsRouterJobClassifiedEventData,
  AcsRouterJobClosedEventData,
  AcsRouterJobCompletedEventData,
  AcsRouterJobDeletedEventData,
  AcsRouterJobExceptionTriggeredEventData,
  AcsRouterJobQueuedEventData,
  AcsRouterJobReceivedEventData,
  AcsRouterJobSchedulingFailedEventData,
  AcsRouterJobUnassignedEventData,
  AcsRouterJobWaitingForActivationEventData,
  AcsRouterJobWorkerSelectorsExpiredEventData,
  AcsRouterWorkerDeletedEventData,
  AcsRouterWorkerOfferAcceptedEventData,
  AcsRouterWorkerOfferDeclinedEventData,
  AcsRouterWorkerOfferExpiredEventData,
  AcsRouterWorkerOfferIssuedEventData,
  AcsRouterWorkerOfferRevokedEventData,
  AcsRouterChannelConfiguration,
  ResourceNotificationsResourceManagementCreatedOrUpdatedEventData,
  ResourceNotificationsResourceManagementDeletedEventData,
  ResourceNotificationsResourceDeletedEventData,
  ResourceNotificationsResourceDeletedDetails,
} from "./generated/models";
