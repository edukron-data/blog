/**
 * Topic metadata for Azure DevOps learning paths.
 */
const { GLOBAL_SLUG_HINTS } = require('../global-hints');

const azureDevOpsTopics = {
  'azure-fundamentals': {
    id: 'azure-fundamentals',
    meta: {
      domain: 'Microsoft Azure cloud fundamentals',
      stack: 'Azure Portal, Azure CLI, ARM, Bicep, RBAC, Azure Monitor',
      ecosystem: 'subscriptions, resource groups, and core PaaS/IaaS services',
      platform: 'Microsoft Azure',
    },
    slugHints: {
      iaas: { focus: 'cloud service model comparison', depth: 'IaaS/PaaS/SaaS selection', tools: ['Azure VMs', 'App Service', 'SaaS offerings'] },
      region: { focus: 'geography, zones, and resilience', depth: 'Azure regional architecture' },
      rbac: { focus: 'role-based access control', depth: 'Azure RBAC design', tools: ['Azure RBAC', 'Entra ID'] },
      bicep: { focus: 'declarative Azure deployments', depth: 'Bicep/IaC basics', tools: ['Bicep', 'ARM templates'] },
    },
    globalSlugHints: GLOBAL_SLUG_HINTS,
    index: {
      intro: `<p>The <strong>Azure Fundamentals</strong> track moves from cloud concepts through subscriptions, core services, identity, cost, monitoring, ARM/Bicep, and certification guidance (AZ-900/AZ-104 roadmap).</p>`,
      phases: [
        { title: 'Phase 1: Cloud Basics (Steps 1–7)', description: 'Cloud models, regions, subscriptions, resource groups, portal, CLI, PowerShell.' },
        { title: 'Phase 2: Core Services (Steps 8–14)', description: 'Compute, storage, networking, identity, RBAC, cost, monitoring.' },
        { title: 'Phase 3: Architecture & Career (Steps 15–20)', description: 'Well-Architected Framework, ARM, Bicep, marketplace, certifications.' },
      ],
      prerequisites: ['General IT literacy', 'Free Azure account for hands-on labs'],
      outcomes: ['Navigate Azure Portal and CLI confidently', 'Explain core compute/storage/network services', 'Apply RBAC and cost management basics', 'Prepare for AZ-900-level certification'],
    },
  },

  'azure-repos': {
    id: 'azure-repos',
    meta: {
      domain: 'Azure Repos and Git workflows',
      stack: 'Git, Azure DevOps Repos, branch policies, PR workflows, service hooks',
      ecosystem: 'enterprise source control and code review',
      platform: 'Azure DevOps Services',
    },
    slugHints: {
      branch: { focus: 'branching models and trunk-based flow', depth: 'Git branching strategy' },
      'pull-request': { focus: 'collaborative code review', depth: 'PR workflow design' },
      policy: { focus: 'quality gates on main branches', depth: 'branch policy configuration' },
      merge: { focus: 'merge vs squash vs rebase', depth: 'merge strategy selection' },
    },
    globalSlugHints: GLOBAL_SLUG_HINTS,
    index: {
      intro: `<p><strong>Azure Repos</strong> covers Git fundamentals, PRs, branch policies, hooks, permissions, and a repos capstone with enforced quality gates.</p>`,
      phases: [
        { title: 'Phase 1: Git & Setup (Steps 1–4)', description: 'Git model, repo setup, branching, commits.' },
        { title: 'Phase 2: Collaboration (Steps 5–11)', description: 'PRs, reviews, policies, merges, conflicts, tags, hooks.' },
        { title: 'Phase 3: Enterprise Repos (Steps 12–15)', description: 'Permissions, forks, IDE integration, capstone.' },
      ],
      prerequisites: ['Command-line familiarity', 'Azure DevOps organization access'],
      outcomes: ['Implement trunk-based or GitFlow with Azure Repos', 'Configure branch policies and PR templates', 'Resolve merge conflicts and automate with hooks'],
    },
  },

  'azure-pipelines': {
    id: 'azure-pipelines',
    meta: {
      domain: 'Azure Pipelines CI/CD',
      stack: 'YAML pipelines, agents, stages, templates, artifacts, environments',
      ecosystem: 'build automation, testing gates, and multi-stage releases',
      platform: 'Azure DevOps Pipelines',
    },
    slugHints: {
      yaml: { focus: 'pipeline-as-code structure', depth: 'YAML pipeline architecture', tools: ['azure-pipelines.yml'] },
      trigger: { focus: 'CI and PR automation triggers', depth: 'trigger configuration' },
      template: { focus: 'reusable pipeline modules', depth: 'template composition' },
      artifact: { focus: 'build output promotion', depth: 'artifact management' },
      environment: { focus: 'deployment targets and approvals', depth: 'environment gates' },
    },
    globalSlugHints: GLOBAL_SLUG_HINTS,
    index: {
      intro: `<p><strong>Azure Pipelines</strong> moves from YAML anatomy through agents, artifacts, multi-stage deploys, security scanning, and a full CI/CD capstone.</p>`,
      phases: [
        { title: 'Phase 1: Pipeline Basics (Steps 1–8)', description: 'Overview, YAML, first pipeline, triggers, variables, templates, agents, pools.' },
        { title: 'Phase 2: Advanced Pipelines (Steps 9–16)', description: 'Artifacts, caching, multi-stage, deployment jobs, environments, connections, testing gates.' },
        { title: 'Phase 3: Enterprise CI/CD (Steps 17–21)', description: 'Security scanning, classic vs YAML, permissions, monitoring, patterns, capstone.' },
      ],
      prerequisites: ['Git basics', 'Azure DevOps project with pipeline permissions'],
      outcomes: ['Author multi-stage YAML pipelines', 'Configure environments and approval gates', 'Publish artifacts and integrate security scans', 'Build a complete CI/CD capstone pipeline'],
    },
  },

  'ci-cd': {
    id: 'ci-cd',
    meta: {
      domain: 'Continuous integration and delivery practices',
      stack: 'CI/CD principles, automated testing, deployment strategies, feature flags',
      ecosystem: 'DevOps culture and release engineering',
    },
    slugHints: {
      'blue-green': { focus: 'zero-downtime deployment swaps', depth: 'blue-green release strategy' },
      canary: { focus: 'gradual traffic shifting', depth: 'canary deployment patterns' },
      rollback: { focus: 'safe revert procedures', depth: 'rollback automation' },
    },
    globalSlugHints: GLOBAL_SLUG_HINTS,
    index: {
      intro: `<p>The <strong>CI/CD</strong> path covers principles, pipeline design, testing automation, deployment strategies (blue-green, canary), GitOps, and organizational maturity.</p>`,
      phases: [
        { title: 'Phase 1: CI/CD Foundations (Steps 1–7)', description: 'Definitions, CI/CD principles, pipeline design, branching, automated testing.' },
        { title: 'Phase 2: Delivery Patterns (Steps 8–14)', description: 'Artifact promotion, environments, strategies, feature flags, GitOps, DORA metrics.' },
        { title: 'Phase 3: Organizational CI/CD (Steps 15–20)', description: 'Security in pipeline, compliance, monorepo patterns, maturity models, capstone.' },
      ],
      prerequisites: ['Azure Pipelines or similar CI tool exposure helpful'],
      outcomes: ['Design CI/CD workflows for microservices', 'Choose deployment strategies for risk tolerance', 'Measure DORA metrics and improve release frequency'],
    },
  },

  docker: {
    id: 'docker',
    meta: {
      domain: 'Docker containerization',
      stack: 'Dockerfile, images, containers, volumes, networks, Docker Compose, ACR',
      ecosystem: 'portable application packaging for DevOps pipelines',
      platform: 'Docker Engine, Azure Container Registry',
    },
    slugHints: {
      dockerfile: { focus: 'image build instructions and layer caching', depth: 'Dockerfile best practices' },
      compose: { focus: 'multi-container local stacks', depth: 'Docker Compose orchestration' },
      volume: { focus: 'persistent container storage', depth: 'volume and bind mount patterns' },
    },
    globalSlugHints: GLOBAL_SLUG_HINTS,
    index: {
      intro: `<p><strong>Docker</strong> moves from containers vs VMs through Dockerfile, networking, Compose, security, and pushing to Azure Container Registry.</p>`,
      phases: [
        { title: 'Phase 1: Container Basics (Steps 1–6)', description: 'Concepts, install, images, Dockerfile, run, registry.' },
        { title: 'Phase 2: Intermediate Docker (Steps 7–13)', description: 'Layers, volumes, networking, Compose, multi-stage builds, .dockerignore.' },
        { title: 'Phase 3: Production Docker (Steps 14–18)', description: 'Security, scanning, ACR, CI integration, troubleshooting, capstone.' },
      ],
      prerequisites: ['Linux shell basics', 'Application you can containerize'],
      outcomes: ['Write efficient multi-stage Dockerfiles', 'Orchestrate local stacks with Compose', 'Push images to ACR and integrate with CI'],
    },
  },

  kubernetes: {
    id: 'kubernetes',
    meta: {
      domain: 'Kubernetes container orchestration',
      stack: 'kubectl, Pods, Deployments, Services, Ingress, ConfigMaps, Secrets',
      ecosystem: 'cloud-native workload scheduling and scaling',
      platform: 'Kubernetes, minikube, kind',
    },
    slugHints: {
      pod: { focus: 'smallest schedulable units', depth: 'Pod lifecycle and probes' },
      deployment: { focus: 'declarative replica management', depth: 'Deployment rollout strategy' },
      service: { focus: 'stable network endpoints', depth: 'Service types ClusterIP/LoadBalancer' },
      ingress: { focus: 'HTTP routing into cluster', depth: 'Ingress controller patterns' },
      configmap: { focus: 'non-secret configuration injection', depth: 'ConfigMap/Secret mounting' },
    },
    globalSlugHints: GLOBAL_SLUG_HINTS,
    index: {
      intro: `<p><strong>Kubernetes</strong> covers architecture, kubectl, workloads, networking, storage, Helm intro, security, and production patterns.</p>`,
      phases: [
        { title: 'Phase 1: K8s Foundations (Steps 1–7)', description: 'Architecture, kubectl, pods, replicas, deployments, services, namespaces.' },
        { title: 'Phase 2: Workload Design (Steps 8–15)', description: 'ConfigMaps, secrets, volumes, ingress, labels, probes, resources, scheduling.' },
        { title: 'Phase 3: Production K8s (Steps 16–21)', description: 'Helm, monitoring, security, troubleshooting, patterns, capstone manifest set.' },
      ],
      prerequisites: ['Docker fundamentals', 'YAML syntax'],
      outcomes: ['Deploy and troubleshoot Kubernetes workloads', 'Configure services, ingress, and config/secrets', 'Apply resource limits and health probes'],
    },
  },

  aks: {
    id: 'aks',
    meta: {
      domain: 'Azure Kubernetes Service',
      stack: 'AKS, Azure CNI, node pools, ACR integration, Azure Monitor for containers',
      ecosystem: 'managed Kubernetes on Azure',
      platform: 'Microsoft Azure Kubernetes Service',
    },
    slugHints: {
      'node-pool': { focus: 'worker node grouping and scaling', depth: 'AKS node pool design' },
      acr: { focus: 'private registry integration', depth: 'AKS-ACR attachment' },
      cni: { focus: 'Azure networking plugin choices', depth: 'Azure CNI vs kubenet' },
    },
    globalSlugHints: GLOBAL_SLUG_HINTS,
    index: {
      intro: `<p><strong>AKS</strong> covers cluster creation, node pools, networking, ACR, monitoring, upgrades, security, and production AKS patterns.</p>`,
      phases: [
        { title: 'Phase 1: AKS Setup (Steps 1–6)', description: 'AKS overview, cluster create, node pools, kubectl access, ACR integration.' },
        { title: 'Phase 2: AKS Operations (Steps 7–12)', description: 'Networking, ingress, monitoring, autoscaling, upgrades, identities.' },
        { title: 'Phase 3: Production AKS (Steps 13–16)', description: 'Security hardening, cost optimization, disaster recovery, capstone deployment.' },
      ],
      prerequisites: ['Kubernetes basics', 'Azure subscription with AKS permissions'],
      outcomes: ['Provision and operate AKS clusters', 'Integrate ACR and Azure Monitor', 'Implement autoscaling and safe upgrades'],
    },
  },

  terraform: {
    id: 'terraform',
    meta: {
      domain: 'Terraform infrastructure as code',
      stack: 'HCL, Terraform CLI, azurerm provider, remote state, modules',
      ecosystem: 'repeatable Azure infrastructure provisioning',
      platform: 'Terraform + Azure Resource Manager',
    },
    slugHints: {
      state: { focus: 'terraform state lifecycle', depth: 'remote state and locking', tools: ['azurerm backend', 'Terraform Cloud'] },
      module: { focus: 'reusable infrastructure components', depth: 'module composition patterns' },
      plan: { focus: 'preview infrastructure changes', depth: 'plan/apply workflow' },
    },
    globalSlugHints: GLOBAL_SLUG_HINTS,
    index: {
      intro: `<p><strong>Terraform</strong> moves from HCL syntax through Azure provider, state, modules, workspaces, CI integration, and IaC capstone.</p>`,
      phases: [
        { title: 'Phase 1: Terraform Basics (Steps 1–7)', description: 'IaC concepts, install, HCL, providers, resources, variables, outputs.' },
        { title: 'Phase 2: Terraform on Azure (Steps 8–14)', description: 'azurerm provider, state, modules, data sources, workspaces, import.' },
        { title: 'Phase 3: Production IaC (Steps 15–20)', description: 'CI/CD for Terraform, policy, testing, troubleshooting, patterns, capstone.' },
      ],
      prerequisites: ['Azure fundamentals', 'Basic JSON/YAML/HCL comfort'],
      outcomes: ['Provision Azure resources with Terraform', 'Manage remote state safely in teams', 'Structure modules for reuse across environments'],
    },
  },

  monitoring: {
    id: 'monitoring',
    meta: {
      domain: 'Azure monitoring and observability',
      stack: 'Azure Monitor, Log Analytics, Application Insights, KQL, alerts, dashboards',
      ecosystem: 'SRE visibility across apps and infrastructure',
      platform: 'Microsoft Azure Monitor',
    },
    slugHints: {
      kql: { focus: 'log query language for diagnostics', depth: 'KQL analytics', tools: ['Log Analytics', 'KQL'] },
      alert: { focus: 'signal-based incident notification', depth: 'alert rule design' },
      insight: { focus: 'APM for distributed applications', depth: 'Application Insights telemetry' },
    },
    globalSlugHints: GLOBAL_SLUG_HINTS,
    index: {
      intro: `<p><strong>Monitoring</strong> covers Azure Monitor, Log Analytics, KQL, Application Insights, alerts, dashboards, and SRE observability practices.</p>`,
      phases: [
        { title: 'Phase 1: Observability Basics (Steps 1–6)', description: 'Monitor overview, Log Analytics, KQL intro, metrics, Activity Log.' },
        { title: 'Phase 2: Application Monitoring (Steps 7–12)', description: 'App Insights, distributed tracing, custom metrics, alerts, action groups.' },
        { title: 'Phase 3: Operational Excellence (Steps 13–17)', description: 'Dashboards, workbooks, SRE practices, cost of monitoring, capstone alert suite.' },
      ],
      prerequisites: ['Azure fundamentals', 'Running application or pipeline to instrument'],
      outcomes: ['Query logs with KQL', 'Configure actionable alerts and dashboards', 'Instrument apps with Application Insights'],
    },
  },

  security: {
    id: 'security',
    meta: {
      domain: 'Azure security and DevSecOps',
      stack: 'Defender for Cloud, Key Vault, managed identity, NSGs, Zero Trust, pipeline security',
      ecosystem: 'secure cloud workloads and CI/CD supply chain',
      platform: 'Microsoft Azure security services',
    },
    slugHints: {
      keyvault: { focus: 'secrets, keys, and certificate management', depth: 'Key Vault integration', tools: ['Azure Key Vault'] },
      defender: { focus: 'cloud security posture management', depth: 'Defender for Cloud recommendations' },
      'managed-identity': { focus: 'passwordless Azure authentication', depth: 'managed identity patterns' },
    },
    globalSlugHints: GLOBAL_SLUG_HINTS,
    index: {
      intro: `<p><strong>Security</strong> covers Zero Trust, Key Vault, managed identity, network security, Defender, DevSecOps in pipelines, and compliance frameworks.</p>`,
      phases: [
        { title: 'Phase 1: Security Foundations (Steps 1–6)', description: 'Shared responsibility, Zero Trust, identity, RBAC deep dive, Key Vault, managed identity.' },
        { title: 'Phase 2: Infrastructure Security (Steps 7–11)', description: 'NSGs, private endpoints, Defender, policy, secrets in pipelines.' },
        { title: 'Phase 3: DevSecOps & Compliance (Steps 12–16)', description: 'SAST/DAST, supply chain, compliance (SOC2/GDPR), incident response, capstone hardening.' },
      ],
      prerequisites: ['Azure fundamentals', 'Basic networking concepts'],
      outcomes: ['Implement least-privilege identity patterns', 'Secure secrets with Key Vault', 'Integrate security scanning into CI/CD'],
    },
  },
};

module.exports = { azureDevOpsTopics };
