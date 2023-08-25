---
title: Purple HATS - Automating Testing to Improve Web Accessibility for Apps and Websites
layout: layout-page-sidenav
category: Design
_data: single-level-nav
redirect_from:
    - /products/categories/design/purple-hats/
    - /products/categories/design/purple-hats.html
sub_collection_render: true
single_level_nav: true
description: Purple HATS is an automated testing tool that detects accessibility issues, helping developers to build more inclusive digital products.
---

![Purple HATS  header banner](/assets/img/PurpleHATS-HeaderBanner-v5.png)

Purple HATS is a customizable, automated web accessibility testing tool that allows software development teams to find and fix accessibility problems to improve the access of persons with disabilities (PWDs) to digital services.

Developed by the Accessibility (A11Y) team in GovTech’s Government Digital Services (GDS), Purple HATS is an open-source tool  that developers can use to help them build more inclusive products during the product development process. 

It helps product development teams rapidly scan and check for potential accessibility issues from their development machines or within their Continuous Integration/Continuous Delivery (CI/CD) pipeline with basic command-line knowledge.

### Key Benefits

- Provides a preliminary detailed review of websites’ accessibility status at the code level
- Helps to improve the access of digital services to users regardless of their abilities e.g. Persons with Disabilities (PwDs) and the elderly
- Reduces the time taken for developers to perform scans and code-testing of digital services across various web browsers
- Reduces the time taken for developers to accurately identify and debug accessibility-related code issues
- Scans can be conveniently performed locally from development machines or within the Continuous Integration / Continuous Delivery (CI/CD) pipeline

### How It Works

Purple HATS runs a bot that scans through and analyses web pages for accessibility issues. For example, some of the common accessibility issues that the bot will scan for are:

- Proper Labelling of Images
  - These are important as it affects how a button is read by assistive technologies such as screen readers
  - If a button is improperly labelled, screen reader users will not be able to understand what the button does

- Proper Labelling of Images
  - Accessibility is affected when images have improper or missing alt text, because a screen reader user will have difficulty understanding the content of the image.

After the scan, the bot assesses the impact rating of the accessibility issues by mapping them against the axe-core library of Deque System, which is a recognised standard that has comprehensive coverage of Web Content Accessibility Guidelines (WCAG) clauses. (Deque’s AXE accessibility testing engine is used to test the accessibility of websites and other HTML-based user interfaces.)

The scan results are then compiled in JSON format, and an HTML report is generated. The report provides a recommendation on how these fixes should be prioritised.

<figure style="text-align: center">
  <img src="/assets/img/Fig-1-Purple-HATS-Report.png" width="85%" height="85%" alt="Fig 1: Sample screenshot of a Purple HATS report showing accessibility issues regarding images missing alt text."/>
	  <figcaption>Fig 1: Sample screenshot of a Purple HATS report showing accessibility issues regarding images and links with missing alt text.</figcaption>
</figure>

### Awards and Recognition

- Purple HATS been listed in the [Digital Public Goods registry](https://digitalpublicgoods.net/registry/purple-hats.html){:target="\_blank"} by the [Digital Public Goods Alliance (DPGA)](https://digitalpublicgoods.net/who-we-are/){:target="\_blank"}. DPGA is a multistakeholder initiative supported by the Norwegian Agency for Development Cooperation (Norad), United Nations Development Programme (UNDP), and UNICEF.

- Purple HATS has been published as a case study in the [Case Study Library](https://oecd-opsi.org/innovations/purple-hats/){:target="\_blank"} of the OECD [Observatory of Public Sector Innovation (OPSI)](https://oecd-opsi.org){:target="\_blank"}.

### Pricing

Purple HATS is an open-source tool that is free to use.

### Contact Us

{% include contact-us-form.html %} 

