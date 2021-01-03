/**
 * @desc Function executing on load to set current year
 */
window.onload = () =>
  (document.getElementById('copyright').innerHTML = new Date().getFullYear());
