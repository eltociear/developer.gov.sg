---
title: APEX Cloud - A Centralised Solution for Comprehensive Management of APIs 
layout: layout-page-sidenav
category: Data and APIs
_data: single-level-nav
redirect_from:
    - /singapore-government-tech-stack/communications/apex-cloud
    - /products/categories/data-and-apis/apex-cloud/
    - /products/categories/data-and-apis/apex-cloud.html
sub_collection_render: true
single_level_nav: true
collection_group: [Singapore Government Tech Stack, What's New]
sgts_collection_group: [communications]
sgts_layer_group: [services]
sgts_title: APEX Cloud
description: APEX Cloud allows comphrensive API management over the internet and intranet. Find out more here. 
---

![APEX Cloud header banner](/assets/img/apex-NewHeaderBanner.png)

APEX Cloud is a full-fledged API management solution that allows developers, product teams, agencies and, businesses to manage APIs across various stages – from registration to publication to retirement. It was born out of the need to reduce the complexity of managing multiple APIs. Compared to other API management solutions, APEX Cloud is accessible from both the intranet and the internet and is compliant with ICT&SS management guidelines (formerly known as IM8) as well as various governance standards. With more than 30 agencies onboarded, APEX Cloud has standardised government API sharing practices. 

The importance of effective API management is highlighted by the fact that APIs are critical for accessing information and functionalities across systems. Within the government, APIs are important for facilitating data exchange and enabling cross-collaboration and innovation. For businesses, they help to drive efficiency and digital services.  

Thus, through APEX Cloud, overheads for API management can be reduced, enabling users to focus on designing and developing solutions for their customers. 

Future features of APEX Cloud include API-as-Code and the API Marketplace.

### Key Benefits

Provides an Identity and Access Management (IAM) platform and access control of APIs for government-to-government (G2G) & government-to-business (G2B) API programmes. The ways that this is achieved are as shown below.
- Supports both TechPass (government users and vendors) and Corppass (for businesses) access
-	Established workflow to request and approve API subscriptions
-	API keys are securely distributed throughout APEX Cloud’s portals

Provides template dashboards and log management through the following features.
- The Elastic, Logstash and, Kibana (ELK) stack is offered through StackOps and this provides template dashboards for reporting. 
- The ELK stack also comes with a comprehensive search function to support tracing and debugging

Facilitates collaboration between agencies and encourages discovery of WOG API offerings.
- With over 30 agencies onboard APEX Cloud, users can experience a diversity of APIs and cross-sharing 

Security compliant with cross-zone support for internet and intranet environments
-	APEX Cloud is security-compliant and keeps up with policy changes and updates on a regular basis  
-	Integration of APEX Cloud with best practices and standards helps users keep up with the latest API and security best practices

Incorporation of industry standardisation and best practices for user security 
-	Mutual Transport Layer Security (TLS) with JWKS (JSON Web Key Sets) and secured data exchange with JWT (JSON Web Token) for same and cross-zone exchange
-	API sandbox to promote discovery and self service sampling of APIs

### Technical Specifications

| **APEX Cloud**  | Defaults  | Can be increased/decreased? (Quotas) |
| -------------------------------- | ---------------------------- | ----------------------------------- |
| **Authentication**  | **Inbound:**<br>API Key + JWT<br>**Outbound:** <br>API Key, TLS, MTLS,<br>AWS Signature v4,<br>custom policies | Not Applicable |
| **Authorization**   | Token-based AuthZ with OAuth,<br>OAuth with Singpass/Corppass  | Not Applicable |
| **Protocols Supported** | SOAP, REST, JSON, XML | Not Applicable  |
| **Payload Size Limit (Send)**    | 10 MB  | No   |
| **Payload Size Limit (Receive)** | 10 MB  | No   |
| **Concurrent connections**       | 128    | Yes  |
| **Connection timeout**           | 30 seconds    | Yes   |
| **Active timeout**               | 30 seconds    | Yes   |
| **Max Transaction Per Second (API)** | 20 | Yes |
| **Max Transaction Per Second (Application)** | 20 | Yes |


### Pricing

Currently, only API publishers have to pay to use APEX Cloud. Refer to [the pricing schedule for APEX Cloud on our documentation service](https://docs.developer.tech.gov.sg/docs/apex-cloud-getting-started-guide/docs/subscription){:target="_blank"} for more information.

### Contact Us

{% include contact-us-form.html %}
