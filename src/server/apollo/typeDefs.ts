import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Query {
    talk(id: ID!): Talk
    talks(day: String, roomId: ID, talkType: TalkType): [Talk!]!

    room(id: ID!): Room
    rooms: [Room!]!

    speaker(id: ID!): Speaker

    poster(id: ID!): Poster
    posters(day: String): [Poster!]!
  }

  type Talk {
    id: ID!
    title: String!
    abstract: String
    description: String
    day: String!
    type: TalkType!

    """
    True if the talk is live (not pre-recorded).
    """
    isLive: Boolean

    """
    The start time of the talk (as an ISO 8601 formatted timestamp).
    """
    startTime: String!

    """
    The end time of the talk (as an ISO 8601 formatted timestamp).
    """
    endTime: String!

    speakers: [Speaker!]!
    room: Room!

    """
    The ID of the YouTube video associated with this talk (if any).
    """
    videoCode: String

    """
    The talk that is immediately after this talk (if any) in the same room as
    the talk.

    If there is a gap before the next talk, this will be null.
    """
    nextTalk: Talk
  }

  type Speaker {
    id: ID!
    name: String!
    biography: String

    """
    The URL of the user's upload avatar image.
    """
    avatar: String
    talks: [Talk!]!
  }

  type Room {
    id: ID!
    name: String!
    description: String
    color: String

    """
    The talks scheduled to occur in this room.

    ### Optional Arguments
    * \`day\` - The conference day to fetch talks for.
        Must be in format \`YYYY-MM-DD\`.
    """
    talks(day: String): [Talk!]!
  }

  type Poster {
    id: ID!
    title: String!
    abstract: String!
    description: String
    day: PosterDay!
    pdflink: String
    speakers: [Speaker!]!
  }

  enum TalkType {
    BIRDS_OF_FEATHER
    BREAK
    KEYNOTE
    LIGHTNING_TALK
    MINISYMPOSIUM
    SPONSOR_ADDRESS
    TALK
    WORKSHOP_FULL_DAY
    WORKSHOP_HALF_DAY
  }

  enum PosterDay {
    One
    Two
  }
`;
