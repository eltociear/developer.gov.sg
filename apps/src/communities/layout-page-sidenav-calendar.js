import {
  getEventStatusAndBackgroundColor,
  setEventStatusAndBackgroundColor,
} from "../lib/communities";

(() => {
  try {
    // Variables
    const { navLevel } = document.querySelector(
      'script[data-id="layout-page-sidenav-calendar"]'
    ).dataset;

    // Since the script is only run on the layout-page-sidenav-calendar page, we can assume that page.multi_level_layout is present
    if (navLevel) {
      // Selectors
      const sgdsCardEventInformation = document.querySelectorAll(
        ".sgds-card-event-information"
      );

      // 1. Set the event status and background color
      // 2. Programatically set the anchor tag, event-information-link to the event recording link if the event has ended
      [...sgdsCardEventInformation].map(function (el) {
        const {
          startDate,
          endDate,
          extraType,  // values: "recording" | null
          registrationEndDate,
          registrationLink,
          recordingLink,
        } = el.dataset;

        const eventInformationAnchorTag = el.querySelector(
          "#event-information-link"
        );
        const { status, backgroundColor } = getEventStatusAndBackgroundColor(
          startDate,
          endDate,
          el
        );

        // There are five cases:
        // 1. The event has not started yet
        // 2. The event is currently happening (Now)
        // 3. The event has ended, but the recording is pending
        // 4. The event has ended, and the recording has been published
        // 5. The event has ended, but there won't be a recording
        setEventStatusAndBackgroundColor(el, status, backgroundColor);

        switch (true) {
          case status === "upcoming" || status === "now":
            // Compare the registration end date with the current date
            // For status === "now", the organisers may allow people to join even when the program has started
            // As such, i accounted for this rare possibility
            if (new Date() > new Date(registrationEndDate)) {
              eventInformationAnchorTag.textContent = "Registration Closed";
              eventInformationAnchorTag.style.backgroundColor = "#C6C6C6";
              eventInformationAnchorTag.style.cursor = "not-allowed";
              eventInformationAnchorTag.style.pointerEvents = "none";
              break;
            }

            eventInformationAnchorTag.href = registrationLink;
            eventInformationAnchorTag.textContent = "Register Now";
            eventInformationAnchorTag.style.backgroundColor = "#0161AF";
            break;
          case status === "past":
            if (recordingLink) {
              eventInformationAnchorTag.href = recordingLink;
              eventInformationAnchorTag.textContent = "View Recording";
              eventInformationAnchorTag.style.backgroundColor = "#0161AF";
              break;
            }

            // Disable the anchor tag
            if (extraType == "recording") {
              eventInformationAnchorTag.textContent = "Pending Upload";
              eventInformationAnchorTag.style.cursor = "not-allowed";
              eventInformationAnchorTag.style.pointerEvents = "none";
              eventInformationAnchorTag.style.backgroundColor = "#C6C6C6";
              break;
            }
        }
      });
    }
  } catch (e) {
    console.error(e);
  }
})();
