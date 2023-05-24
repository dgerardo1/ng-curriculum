export interface SitesResponse {
    id:                                 string;
    site_id:                            string;
    plan:                               Plan;
    ssl_plan:                           null;
    premium:                            boolean;
    claimed:                            boolean;
    name:                               string;
    custom_domain:                      null;
    branch_deploy_custom_domain:        null;
    deploy_preview_custom_domain:       null;
    domain_aliases:                     any[];
    password:                           null;
    password_hash:                      null;
    sso_login:                          boolean;
    sso_login_context:                  Context;
    notification_email:                 null;
    url:                                string;
    admin_url:                          string;
    deploy_id:                          string;
    build_id:                           string;
    deploy_url:                         string;
    state:                              SitesResponseState;
    screenshot_url:                     string;
    created_at:                         Date;
    updated_at:                         Date;
    user_id:                            UserID;
    error_message:                      null;
    ssl:                                boolean;
    ssl_url:                            string;
    force_ssl:                          null;
    ssl_status:                         null;
    max_domain_aliases:                 number;
    build_settings:                     BuildSettings;
    processing_settings:                ProcessingSettings;
    prerender:                          null;
    prerender_headers:                  null;
    deploy_hook:                        null | string;
    published_deploy:                   PublishedDeploy;
    managed_dns:                        boolean;
    jwt_secret:                         null;
    jwt_roles_path:                     JwtRolesPath;
    account_slug:                       AccountSlug;
    account_name:                       AccountName;
    account_type:                       AccountType;
    capabilities:                       Capabilities;
    dns_zone_id:                        null;
    identity_instance_id:               null;
    use_functions:                      null;
    use_edge_handlers:                  null;
    parent_user_id:                     null;
    automatic_tls_provisioning:         null;
    disabled:                           null;
    lifecycle_state:                    LifecycleState;
    id_domain:                          string;
    use_lm:                             null;
    build_image:                        BuildImage;
    automatic_tls_provisioning_expired: boolean;
    analytics_instance_id:              null;
    functions_region:                   null;
    functions_config:                   FunctionsConfig;
    plugins:                            any[];
    account_subdomain:                  null;
    functions_env:                      Env;
    cdp_enabled_contexts:               CDPEnabledContext[];
    deploy_retention_in_days:           number;
    build_timelimit:                    null;
    use_custom_domain_in_all_contexts:  boolean;
    uses_new_env_var:                   boolean;
    password_context:                   Context;
    use_envelope:                       boolean;
    default_domain:                     string;
}

export enum AccountName {
    Dgerardo1STeam = "dgerardo1's team",
}

export enum AccountSlug {
    Dgerardo1 = "dgerardo1",
}

export enum AccountType {
    Starter = "Starter",
}

export enum BuildImage {
    Focal = "focal",
}

export interface BuildSettings {
    cmd?:                   null | string;
    dir?:                   null | string;
    env?:                   Env;
    created_at?:            Date;
    updated_at?:            Date;
    private_logs?:          null;
    allowed_branches?:      Branch[];
    functions_dir?:         null;
    installation_id?:       number;
    skip_prs?:              null;
    untrusted_flow?:        UntrustedFlow;
    base_rel_dir?:          boolean;
    stop_builds?:           boolean;
    public_repo?:           boolean;
    skip_automatic_builds?: null;
    provider?:              Provider;
    repo_type?:             RepoType;
    repo_url?:              string;
    repo_branch?:           Branch;
    repo_path?:             string;
    repo_owner_type?:       RepoOwnerType;
    base?:                  null;
    deploy_key_id?:         null;
}

export enum Branch {
    Main = "main",
}

export interface Env {
}

export enum Provider {
    Github = "github",
}

export enum RepoOwnerType {
    User = "User",
}

export enum RepoType {
    Git = "git",
}

export enum UntrustedFlow {
    Review = "review",
}

export interface Capabilities {
    title:               Title;
    asset_acceleration:  boolean;
    form_processing:     boolean;
    cdn_propagation:     CDNPropagation;
    domain_aliases:      boolean;
    secure_site:         boolean;
    sso_secure_site:     boolean;
    secure_site_context: boolean;
    prerendering:        boolean;
    proxying:            boolean;
    ssl:                 SSL;
    rate_cents:          number;
    yearly_rate_cents:   number;
    ipv6_domain:         Ipv6Domain;
    branch_deploy:       boolean;
    managed_dns:         boolean;
    geo_ip:              boolean;
    split_testing:       boolean;
    id:                  Plan;
    cdn_tier:            CDNTier;
}

export enum CDNPropagation {
    Partial = "partial",
}

export enum CDNTier {
    Reg = "reg",
}

export enum Plan {
    NfTeamDev = "nf_team_dev",
}

export enum Ipv6Domain {
    CDNMakerloopCOM = "cdn.makerloop.com",
}

export enum SSL {
    Custom = "custom",
}

export enum Title {
    NetlifyTeamFree = "Netlify Team Free",
}

export enum CDPEnabledContext {
    DeployPreview = "deploy-preview",
}

export interface FunctionsConfig {
    site_created_at: Date;
}

export enum JwtRolesPath {
    AppMetadataAuthorizationRoles = "app_metadata.authorization.roles",
}

export enum LifecycleState {
    Active = "active",
}

export enum Context {
    All = "all",
}

export interface ProcessingSettings {
    css:               CSS;
    js:                CSS;
    images:            Images;
    html:              HTML;
    skip:              boolean;
    ignore_html_forms: boolean;
}

export interface CSS {
    bundle: boolean;
    minify: boolean;
}

export interface HTML {
    pretty_urls: boolean;
}

export interface Images {
    optimize: boolean;
}

export interface PublishedDeploy {
    id:                         string;
    site_id:                    string;
    build_id:                   null | string;
    state:                      PublishedDeployState;
    name:                       string;
    url:                        string;
    ssl_url:                    string;
    admin_url:                  string;
    deploy_url:                 string;
    deploy_ssl_url:             string;
    created_at:                 Date;
    updated_at:                 Date;
    user_id:                    UserID;
    error_message:              null;
    required:                   any[];
    required_functions:         any[];
    commit_ref:                 null | string;
    review_id:                  null;
    branch:                     Branch | null;
    commit_url:                 null | string;
    skipped:                    null;
    locked:                     null;
    log_access_attributes:      LogAccessAttributes;
    title:                      null | string;
    review_url:                 null;
    published_at:               Date;
    context:                    ContextEnum;
    deploy_time:                number;
    available_functions:        any[];
    screenshot_url:             string;
    site_capabilities:          Capabilities;
    committer:                  AccountSlug | null;
    skipped_log:                null;
    manual_deploy:              boolean;
    file_tracking_optimization: boolean;
    plugin_state:               PluginState;
    lighthouse_plugin_scores:   null;
    links:                      Links;
    framework:                  null | string;
    entry_path:                 null;
    views_count:                null;
    function_schedules:         any[];
    public_repo:                boolean | null;
    pending_review_reason:      null;
    lighthouse:                 null;
}

export enum ContextEnum {
    Production = "production",
}

export interface Links {
    permalink: string;
    alias:     string;
    branch:    null;
}

export interface LogAccessAttributes {
    type:     Type;
    url:      string;
    database: string;
    endpoint: string;
    path:     string;
    token:    string;
}

export enum Type {
    Firebase = "firebase",
}

export enum PluginState {
    None = "none",
}

export enum PublishedDeployState {
    Ready = "ready",
}

export enum UserID {
    The6088Acccfe87Ab1667E976A6 = "6088acccfe87ab1667e976a6",
}

export enum SitesResponseState {
    Current = "current",
}