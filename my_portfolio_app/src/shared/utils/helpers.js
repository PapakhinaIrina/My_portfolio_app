import moment from 'moment';

export const isCurrentMonth = (month) => moment().isSame(month, 'month');
export const isCurrentDay = (day) => moment().isSame(day, 'day');
export const isDayContainCurrentEvent = (ev, dayItem) =>
  ev.date >= dayItem.format('X') && ev.date <= dayItem.clone().endOf('day').format('X');
