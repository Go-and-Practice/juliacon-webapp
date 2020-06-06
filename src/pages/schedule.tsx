import React from "react";
import { format } from "date-fns";
import { css } from "emotion";
import { NextPage } from "next";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons/faCaretLeft";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons/faCaretRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { withApollo } from "../apollo";
import { Page } from "../components/layout";
import { UnstyledButton } from "../components/ui";

import { useArrayChoice } from "../hooks/useArrayChoice";
import { CONFERENCE_DAYS, ConferenceDay, isConferenceDay } from "../const";

const Schedule: NextPage = () => {
  return (
    <Page>
      <p>Schedule</p>
      <DatePicker />
    </Page>
  );
};

export default withApollo()(Schedule);

const DatePicker = () => {
  const day = useArrayChoice(CONFERENCE_DAYS, () => {
    const day = getClosestConferenceDay();
    return CONFERENCE_DAYS.indexOf(day);
  });
  const dateFormatted = format(new Date(day.value), "EEEE, MMMM d, yyyy");

  return (
    <div
      className={css`
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
      `}
    >
      <UnstyledButton
        onClick={day.previous}
        className={css`
          font-size: 1.5em;
        `}
      >
        <FontAwesomeIcon icon={faCaretLeft} fixedWidth />
      </UnstyledButton>
      <div
        className={css`
          text-align: center;
          width: 16em;
        `}
      >
        <p>{dateFormatted}</p>
      </div>
      <UnstyledButton
        onClick={day.next}
        className={css`
          font-size: 1.5em;
        `}
      >
        <FontAwesomeIcon icon={faCaretRight} fixedWidth />
      </UnstyledButton>
    </div>
  );
};

function getClosestConferenceDay(): ConferenceDay {
  const now = new Date();
  const today = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;

  if (isConferenceDay(today)) {
    return today;
  }

  if (today < CONFERENCE_DAYS[0]) {
    return CONFERENCE_DAYS[0];
  }

  return CONFERENCE_DAYS[CONFERENCE_DAYS.length - 1];
}
