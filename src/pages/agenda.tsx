import React from "react";
import { NextPage } from "next";

import { withApollo } from "../apollo";
import { AgendaTalksList } from "../components/agenda";
import {
  ConferenceDayPicker,
  useConferenceDayPickerState,
} from "../components/date";
import { Page } from "../components/site";

console.log(__filename);

const Agenda: NextPage = () => {
  console.log("Agenda");
  const dayPickerState = useConferenceDayPickerState();
  return (
    <Page>
      <ConferenceDayPicker state={dayPickerState} />
      <AgendaTalksList conferenceDay={dayPickerState.value} />
    </Page>
  );
};

export default withApollo()(Agenda);
