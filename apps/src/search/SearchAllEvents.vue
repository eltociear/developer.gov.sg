<template>
  <div>
    <!-- Loader -->
    <loader :active="isLoading" />
    <!-- Content-->
    <div v-show="!isLoading" class="sgds-container search-content">
      <!-- Count -->
      <div>
        <p class="margin--bottom text-muted">
          Showing {{ filteredResult.totalFilteredResults }} out of
          {{ totalPages }} events
        </p>
        <!-- Status -->
        <h6 class="is-danger" v-if="errorMsg">{{ errorMsg }}</h6>
      </div>
      <!-- Results -->
      <div class="card-grid-container is-fullwidth">
        <div
          :key="result.url"
          class="sgds-card-list"
          v-for="result of filteredResult.sortedResultsByDate"
        >
          <CardCalendar>
            <!-- Event Status -->
            <template v-slot:event-status>
              <div
                :style="{ backgroundColor: result.backgroundColor }"
                class="is-hidden-desktop has-text-centered padding--bottom--sm padding--top--sm event-status-container"
              >
                <p
                  class="has-text-weight-bold has-text-white event-status margin--bottom--none"
                >
                  {{ result.status }}
                </p>
              </div>
            </template>
            <!-- Calendar -->
            <template v-slot:calendar>
              <div class="sgds-card-image is-hidden-touch">
                <div class="margin--right--lg">
                  <div class="has-text-centered" style="width: 6.65rem">
                    <div
                      class="event-status-container"
                      style="
                        border-top-right-radius: 0.5rem;
                        border-top-left-radius: 0.5rem;
                      "
                      :style="{ backgroundColor: result.backgroundColor }"
                    >
                      <p
                        class="is-size-8 has-text-weight-bold has-text-white event-status margin--bottom--none"
                      >
                        {{ result.status }}
                      </p>
                    </div>
                    <div
                      class="padding---top--xs"
                      style="
                        border: 1px solid #323232;
                        border-bottom-left-radius: 0.5rem;
                        border-bottom-right-radius: 0.5rem;
                      "
                    >
                      <div class="padding--top--sm padding--bottom--sm">
                        <p
                          class="padding--top--xs padding--bottom--none is-size-2 has-text-weight-bold has-text-centered margin--bottom--sm"
                        >
                          {{ result.calendarFormat.dayFormat }}
                        </p>
                      </div>
                      <div>
                        <p class="padding--bottom margin--bottom--none">
                          {{
                            result.calendarFormat.monthFormat +
                            " ’" +
                            result.calendarFormat.yearFormat
                          }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <!-- Header -->
            <template v-slot:header>
              <h4>
                <a :href="result.url" v-html="result.title"></a>
              </h4>
            </template>
            <!-- Mobile Calendar Slot -->
            <template v-slot:mobile-calender>
              <div class="is-hidden-desktop is-flex is-centered">
                <div class="is-flex margin--bottom--sm is-vcentered">
                  <span
                    class="sgds-icon sgds-icon-calendar is-size-4 margin--right--sm"
                    role="img"
                    aria-label="iconName"
                    style="
                      -webkit-text-stroke: 0.5px white;
                      filter: contrast(1);
                    "
                  ></span>
                  <!-- Concat result.calendarFormat dayFormat, monthFormat and yearFormat together  -->
                  {{
                    result.calendarFormat.dayFormat +
                    " " +
                    result.calendarFormat.monthFormat +
                    " " +
                    result.calendarFormat.yearFormat
                  }}
                </div>
              </div>
            </template>
            <!-- Recording Slot -->
            <template v-slot:recording>
              <!-- Error with the v-if -->
              <div
                v-if="result.event_recording_link !== 'false'"
                class="is-hidden-touch has-text-weight-semibold padding--left padding--right margin--bottom margin--top padding--top--xs padding--bottom--xs is-size-8"
                style="
                  background-color: #cce4f7;
                  width: fit-content;
                  border-radius: 0.1rem;
                  border-radius: 0.25rem;
                "
              >
                Recordings available
              </div>
            </template>
            <!-- Category Slot-->
            <template #category>
              <div class="is-flex margin--bottom--sm">
                <img
                  alt="Event Image"
                  :src="result.icon_path"
                  class="margin--right--sm margin--left--none margin--bottom--none margin--top--none"
                  style="width: 1.5em; height: 1.5em; filter: contrast(1)"
                />
                <div
                  v-html="result.category"
                  class="margin--bottom--none"
                ></div>
              </div>
            </template>
            <!-- Front matter attributes -->
            <template v-slot:front-matter-attributes>
              <div class="spacing-container-vertical spacing-16">
                <!-- Display event's description -->
                <p class="margin--bottom--none" v-html="result.description"></p>
              </div>
            </template>
          </CardCalendar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "../lib/Loader.vue";
import { computed } from "vue";
import CardCalendar from "../lib/CardCalendar.vue";
import useLunrSearch from "../composables/useLunrSearch";
import { sanitize, isQueryEmpty } from "../lib/index.js";
import { getEventStatusAndBackgroundColor } from "../lib/communities";

export default {
  components: { Loader, CardCalendar },
  setup() {
    // Variables
    const params = new URLSearchParams(window.location.search);
    const { queryParam, dateParam, categoryParam } = {
      queryParam: sanitize(params.get("query")),
      dateParam: params.get("year_filter")
        ? sanitize(params.get("year_filter"))
        : "All Time",
      categoryParam: params.get("category_filter")
        ? sanitize(params.get("category_filter"))
        : "All Types",
    };

    const {
      isLoading,
      totalPages,
      isNonEmptySearch,
      searchResults,
      generateSearchResults,
      errorMsg,
    } = useLunrSearch();

    generateSearchResults({
      queryParam: queryParam,
      jsonPath: "/search/events.json",
      lunrIndexFields: [
        "title",
        "description",
        "category",
        "content",
        "random",
      ],
    });

    const isMobileAndTablet = computed(() => {
      return window.innerWidth <= 1024;
    });

    const filteredResult = computed(() => {
      // Check if param is empty
      const queryIsEmpty = isQueryEmpty(queryParam);

      // Set the event status and background color
      const processedSearchResults = searchResults.value.map(item => {
        const eventStartDateAndTime = new Date(item.date_time.start_date_time);
        const { status, backgroundColor } = getEventStatusAndBackgroundColor(
          item.date_time.start_date_time,
          item.date_time.end_date_time,
          null
        );

        return {
          ...item,
          calendarFormat: {
            dayFormat: eventStartDateAndTime.toLocaleDateString("en-SG", {
              day: "2-digit",
            }),
            monthFormat: isMobileAndTablet.value
              ? eventStartDateAndTime.toLocaleString("en-SG", {
                  month: "long",
                })
              : eventStartDateAndTime
                  .toLocaleString("en-SG", { month: "short" })
                  .toUpperCase(),
            yearFormat: eventStartDateAndTime
              .toLocaleDateString("en-SG", {
                year: "numeric",
              })
              .slice(isMobileAndTablet.value ? 0 : 2),
          },
          status: status.toUpperCase(),
          backgroundColor: backgroundColor,
        };
      });

      // Filter by category
      const filteredResultsByCategory = processedSearchResults.filter(item => {
        return categoryParam === "All Types"
          ? true
          : item.category.toLowerCase() === categoryParam.toLowerCase();
      });

      // Filter by date
      const filteredResultsByDate = filteredResultsByCategory.filter(item => {
        return dateParam === "All Time"
          ? true
          : new Date(item.date_time.start_date_time).getFullYear() ==
              parseInt(dateParam);
      });

      // Sort by date in a descending order
      const sortedResultsByDate = queryIsEmpty
        ? filteredResultsByDate.sort((a, b) => {
            const dateA = new Date(a.date_time.start_date_time);
            const dateB = new Date(b.date_time.start_date_time);
            return dateB - dateA;
          })
        : filteredResultsByDate;

      // Get the total number of results after filtering
      const totalFilteredResults = sortedResultsByDate.length;

      return {
        queryIsEmpty,
        processedSearchResults,
        sortedResultsByDate,
        totalFilteredResults,
      };
    });

    document.getElementById("query-all-year").value = dateParam;
    document.getElementById("query-all-events").value = queryParam;
    document.getElementById("query-all-category").value = categoryParam;

    return {
      totalPages,
      isLoading,
      isNonEmptySearch,
      searchResults,
      errorMsg,
      filteredResult,
    };
  },
};
</script>
