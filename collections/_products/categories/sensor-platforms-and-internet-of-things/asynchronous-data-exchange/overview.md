---
title: Asynchronous Data Exchange (ADEX) – Empowering a Smart Nation
layout: layout-page-sidenav
category: Sensors and IOT
sub_collection_render: true
single_level_nav: true
_data: single-level-nav
collection_group: [Singapore Government Tech Stack]
redirect_from:
  - /products/categories/sensor-platforms-and-internet-of-things/asynchronous-data-exchange/
  - /products/categories/sensor-platforms-and-internet-of-things/asynchronous-data-exchange.html
  - /technologies/sensor-platforms-and-internet-of-things/asynchronous-data-exchange/
  - /technologies/sensor-platforms-and-internet-of-things/asynchronous-data-exchange.html
sgts_collection_group: [communications]
sgts_layer_group: [services]
sgts_title: ADEX (SDX)
description: >
  ADEX is a secure data exchange and event streaming platform for Whole-of-Government and local businesses.
product_homepage_links: https://adex.gov.sg/auth/login;app=sdx
---

![ADEX header banner for Singapore Government Developer Portal](/assets/img/Adex-NewHeaderBanner.png)

Asynchronous Data Exchange (ADEX) is a centralised, self-service data exchange and event streaming platform for Whole-of-Government (WOG) and local business entities to share and receive lightweight, real-time data securely. It is part of the [Singapore Government Tech Stack (SGTS)](/singapore-government-tech-stack/overview/index.html){:target="_blank"} and one of its Communications Pillar components, along with [API Exchange (APEX)](/products/categories/data-and-apis/apex){:target="_blank"} and [Cloud File Transfer (CFT)](/products/categories/data-and-apis/cloud-file-transfer/){:target="_blank"}.

ADEX originated as the Sensor Data Exchange (SDX), part of the Smart Nation Sensor Platform (SNSP). Currently, ADEX has broadened its scope to support the exchange of both sensor and non-sensor data. In this context, non-sensor data may also refer to processed sensor data (i.e. raw sensor data after processing/analytics). For example, mall footfalls are considered raw sensor data (i.e. how many steps are counted at Level 1 of a shopping centre). After processing/analytics, the data can be defined as “Level 1 is at 80% capacity”, which can be considered non-sensor data.

To access ADEX, agency users can either connect via Intranet through the SGWAN interface or via MPLS from their private network. ADEX enables the discovery and sharing of event data, such as status updates or event streams in real-time, across both the Internet and Intranet. Subscribers will receive updates as soon as the events are published, and Publishers can decide on the appointment of Subscribers.

Hosted on the [Government Commercial Cloud (GCC)](/products/categories/infrastructure-and-hosting/government-on-commercial-cloud){:target="_blank"}, ADEX supports an exchange of data up to RESTRICTED classification and considered NON-SENSITIVE. It enables government agencies to publish and subscribe to real-time data using a self-service portal in GCC, both on the GCC Internet and GCC Intranet.

This diagram shows the components of ADEX and its ability to distribute real-time data across networks:

<figure style="text-align: center">
  <img
    src="/assets/img/products/adex-how-it-works.png" width="100%" height="100%"
    alt="Fig 1: How ADEX works"
  />
  <figcaption>Fig 1: How ADEX works</figcaption>
</figure>

### Differences between APEX & ADEX

| **APEX**                                                                                                                                   | **ADEX**                                                                                                                                       |
| :----------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| **API gateway**<br>• REST and SOAP<br>• Up to Confidential                                                                                 | **Message-queue + stream hub**<br>• MQTT and Kafka<br>• Up to Restricted                                                                       |
| **On-Demand**<br>• Consumers call API when needed<br>• Orchestration and transformation supported<br>• Retry-able                          | **Event-driven**<br>• Consumers get informed when Provider has new data<br>• Stream processing<br>• Replay-able                                |
| **Synchronous**<br>• Request-Response model<br>• Provider responds to acknowledge request from Consumer<br>• Immediate feedback of receipt | **Asynchronous**<br>• Response is decoupled<br>• Provider doesn't need a response from Consumer<br>• No immediate feedback of receipt          |

### Key Features

- Asynchronous data exchange for WOG
- Provides a data sharing marketplace
- Offers central exchange service to facilitate sharing
- Creates catalyst for discovery and innovation

Users can look forward to the addition of streaming capabiltiies, which is currently under development.

### Use Cases

ADEX is currently live and serving the needs of Government agencies. Some examples include:
- The Ministry of Health and the Home Team Science and Technology Agency published enforcement data for COVID-19 social distancing measures to participating agencies. This data is consumed by SenseOps, a visualisation & dashboard tool, for efficient sense-making to deploy safe distancing officers to hotspot locations. Further details are elaborated in the [Case Study](/products/categories/sensor-platforms-and-internet-of-things/asynchronous-data-exchange/case-study){:target="_blank"}.
- The Sentosa Development Corporation published and subscribed to SafeEntry dataset for crowd control at the various recreation nodes in Sentosa.
- The National Environmental Agency publishes environmental topics like rainfall, temperature, wind speed, wind direction, wind gust speed, wind gust direction, PSI and PM2.5.

### Awards and Recognition

**2022**
- [IDC Smart City Awards (SCAPA) 2022 – Administration Category](https://www.idc.com/getdoc.jsp?containerId=prAP49267722){:target="_blank"}
- [IDC Future Enterprise Awards 2022 – Best in Future of Connectedness](https://www.idc.com/getdoc.jsp?containerId=prAP49756122){:target="_blank"}

Find out more in this [press release](https://govinsider.asia/connected-gov/smart-city-projects-flourish-in-asia-pacific-amid-uptick-in-public-interest/){:target="_blank"}.

### Pricing

For pricing details, contact the ADEX team through the form below.

### Contact Us

{% include contact-us-form.html %}
