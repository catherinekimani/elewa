/**
 * Different types and roles a block can play
 */
export enum StoryBlockTypes {

  /**
   * Block that marks the beginning of a story
   * Automatically loaded on the editor when user creates a story
   */
  AnchorBlock = 0,
  /**
   * Block only produces message output and will not wait for input.
   *
   * Block examples: Sending messages
   * Usage         : Operator sends a message, terminal chatflow, ...
   */
  TextMessage = 1,

  /**
   * Block only waits for input and has no leading message.
   * Block examples: get location, get audio, get message, ...
   * Usage         : operator awaits feedback, ... */
  Input = 2,


  /**
   * Block that sends a location to the userxs
   */
  Location = 4,

  QuestionBlock = 6,

  ListBlock = 16,

  /**
   * Block that sends an audio as output to the user
   */
  Audio = 8,

  /**
   * Block that sends a message to the user in form of a video
   */
  Video = 13,


  /**
   * Block sends message then expects input.
   * Block examples: buttons question, ...
   * Usage         : bot scenario-designs */
  IO = 3,

  /**
   * Block redirects to StorySection with other scenario.
   * Usage         : structuring and reusing scenario-designs */
  Structural = 9,

  /**
   * Block that sends an image and expects no input from the user
   */
  Image = 5,

  ImageInput = 50,

  /**
   * Block that waits for the user to return their name as input
   */
  Name = 10,

  /**
   * Block that waits for the user to enter their email address as input
   */
  Email = 11,

  /**
   * Block that waits for the user to enter their phone-number as input
   */
  PhoneNumber = 12,

  /**
  * Block that sends a document to the user as output
  */
  Document = 7,

  /**
   * Block that sends a sticker to the user as a message
   */
  Sticker = 15,

  ErrorBlock = 999,

  /**
   * Block that sends a message to the user and expects a list of items to be returned
   */
  List = 16,

  /**
  * Block that expects input from the user by replying to a message
  */
  Reply = 17,

  /**
  * Block that allows linking a different story within the same story.
  */
  JumpBlock = 18,

  /**
   * Block that sends a list of items for user to choose and asks a question if they want to choose again
   */
  MultipleInput = 19,

  /** */
  FailBlock = 20,
  LocationInputBlock = 22,
  AudioInput = 21,

  /** Block that calls a specified URL endpoint when hit */
  WebhookBlock = 25,
  OpenEndedQuestion = 27,

  EndStoryAnchorBlock = 9999

}
