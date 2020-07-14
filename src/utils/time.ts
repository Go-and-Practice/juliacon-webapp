import { addHours } from "date-fns";

const DEBUG_HOURS_SHIFT = Number(process.env["DEBUG_HOURS_SHIFT"]);

export function createDate(timestamp: string | Date) {
  const date = typeof timestamp === "string" ? new Date(timestamp) : timestamp;
  if (DEBUG_HOURS_SHIFT) {
    return addHours(date, DEBUG_HOURS_SHIFT);
  }

  return date;
}

export function now() {
  return createDate(new Date());
}
