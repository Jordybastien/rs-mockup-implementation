/**
 * @desc Function executing on load to set current date
 */
window.onload = () => {
  document.getElementById('date-day').innerHTML = `${
    days[new Date().getDay()]
  },`;
  document.getElementById('date-time').innerHTML = `${new Date().getDate()} ${
    months[new Date().getMonth()]
  } ${new Date().getFullYear()}`;
};

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const switchTo = (switchId, offId) => {
  document.getElementById(switchId).classList.add('active-switch');
  document.getElementById(offId).classList.remove('active-switch');
};
