import React, { useContext } from "react";
import { format, isSameDay, parseISO } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import { TimezoneContext } from "../../const";

export interface TimeRangeFormattedProps {
  start: string;
  end: string;
}
export const TimeRangeFormatted: React.FC<TimeRangeFormattedProps> = ({
  start,
  end,
}) => {
  const startTime = parseISO(start);
  const endTime = parseISO(end);
  const timezoneContext = useContext(TimezoneContext);

  let offsetedStartTime = utcToZonedTime(startTime, timezoneContext.timezone);
  let offsetedEndTime = utcToZonedTime(endTime, timezoneContext.timezone);

  if (isSameDay(offsetedStartTime, offsetedEndTime)) {
    return (
      <span>
        {formatTimeOnly(offsetedStartTime)} &mdash;{" "}
        {formatTimeOnly(offsetedEndTime)}
      </span>
    );
  }

  return (
    <span>
      {format(offsetedStartTime, "Pp")} &mdash; {format(offsetedEndTime, "Pp")}
    </span>
  );
};

function formatTimeOnly(date: Date) {
  // 12:00 AM
  return format(date, "p");
}
