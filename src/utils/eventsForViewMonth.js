/**
 * return a list of event that are scheduled for the month that is being viewed
 *
 * Later make an API call to get the current
 *
 * 1. check if events are active
 */
import dayjs from "dayjs";

function eventForViewMonth(monthViewing, eventList) {
  // filter if events are active
  const activeEvents = eventList.filter((event) => event.isActive);
  const monthEvents = activeEvents.filter((event) => {
    return dayjs(event.date).month() === monthViewing - 1;
  });
  return monthEvents;
}

export { eventForViewMonth };
