// @flow

export type Event = {
  date: string,
  email: string,
  ip: string,
  url: string,
  userAgent: string,
  userName: string,
};

export type SaveLiveEventAction = {|
  type: 'SAVE_LIVE_EVENT',
  event: Event
|};

export type SaveHistoryEventsAction = {|
  type: 'SAVE_HISTORY_EVENTS',
  events: Array<Event>,
|};

export type SaveLiveEventActionCreator<T> = {
  (event: Event): T
};

export type SaveEventInHistoryActionCreator<T> = {
  (event: Event): T
};

export type GetHistoryActionCreator<T> = {
  (): T,
};

export type EventAction =
  | SaveLiveEventAction
  | SaveHistoryEventsAction;

export type State = {
  live: Array<Event>,
  history: Array<Event>,
};
