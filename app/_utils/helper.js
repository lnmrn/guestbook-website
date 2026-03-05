import { formatDistance, parseISO } from "date-fns";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

export function isAlreadyBooked(range, datesArray) {
  return (
    range.from &&
    range.to &&
    datesArray.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to }),
    )
  );
}
