"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistIntegrationType = exports.WarehouseStatus = exports.VerificationMethod = exports.UpsertRuleInputStatus = exports.UpdateUserProfileErrorTypes = exports.TransformationEventType = exports.TrackingPlanType = exports.TrackingPlanRuleType = exports.TrackingPlanRuleStatus = exports.SubscriptionSettingType = exports.StreamType = exports.StateValues = exports.SpaceIdentityResolutionConfigIdBlockingMethods = exports.SourceStatus = exports.SourcesSortStatus = exports.SourcesSortOrder = exports.SourceFunctionStatus = exports.SegmentIdentifierType = exports.SegmentEventType = exports.ResourceType = exports.RegulationType = exports.RegulationStatus = exports.PropertyValueSnapshotType = exports.PropertySchemaType = exports.ProfileTraitType = exports.PersonasTraitType = exports.PersonasPlan = exports.PersonasIdentityResolutionIdBlockingRuleMethod = exports.PersonasDestinationType = exports.PersonasDestinationSyncAttemptErrorType = exports.PersonasComputeScheduleIntervalUnit = exports.PersonasComputedTraitStatus = exports.PersonasCollection = exports.PersonasAudienceStatus = exports.OperationType = exports.MetadataType = exports.MetadataStatus = exports.IntegrationType = exports.IntegrationStatus = exports.InstrumentationTagTaggingMethod = exports.InstrumentationTagFormAction = exports.InferTrackingPlanType = exports.HandlerValues = exports.FunctionType = exports.FunctionSettingType = exports.EventType = exports.EventPropertyMode = exports.DevCenterCustomerErrorCode = exports.DevCenterAccessApplicationStatus = exports.DestinationType = exports.DestinationsSortOrder = exports.DeleteMeErrorTypes = exports.DataType = exports.ComponentOwner = exports.CommonJsonSchemaSetting = exports.BindingType = exports.BigqueryWarehouseLocation = exports.BetaTransformationActionType = exports.AppComponentType = void 0;
/**
 * An AppComponentType enumerates the possible types of app components.
 * Note that the enumerated values are lower-cased to match the gRPC schema
 * in connections-service.
 */
