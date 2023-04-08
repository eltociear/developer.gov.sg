/// <reference types="cypress" />

import config from "../../support/config";
const {
  MAX_NUMBER_OF_VISIBLE_EVENTS_ONLOAD,
  MAX_NUMBER_OF_VISIBLE_NEWSLETTERS_ONLOAD,
} = config;

describe("Community Section Overview Page Test", function () {
  context("Mobile and Desktop Test Case", () => {
    beforeEach(() => {
      cy.viewport("macbook-13");
      // Wipe out state from the previous tests
      cy.visit("/communities/");
    });

    it("Verifies the page title, header, and description", () => {
      // Check the page title
      cy.title().should(
        "eq",
        "Communities | Singapore Government Developer Portal"
      );

      // Check the page header
      cy.get("h1").should("have.text", "Communities");

      // Check the page description
      cy.get("p").contains(
        "We are excited to engage with tech community as we continue to build and refine digital products for citizens, buinsesses, and the Whole-of-Government. We believe that our goal – to build Tech for Public Good – can only be achieved through meaningful collaboration and co-creation with the tech community."
      );
    });

    it("Verifies the number of visible event cards on page load", () => {
      // Get the upcoming events container
      cy.get("#upcoming-events-container").then($container => {
        // If there are events, verify the number of visible event cards is less than or equal to 2
        if ($container.find("div").length > 0) {
          cy.get("#upcoming-events-container")
            .find("div.community-section-event-card:visible")
            .its("length")
            .should("be.lte", MAX_NUMBER_OF_VISIBLE_EVENTS_ONLOAD);
        }
      });
    });

    it("Verifies the 'View all events' button is visible and has the correct text", () => {
      // Get the "View all events" button
      cy.get("a[data-cy='view-all-events-button']").then($button => {
        // Verify the button is visible
        cy.wrap($button).should("be.visible");

        // Verify the button has the correct text
        cy.wrap($button).contains("View all events");
      });
    });

    it("Verifies the correct message for the number of events in the upcoming-events-container", () => {
      // If there are no upcoming events (conferences and stack-x category), the no upcoming event message should be displayed
      cy.get("div[id='upcoming-events-container']").then(
        $upcomingEventsContainer => {
          const numEvents = $upcomingEventsContainer.find("div").length;

          if (numEvents === 0) {
            cy.get("div[id='no-upcoming-events-message']").should("be.visible");
          } else {
            cy.get("div[id='no-upcoming-events-message']").should("not.exist");
          }
        }
      );
    });

    it("Navigates to the All Events page when the 'View all events' button is clicked", () => {
      // Verify the 'view all events' button must always be there regardless of the number of events
      cy.get("div[id='upcoming-conferences-button']")
        .should("be.visible")
        .contains("View all events")
        .click();

      // Verify that the URL contains the correct path
      cy.url().should("contains", "/communities/events/all-events/");
    });

    it("Verifies the maximum number of visible newsletter cards on load", () => {
      // Click the "Newsletters" tab
      cy.get("a[data-cy='newsletters-tab']").click();

      // Verify the maximum number of visible newsletter cards
      cy.get("div[data-cy='newsletters-container']")
        .find("div.newsletter-card:visible")
        .its("length")
        .should("be.lte", MAX_NUMBER_OF_VISIBLE_NEWSLETTERS_ONLOAD);
    });

    it("Redirects to the newsletter sign-up form when the 'Subscribe here' link is clicked", () => {
      // Click the "Newsletters" tab
      cy.get("a[data-cy='newsletters-tab']").click();
      // Click the "Subscribe here" link
      cy.get("a[id='newsletter-signup-link']").click();
      // Verify that the URL contains the correct path
      cy.url().should(
        "contains",
        "https://form.gov.sg/620c7a0ba71f3d001367f9b5"
      );
    });

    it("navigates to the Newsletter page after clicking the 'View all newsletters' button", () => {
      cy.get("a[data-cy='newsletters-tab']").click();
      cy.get("a[id='view-all-newsletters-button']")
        .should("be.visible")
        .contains("View all newsletter")
        .click();
      cy.url().should("contains", "/communities/newsletter/");
    });


    it("Navigates to the Developer Blogs page when the 'View all developer blogs' button is clicked", () => {
      // Click the "Developer Blogs" tab
      cy.get("a[data-cy='developer-blogs-tab']").click();

      // Click the "View all developer blogs" button
      cy.get("a[id='view-all-developer-blogs-button']");
      cy.get("a[id='view-all-developer-blogs-button']")
        .should("be.visible")
        .contains("View all developer blogs")
        .click();
      cy.url().should("contains", "/communities/blogs/");
    });
  });
});
