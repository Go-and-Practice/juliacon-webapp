export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Poster = {
  __typename?: "Poster";
  id: Scalars["ID"];
  title: Scalars["String"];
  abstract?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  day: Scalars["String"];
  pdflink?: Maybe<Scalars["String"]>;
  speakers: Array<Speaker>;
};

export type Query = {
  __typename?: "Query";
  talk?: Maybe<Talk>;
  talks: Array<Talk>;
  room?: Maybe<Room>;
  rooms: Array<Room>;
  speaker?: Maybe<Speaker>;
  poster?: Maybe<Poster>;
  posters: Array<Poster>;
};

export type QueryTalkArgs = {
  id: Scalars["ID"];
};

export type QueryTalksArgs = {
  day?: Maybe<Scalars["String"]>;
  roomId?: Maybe<Scalars["ID"]>;
  talkType?: Maybe<TalkType>;
};

export type QueryRoomArgs = {
  id: Scalars["ID"];
};

export type QuerySpeakerArgs = {
  id: Scalars["ID"];
};

export type QueryPosterArgs = {
  id: Scalars["ID"];
};

export type QueryPostersArgs = {
  day?: Maybe<Scalars["String"]>;
};

export type Room = {
  __typename?: "Room";
  id: Scalars["ID"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  color?: Maybe<Scalars["String"]>;
  /**
   * The talks scheduled to occur in this room.
   *
   * ### Optional Arguments
   * * `day` - The conference day to fetch talks for.
   *     Must be in format `YYYY-MM-DD`.
   */
  talks: Array<Talk>;
};

export type RoomTalksArgs = {
  day?: Maybe<Scalars["String"]>;
};

export type Speaker = {
  __typename?: "Speaker";
  id: Scalars["ID"];
  name: Scalars["String"];
  biography?: Maybe<Scalars["String"]>;
  /** The URL of the user's upload avatar image. */
  avatar?: Maybe<Scalars["String"]>;
  talks: Array<Talk>;
};

export type Talk = {
  __typename?: "Talk";
  id: Scalars["ID"];
  title: Scalars["String"];
  abstract?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  day: Scalars["String"];
  type: TalkType;
  /** True if the talk is live (not pre-recorded). */
  isLive?: Maybe<Scalars["Boolean"]>;
  /** The start time of the talk (as an ISO 8601 formatted timestamp). */
  startTime: Scalars["String"];
  /** The end time of the talk (as an ISO 8601 formatted timestamp). */
  endTime: Scalars["String"];
  speakers: Array<Speaker>;
  room: Room;
  videoCode?: Maybe<Scalars["String"]>;
};

export enum TalkType {
  BirdsOfFeather = "BIRDS_OF_FEATHER",
  Break = "BREAK",
  Keynote = "KEYNOTE",
  LightningTalk = "LIGHTNING_TALK",
  Minisymposium = "MINISYMPOSIUM",
  SponsorAddress = "SPONSOR_ADDRESS",
  Talk = "TALK",
  WorkshopFullDay = "WORKSHOP_FULL_DAY",
  WorkshopHalfDay = "WORKSHOP_HALF_DAY",
}