var AppComponentType;
(function (AppComponentType) {
    AppComponentType["Subscription"] = "subscription";
    AppComponentType["WebPlugin"] = "web_plugin";
})(AppComponentType = exports.AppComponentType || (exports.AppComponentType = {}));
var BetaTransformationActionType;
(function (BetaTransformationActionType) {
    BetaTransformationActionType["BlacklistFields"] = "BLACKLIST_FIELDS";
    BetaTransformationActionType["Block"] = "BLOCK";
    BetaTransformationActionType["DropEvent"] = "DROP_EVENT";
    BetaTransformationActionType["EventRename"] = "EVENT_RENAME";
    BetaTransformationActionType["Hash"] = "HASH";
    BetaTransformationActionType["OnlySend"] = "ONLY_SEND";
    BetaTransformationActionType["PropertyRename"] = "PROPERTY_RENAME";
    BetaTransformationActionType["SampleEvent"] = "SAMPLE_EVENT";
    BetaTransformationActionType["WhitelistFields"] = "WHITELIST_FIELDS";
})(BetaTransformationActionType = exports.BetaTransformationActionType || (exports.BetaTransformationActionType = {}));
/** BigqueryWarehouseLocation are the supported BigQuery regions for warehouses. */
var BigqueryWarehouseLocation;
(function (BigqueryWarehouseLocation) {
    BigqueryWarehouseLocation["Eu"] = "EU";
    BigqueryWarehouseLocation["Us"] = "US";
})(BigqueryWarehouseLocation = exports.BigqueryWarehouseLocation || (exports.BigqueryWarehouseLocation = {}));
var BindingType;
(function (BindingType) {
    BindingType["Selector"] = "selector";
    BindingType["Static"] = "static";
})(BindingType = exports.BindingType || (exports.BindingType = {}));
var CommonJsonSchemaSetting;
(function (CommonJsonSchemaSetting) {
    CommonJsonSchemaSetting["Allow"] = "ALLOW";
    CommonJsonSchemaSetting["Block"] = "BLOCK";
    CommonJsonSchemaSetting["Omit"] = "OMIT";
})(CommonJsonSchemaSetting = exports.CommonJsonSchemaSetting || (exports.CommonJsonSchemaSetting = {}));
/** The owner of the metadata component */
var ComponentOwner;
(function (ComponentOwner) {
    /** A partner is the primary maintainer */
    ComponentOwner["Partner"] = "PARTNER";
    /** Segment is the primary maintainer */
    ComponentOwner["Segment"] = "SEGMENT";
})(ComponentOwner = exports.ComponentOwner || (exports.ComponentOwner = {}));
var DataType;
(function (DataType) {
    DataType["Events"] = "EVENTS";
    DataType["Objects"] = "OBJECTS";
})(DataType = exports.DataType || (exports.DataType = {}));
var DeleteMeErrorTypes;
(function (DeleteMeErrorTypes) {
    DeleteMeErrorTypes["PasswordIncorrect"] = "PASSWORD_INCORRECT";
})(DeleteMeErrorTypes = exports.DeleteMeErrorTypes || (exports.DeleteMeErrorTypes = {}));
var DestinationsSortOrder;
(function (DestinationsSortOrder) {
    DestinationsSortOrder["Ascending"] = "ASCENDING";
    DestinationsSortOrder["Descending"] = "DESCENDING";
})(DestinationsSortOrder = exports.DestinationsSortOrder || (exports.DestinationsSortOrder = {}));
var DestinationType;
(function (DestinationType) {
    DestinationType["CustomcodeDestination"] = "customcode_destination";
    DestinationType["DirectLambdaDestination"] = "direct_lambda_destination";
    DestinationType["DirectV2Destination"] = "direct_v2_destination";
})(DestinationType = exports.DestinationType || (exports.DestinationType = {}));
var DevCenterAccessApplicationStatus;
(function (DevCenterAccessApplicationStatus) {
    DevCenterAccessApplicationStatus["Approved"] = "APPROVED";
    DevCenterAccessApplicationStatus["Submitted"] = "SUBMITTED";
    DevCenterAccessApplicationStatus["Unauthorized"] = "UNAUTHORIZED";
})(DevCenterAccessApplicationStatus = exports.DevCenterAccessApplicationStatus || (exports.DevCenterAccessApplicationStatus = {}));
var DevCenterCustomerErrorCode;
(function (DevCenterCustomerErrorCode) {
    DevCenterCustomerErrorCode["AlreadyExists"] = "ALREADY_EXISTS";
    DevCenterCustomerErrorCode["InvalidArgument"] = "INVALID_ARGUMENT";
    DevCenterCustomerErrorCode["NotFound"] = "NOT_FOUND";
    DevCenterCustomerErrorCode["PermissionDenied"] = "PERMISSION_DENIED";
})(DevCenterCustomerErrorCode = exports.DevCenterCustomerErrorCode || (exports.DevCenterCustomerErrorCode = {}));
/** Represents the EventSchemaSettings `newEventPropertyMode`. */
var EventPropertyMode;
(function (EventPropertyMode) {
    EventPropertyMode["Forbidden"] = "FORBIDDEN";
    EventPropertyMode["Optional"] = "OPTIONAL";
    EventPropertyMode["Required"] = "REQUIRED";
})(EventPropertyMode = exports.EventPropertyMode || (exports.EventPropertyMode = {}));
var EventType;
(function (EventType) {
    EventType["Alias"] = "ALIAS";
    EventType["Group"] = "GROUP";
    EventType["Identify"] = "IDENTIFY";
    EventType["Page"] = "PAGE";
    EventType["Screen"] = "SCREEN";
    EventType["Track"] = "TRACK";
})(EventType = exports.EventType || (exports.EventType = {}));
var FunctionSettingType;
(function (FunctionSettingType) {
    FunctionSettingType["Array"] = "ARRAY";
    FunctionSettingType["Boolean"] = "BOOLEAN";
    FunctionSettingType["Map"] = "MAP";
    FunctionSettingType["String"] = "STRING";
})(FunctionSettingType = exports.FunctionSettingType || (exports.FunctionSettingType = {}));
var FunctionType;
(function (FunctionType) {
    FunctionType["Destination"] = "DESTINATION";
    FunctionType["Source"] = "SOURCE";
})(FunctionType = exports.FunctionType || (exports.FunctionType = {}));
var HandlerValues;
(function (HandlerValues) {
    HandlerValues["Blur"] = "blur";
    HandlerValues["Click"] = "click";
    HandlerValues["Focus"] = "focus";
    HandlerValues["Mouseover"] = "mouseover";
    HandlerValues["Scroll"] = "scroll";
    HandlerValues["Submit"] = "submit";
})(HandlerValues = exports.HandlerValues || (exports.HandlerValues = {}));
/** Represents the status of a Tracking Plan rule. */
var InferTrackingPlanType;
(function (InferTrackingPlanType) {
    InferTrackingPlanType["Group"] = "GROUP";
    InferTrackingPlanType["Identify"] = "IDENTIFY";
    InferTrackingPlanType["Page"] = "PAGE";
    InferTrackingPlanType["Screen"] = "SCREEN";
    InferTrackingPlanType["Track"] = "TRACK";
})(InferTrackingPlanType = exports.InferTrackingPlanType || (exports.InferTrackingPlanType = {}));
var InstrumentationTagFormAction;
(function (InstrumentationTagFormAction) {
    InstrumentationTagFormAction["Identify"] = "identify";
    InstrumentationTagFormAction["Track"] = "track";
})(InstrumentationTagFormAction = exports.InstrumentationTagFormAction || (exports.InstrumentationTagFormAction = {}));
var InstrumentationTagTaggingMethod;
(function (InstrumentationTagTaggingMethod) {
    InstrumentationTagTaggingMethod["Event"] = "event";
    InstrumentationTagTaggingMethod["Form"] = "form";
})(InstrumentationTagTaggingMethod = exports.InstrumentationTagTaggingMethod || (exports.InstrumentationTagTaggingMethod = {}));
var IntegrationStatus;
(function (IntegrationStatus) {
    IntegrationStatus["Disabled"] = "DISABLED";
    IntegrationStatus["Enabled"] = "ENABLED";
})(IntegrationStatus = exports.IntegrationStatus || (exports.IntegrationStatus = {}));
var IntegrationType;
(function (IntegrationType) {
    /** Audience-only destination */
    IntegrationType["AudienceDestination"] = "AUDIENCE_DESTINATION";
    /** CustomCode destination */
    IntegrationType["CustomcodeDestination"] = "CUSTOMCODE_DESTINATION";
    /** Direct lambda destination */
    IntegrationType["DirectLambdaDestination"] = "DIRECT_LAMBDA_DESTINATION";
    /** Old-school direct destinations */
    IntegrationType["DirectV1Destination"] = "DIRECT_V1_DESTINATION";
    /** "modern" direct destinations created via the developer center */
    IntegrationType["DirectV2Destination"] = "DIRECT_V2_DESTINATION";
    /** "Regular" destination */
    IntegrationType["EventDestination"] = "EVENT_DESTINATION";
    /** Personas client-side destinations, see https://paper.dropbox.com/doc/Personas-Client-Side-PRD-8prOMLfGgM7ODWSbminfY */
    IntegrationType["PersonasClientSideDestination"] = "PERSONAS_CLIENT_SIDE_DESTINATION";
    /** Computed trait-only destination */
    IntegrationType["PersonasTraitDestination"] = "PERSONAS_TRAIT_DESTINATION";
})(IntegrationType = exports.IntegrationType || (exports.IntegrationType = {}));
/** The status of the metadata */
var MetadataStatus;
(function (MetadataStatus) {
    /** available to customers already using it, unavailable to all other customers */
    MetadataStatus["Deprecated"] = "DEPRECATED";
    /** available to select customers, in beta */
    MetadataStatus["PrivateBeta"] = "PRIVATE_BETA";
    /** partner is currently building this integration */
    MetadataStatus["PrivateBuilding"] = "PRIVATE_BUILDING";
    /** partner has submitted this integration */
    MetadataStatus["PrivateSubmitted"] = "PRIVATE_SUBMITTED";
    /** available to all customers */
    MetadataStatus["Public"] = "PUBLIC";
    /** available to all customers, in beta */
    MetadataStatus["PublicBeta"] = "PUBLIC_BETA";
    /** unavailable to any customers, including customers who previously used it */
    MetadataStatus["Unavailable"] = "UNAVAILABLE";
})(MetadataStatus = exports.MetadataStatus || (exports.MetadataStatus = {}));
/** The allowable metadata types */
var MetadataType;
(function (MetadataType) {
    /** Represents a BiToolMetadata */
    MetadataType["Bitool"] = "BITOOL";
    /** Represents an IntegrationMetadata */
    MetadataType["Integration"] = "INTEGRATION";
    /** Represents a Plugin */
    MetadataType["Plugin"] = "PLUGIN";
    /**
   * Represents a SourceMetadata
     * Represents a Plugin
   */
    MetadataType["Plugins"] = "PLUGINS";
    MetadataType["Source"] = "SOURCE";
    /** Represents a WarehouseMetadata */
    MetadataType["Warehouse"] = "WAREHOUSE";
})(MetadataType = exports.MetadataType || (exports.MetadataType = {}));
var OperationType;
(function (OperationType) {
    OperationType["JsonSchemaUpdated"] = "JSON_SCHEMA_UPDATED";
    OperationType["OperationUnknown"] = "OPERATION_UNKNOWN";
    OperationType["PropertyAdded"] = "PROPERTY_ADDED";
    OperationType["PropertyConditionalUpdated"] = "PROPERTY_CONDITIONAL_UPDATED";
    OperationType["PropertyDeleted"] = "PROPERTY_DELETED";
    OperationType["PropertyDescriptionUpdated"] = "PROPERTY_DESCRIPTION_UPDATED";
    OperationType["PropertyNameUpdated"] = "PROPERTY_NAME_UPDATED";
    OperationType["PropertyStatusUpdated"] = "PROPERTY_STATUS_UPDATED";
    OperationType["PropertyTypeUpdated"] = "PROPERTY_TYPE_UPDATED";
    OperationType["RuleAdded"] = "RULE_ADDED";
    OperationType["RuleDeleted"] = "RULE_DELETED";
    OperationType["RuleDescriptionUpdated"] = "RULE_DESCRIPTION_UPDATED";
    OperationType["RuleLabelUpdated"] = "RULE_LABEL_UPDATED";
    OperationType["RuleTitleUpdated"] = "RULE_TITLE_UPDATED";
})(OperationType = exports.OperationType || (exports.OperationType = {}));
var PersonasAudienceStatus;
(function (PersonasAudienceStatus) {
    /** Audience is disabled */
    PersonasAudienceStatus["Disabled"] = "DISABLED";
    /** Last run has failed */
    PersonasAudienceStatus["Failed"] = "FAILED";
    /** Computation is running right now */
    PersonasAudienceStatus["InProgress"] = "IN_PROGRESS";
    /**
   * Audience isn't being computed, because there are no destinations connected
     * to it and "Compute without destinations" (forceCompute) is disabled
   */
    PersonasAudienceStatus["NotComputed"] = "NOT_COMPUTED";
    /** Last run has succeeded */
    PersonasAudienceStatus["Succeeded"] = "SUCCEEDED";
})(PersonasAudienceStatus = exports.PersonasAudienceStatus || (exports.PersonasAudienceStatus = {}));
var PersonasCollection;
(function (PersonasCollection) {
    PersonasCollection["Accounts"] = "ACCOUNTS";
    PersonasCollection["Users"] = "USERS";
})(PersonasCollection = exports.PersonasCollection || (exports.PersonasCollection = {}));
var PersonasComputedTraitStatus;
(function (PersonasComputedTraitStatus) {
    /** Trait is disabled */
    PersonasComputedTraitStatus["Disabled"] = "DISABLED";
    /** Last run has failed */
    PersonasComputedTraitStatus["Failed"] = "FAILED";
    /** Computation is running right now */
    PersonasComputedTraitStatus["InProgress"] = "IN_PROGRESS";
    /**
   * Trait isn't being computed, because there are no destinations connected
     * to it and "Compute without destinations" (forceCompute) is disabled
   */
    PersonasComputedTraitStatus["NotComputed"] = "NOT_COMPUTED";
    /** Last run has succeeded */
    PersonasComputedTraitStatus["Succeeded"] = "SUCCEEDED";
})(PersonasComputedTraitStatus = exports.PersonasComputedTraitStatus || (exports.PersonasComputedTraitStatus = {}));
var PersonasComputeScheduleIntervalUnit;
(function (PersonasComputeScheduleIntervalUnit) {
    PersonasComputeScheduleIntervalUnit["Days"] = "DAYS";
    PersonasComputeScheduleIntervalUnit["Hours"] = "HOURS";
})(PersonasComputeScheduleIntervalUnit = exports.PersonasComputeScheduleIntervalUnit || (exports.PersonasComputeScheduleIntervalUnit = {}));
var PersonasDestinationSyncAttemptErrorType;
(function (PersonasDestinationSyncAttemptErrorType) {
    /** Destination isn't correctly configured, misses some credentials */
    PersonasDestinationSyncAttemptErrorType["Configuration"] = "CONFIGURATION";
    /** Error occurred on the destination (e.g. Personas FB Ads) */
    PersonasDestinationSyncAttemptErrorType["External"] = "EXTERNAL";
    /** Error within Personas services */
    PersonasDestinationSyncAttemptErrorType["Internal"] = "INTERNAL";
})(PersonasDestinationSyncAttemptErrorType = exports.PersonasDestinationSyncAttemptErrorType || (exports.PersonasDestinationSyncAttemptErrorType = {}));
var PersonasDestinationType;
(function (PersonasDestinationType) {
    PersonasDestinationType["Destination"] = "DESTINATION";
    PersonasDestinationType["Warehouse"] = "WAREHOUSE";
})(PersonasDestinationType = exports.PersonasDestinationType || (exports.PersonasDestinationType = {}));
/**
 * PersonasIdentityResolutionIDBlockingRuleMethod is a particular strategy for
 * matching identifier types with sets of blocked values.
 */
