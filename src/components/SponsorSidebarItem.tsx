import * as React from "react";
import { css } from "emotion";

export const SponsorSidebarItem = (sponsor: {
  sponsor: {
    sponsorName: string;
    blurb: string;
    moreInfoURL: string;
    videoURL: string;
    chatChannelName: string;
    logoURL: string;
    tier: string;
  };
}) => {
  const sponsorObj = sponsor.sponsor;

  return (
    <div>
      <img
        src={sponsorObj.logoURL}
        alt={sponsorObj.sponsorName}
        className={css`
           {
            padding: 15px;
            width: 48%;
            height: 40%;
            object-fit: contain;
            border: 0;
          }
        `}
      />
    </div>
  );
};
