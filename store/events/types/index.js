// @flow

export type Event = {
  email: string,
  ip: string,
  url: string,
  userAgent: string,
  userName: string,
};

export type SaveEventAction = {|
  type: 'SAVE_EVENT',
  event: Event
|};

// export type RemoveTodoAction = {|
//   type: 'REMOVE_TODO',
//   id: number,
// |};

export type EventAction =
  | SaveEventAction;

export type State = {
  list: Array<Event>,
};