var PersonasIdentityResolutionIdBlockingRuleMethod;
(function (PersonasIdentityResolutionIdBlockingRuleMethod) {
    /** An exact string match. */
    PersonasIdentityResolutionIdBlockingRuleMethod["Match"] = "MATCH";
    /**
   * @deprecated in favor of REGEXP
     *
     * A match against a regular expression. Under the hood, this will use the
     * Golang regular expression syntax.
   */
    PersonasIdentityResolutionIdBlockingRuleMethod["Regex"] = "REGEX";
    /**
   * A match against a regular expression. Under the hood, this will use the
     * Golang regular expression syntax.
   */
    PersonasIdentityResolutionIdBlockingRuleMethod["Regexp"] = "REGEXP";
})(PersonasIdentityResolutionIdBlockingRuleMethod = exports.PersonasIdentityResolutionIdBlockingRuleMethod || (exports.PersonasIdentityResolutionIdBlockingRuleMethod = {}));
var PersonasPlan;
(function (PersonasPlan) {
    PersonasPlan["Advanced"] = "ADVANCED";
    PersonasPlan["Disabled"] = "DISABLED";
    PersonasPlan["Essential"] = "ESSENTIAL";
})(PersonasPlan = exports.PersonasPlan || (exports.PersonasPlan = {}));
var PersonasTraitType;
(function (PersonasTraitType) {
    /** Trait, which value is populated by an audience */
    PersonasTraitType["AudienceTrait"] = "AUDIENCE_TRAIT";
    /** Trait defined by a user via "Traits" in Personas */
    PersonasTraitType["ComputedTrait"] = "COMPUTED_TRAIT";
    /** Custom trait sent via API */
    PersonasTraitType["CustomTrait"] = "CUSTOM_TRAIT";
    PersonasTraitType["SqlTrait"] = "SQL_TRAIT";
})(PersonasTraitType = exports.PersonasTraitType || (exports.PersonasTraitType = {}));
var ProfileTraitType;
(function (ProfileTraitType) {
    ProfileTraitType["AudienceTrait"] = "AUDIENCE_TRAIT";
    ProfileTraitType["ComputedTrait"] = "COMPUTED_TRAIT";
    ProfileTraitType["CustomTrait"] = "CUSTOM_TRAIT";
    ProfileTraitType["SqlTrait"] = "SQL_TRAIT";
})(ProfileTraitType = exports.ProfileTraitType || (exports.ProfileTraitType = {}));
/** Represents the type of a property schema. */
var PropertySchemaType;
(function (PropertySchemaType) {
    /** parent -> CollectionSchema */
    PropertySchemaType["ContextProperty"] = "CONTEXT_PROPERTY";
    /** parent -> EventSchema */
    PropertySchemaType["EventProperty"] = "EVENT_PROPERTY";
    /** parent -> CollectionSchema */
    PropertySchemaType["ObjectProperty"] = "OBJECT_PROPERTY";
})(PropertySchemaType = exports.PropertySchemaType || (exports.PropertySchemaType = {}));
/** Represents the PropertyValueSnapshot `type`. */
var PropertyValueSnapshotType;
(function (PropertyValueSnapshotType) {
    PropertyValueSnapshotType["Number"] = "NUMBER";
    PropertyValueSnapshotType["String"] = "STRING";
    PropertyValueSnapshotType["Unknown"] = "UNKNOWN";
})(PropertyValueSnapshotType = exports.PropertyValueSnapshotType || (exports.PropertyValueSnapshotType = {}));
var RegulationStatus;
(function (RegulationStatus) {
    RegulationStatus["Failed"] = "FAILED";
    RegulationStatus["Finished"] = "FINISHED";
    RegulationStatus["Forwarded"] = "FORWARDED";
    RegulationStatus["Initialized"] = "INITIALIZED";
    RegulationStatus["Invalid"] = "INVALID";
    RegulationStatus["NotSupported"] = "NOT_SUPPORTED";
    RegulationStatus["PartialSuccess"] = "PARTIAL_SUCCESS";
    RegulationStatus["Running"] = "RUNNING";
})(RegulationStatus = exports.RegulationStatus || (exports.RegulationStatus = {}));
var RegulationType;
(function (RegulationType) {
    RegulationType["Suppress"] = "SUPPRESS";
    RegulationType["SuppressAndDelete"] = "SUPPRESS_AND_DELETE";
    RegulationType["Unsuppress"] = "UNSUPPRESS";
})(RegulationType = exports.RegulationType || (exports.RegulationType = {}));
/** Represents the type of a resource. */
var ResourceType;
(function (ResourceType) {
    ResourceType["Integration"] = "INTEGRATION";
    ResourceType["Namespace"] = "NAMESPACE";
    ResourceType["Source"] = "SOURCE";
    ResourceType["TrackingPlan"] = "TRACKING_PLAN";
    ResourceType["Warehouse"] = "WAREHOUSE";
    ResourceType["Workspace"] = "WORKSPACE";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
var SegmentEventType;
(function (SegmentEventType) {
    SegmentEventType["Alias"] = "ALIAS";
    SegmentEventType["Group"] = "GROUP";
    SegmentEventType["Identify"] = "IDENTIFY";
    SegmentEventType["Page"] = "PAGE";
    SegmentEventType["Screen"] = "SCREEN";
    SegmentEventType["Track"] = "TRACK";
})(SegmentEventType = exports.SegmentEventType || (exports.SegmentEventType = {}));
var SegmentIdentifierType;
(function (SegmentIdentifierType) {
    SegmentIdentifierType["AnonymousId"] = "ANONYMOUS_ID";
    SegmentIdentifierType["GroupId"] = "GROUP_ID";
    SegmentIdentifierType["UserId"] = "USER_ID";
})(SegmentIdentifierType = exports.SegmentIdentifierType || (exports.SegmentIdentifierType = {}));
var SourceFunctionStatus;
(function (SourceFunctionStatus) {
    SourceFunctionStatus["Deployed"] = "DEPLOYED";
    SourceFunctionStatus["NoFunction"] = "NO_FUNCTION";
})(SourceFunctionStatus = exports.SourceFunctionStatus || (exports.SourceFunctionStatus = {}));
var SourcesSortOrder;
(function (SourcesSortOrder) {
    SourcesSortOrder["Ascending"] = "ASCENDING";
    SourcesSortOrder["Descending"] = "DESCENDING";
})(SourcesSortOrder = exports.SourcesSortOrder || (exports.SourcesSortOrder = {}));
var SourcesSortStatus;
(function (SourcesSortStatus) {
    SourcesSortStatus["EnabledFirst"] = "ENABLED_FIRST";
})(SourcesSortStatus = exports.SourcesSortStatus || (exports.SourcesSortStatus = {}));
var SourceStatus;
(function (SourceStatus) {
    SourceStatus["Disabled"] = "DISABLED";
    SourceStatus["Enabled"] = "ENABLED";
    SourceStatus["NoRecentData"] = "NO_RECENT_DATA";
})(SourceStatus = exports.SourceStatus || (exports.SourceStatus = {}));
var SpaceIdentityResolutionConfigIdBlockingMethods;
(function (SpaceIdentityResolutionConfigIdBlockingMethods) {
    SpaceIdentityResolutionConfigIdBlockingMethods["Match"] = "MATCH";
    SpaceIdentityResolutionConfigIdBlockingMethods["Regex"] = "REGEX";
    SpaceIdentityResolutionConfigIdBlockingMethods["Regexp"] = "REGEXP";
})(SpaceIdentityResolutionConfigIdBlockingMethods = exports.SpaceIdentityResolutionConfigIdBlockingMethods || (exports.SpaceIdentityResolutionConfigIdBlockingMethods = {}));
var StateValues;
(function (StateValues) {
    StateValues["Draft"] = "draft";
    StateValues["Published"] = "published";
})(StateValues = exports.StateValues || (exports.StateValues = {}));
var StreamType;
(function (StreamType) {
    StreamType["Namespace"] = "NAMESPACE";
    StreamType["Source"] = "SOURCE";
})(StreamType = exports.StreamType || (exports.StreamType = {}));
/** The types of subscription settings currently supported */
var SubscriptionSettingType;
(function (SubscriptionSettingType) {
    /** Email-based notifications */
    SubscriptionSettingType["Email"] = "email";
    /** In-app (web) based notifications */
    SubscriptionSettingType["Web"] = "web";
})(SubscriptionSettingType = exports.SubscriptionSettingType || (exports.SubscriptionSettingType = {}));
/** Represents the status of a Tracking Plan rule. */
var TrackingPlanRuleStatus;
(function (TrackingPlanRuleStatus) {
    TrackingPlanRuleStatus["Active"] = "ACTIVE";
    TrackingPlanRuleStatus["Deprecated"] = "DEPRECATED";
    TrackingPlanRuleStatus["Pending"] = "PENDING";
})(TrackingPlanRuleStatus = exports.TrackingPlanRuleStatus || (exports.TrackingPlanRuleStatus = {}));
/** Represents the type of a Tracking Plan rule. */
var TrackingPlanRuleType;
(function (TrackingPlanRuleType) {
    TrackingPlanRuleType["Common"] = "COMMON";
    TrackingPlanRuleType["Group"] = "GROUP";
    TrackingPlanRuleType["Identify"] = "IDENTIFY";
    TrackingPlanRuleType["Page"] = "PAGE";
    TrackingPlanRuleType["Screen"] = "SCREEN";
    TrackingPlanRuleType["Track"] = "TRACK";
})(TrackingPlanRuleType = exports.TrackingPlanRuleType || (exports.TrackingPlanRuleType = {}));
var TrackingPlanType;
(function (TrackingPlanType) {
    TrackingPlanType["Live"] = "LIVE";
    TrackingPlanType["PropertyLibrary"] = "PROPERTY_LIBRARY";
    TrackingPlanType["RuleLibrary"] = "RULE_LIBRARY";
})(TrackingPlanType = exports.TrackingPlanType || (exports.TrackingPlanType = {}));
var TransformationEventType;
(function (TransformationEventType) {
    TransformationEventType["Alias"] = "ALIAS";
    TransformationEventType["All"] = "ALL";
    TransformationEventType["Group"] = "GROUP";
    TransformationEventType["Identify"] = "IDENTIFY";
    TransformationEventType["Multiple"] = "MULTIPLE";
    TransformationEventType["Page"] = "PAGE";
    TransformationEventType["Screen"] = "SCREEN";
    TransformationEventType["Track"] = "TRACK";
    /** Destination Filters can have custom event types */
    TransformationEventType["Undefined"] = "UNDEFINED";
})(TransformationEventType = exports.TransformationEventType || (exports.TransformationEventType = {}));
var UpdateUserProfileErrorTypes;
(function (UpdateUserProfileErrorTypes) {
    UpdateUserProfileErrorTypes["EmailInUse"] = "EMAIL_IN_USE";
    UpdateUserProfileErrorTypes["PasswordIncorrect"] = "PASSWORD_INCORRECT";
})(UpdateUserProfileErrorTypes = exports.UpdateUserProfileErrorTypes || (exports.UpdateUserProfileErrorTypes = {}));
/** Represents the status of a Tracking Plan rule. */
var UpsertRuleInputStatus;
(function (UpsertRuleInputStatus) {
    UpsertRuleInputStatus["Active"] = "ACTIVE";
    UpsertRuleInputStatus["Deprecated"] = "DEPRECATED";
    UpsertRuleInputStatus["Pending"] = "PENDING";
})(UpsertRuleInputStatus = exports.UpsertRuleInputStatus || (exports.UpsertRuleInputStatus = {}));
/** The verification method to use when verifying a domain */
var VerificationMethod;
(function (VerificationMethod) {
    /** Verify by adding a TXT record to the DNS configuration */
    VerificationMethod["Dns"] = "DNS";
    /** Verify by adding a meta tag to the HTML */
    VerificationMethod["Meta"] = "META";
})(VerificationMethod = exports.VerificationMethod || (exports.VerificationMethod = {}));
var WarehouseStatus;
(function (WarehouseStatus) {
    WarehouseStatus["Disabled"] = "DISABLED";
    WarehouseStatus["Enabled"] = "ENABLED";
})(WarehouseStatus = exports.WarehouseStatus || (exports.WarehouseStatus = {}));
var WishlistIntegrationType;
(function (WishlistIntegrationType) {
    WishlistIntegrationType["Destination"] = "DESTINATION";
    WishlistIntegrationType["Source"] = "SOURCE";
})(WishlistIntegrationType = exports.WishlistIntegrationType || (exports.WishlistIntegrationType = {}));
//# sourceMappingURL=schema.js.map