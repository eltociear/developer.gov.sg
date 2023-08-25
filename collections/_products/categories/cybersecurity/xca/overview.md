---
title: Extended Code Analysis (XCA) – Detect Repeated Vulnerabilities from Security Testing in Code  
layout: layout-page-sidenav
category: Cybersecurity
_data: single-level-nav
redirect_from:
    - /products/categories/cybersecurity/xca/
    - /products/categories/cybersecurity/xca.html
sub_collection_render: true
collection_group: [What's New]
single_level_nav: true
description: Extended Code Analysis (XCA) is a custom code scanning SHIP-HATS 2.0 GitLab integration that detects repeated vulnerabilities in code.
---

![Extended Code Analysis (XCA) header banner](/assets/img/XCA-HeaderBanner-v2.png)

Extended Code Analysis (XCA) is an integrated tool in [SHIP-HATS](/products/categories/devops/ship-hats/overview.html){:target="_blank"} that helps developers  detect repeated source code vulnerabilities. 

Developed by GovTech’s [Cyber Security Group (CSG)](https://www.tech.gov.sg/cyber-security-group){:target="_blank"} , XCA is integrated and enabled for all SHIP-HATS 2.0 GitLab tenants. It helps to detect and prevent repeated vulnerabilities at scale through SHIP-HATS 2.0 GitLab repositories. Individual projects benefit from XCA scans with no additional configuration required.

XCA augments existing code scans such as GitLab SAST, Fortify Source Code Analyzer (SCA), and Snyk. XCA’s “secret sauce” are custom rules, based on insecure code patterns identified through vulnerabilities discovered by CSG’s security testing  and vulnerability disclosures. XCA custom rules are not available in default rulesets by other code scanning solutions.

XCA comprises the following components:
- XCA Rules: Custom rules written by CSG cybersecurity specialists as well as developers across government agencies
- XCA CI: A required pipeline configuration that incorporates XCA scanning jobs transparently into all SHIP-HATS 2.0 GitLab pipelines, which trigger XCA scans on all new merge requests

### How It Works 

Under the hood, Semgrep powers XCA, the same code-scanning engine used by GitLab SAST, but with custom rules. The XCA CI pipeline pulls an image pre-loaded with XCA Rules and invokes Semgrep: the scan output is formatted in GitLab’s SAST report schema which is seamlessly shown in GitLab’s built-in Vulnerability Report and Merge Request widgets.

XCA CI has been added as a required pipeline configuration in SHIP-HATS 2.0 GitLab in Feb 2023. New XCA rules are developed and incorporated into XCA as new security vulnerabilities, and vulnerable code patterns are identified.

### Key Benefits

- Detects and reduces repeated vulnerabilities in your applications’ code based on insecure code patterns identified from other government products
- Seamlessly integrated with GitLab
- All project code hosted on SHIP-HATS 2.0 GitLab is onboarded automatically to XCA

### Pricing

XCA is free for developers using SHIP-HATS.

### Contact Us

{% include contact-us-form.html %}

