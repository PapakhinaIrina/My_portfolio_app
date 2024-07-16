import moment from 'moment';

export const isCurrentMonth = (month) => moment().isSame(month, 'month');
export const isCurrentDay = (day) => moment().isSame(day, 'day');
export const isDayContainCurrentEvent = (ev, dayItem) =>
  ev.date >= moment(dayItem).format('X') && ev.date <= moment(dayItem).clone().endOf('day').format('X');
