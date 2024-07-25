import moment from 'moment';

export const isCurrentMonth = (month) => {
  if (!month || !month._isAMomentObject) {
    throw new Error('Month parameter should be a moment object');
  }
  return moment().month() + 1 === new Date(month._d).getMonth() + 1;
};
export const isCurrentDay = (day) => {
  if (!day || !day._isAMomentObject) {
    throw new Error('Day parameter should be a moment object');
  }
  return moment().date() === new Date(day._d).getDate();
};
export const isDayContainCurrentEvent = (ev, dayItem) =>
  ev.date >= moment(dayItem).format('X') && ev.date <= moment(dayItem).clone().endOf('day').format('X');
