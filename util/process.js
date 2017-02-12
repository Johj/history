// helper function to strip url
function getHostname(url) {
  const u = require('url');
  return u.parse(url).hostname;
}

// helper function to manipulate timestamp
function getTimestamp(time, format) {
  const moment = require('moment');
  const ms = time / 1000;
  return moment(ms).format(format);
}

function getHistogram(history, field, fn = null, args = '') {
  let dict = {};
  for (entry of history) {
    const f = fn !== null ? fn.apply(this, [entry[field], args]) : entry[field];
    f in dict ? ++dict[f] : dict[f] = 1;
  }
  return dict;
}

function sortDict(dict) {
  let arr = [];
  for (key in dict) {
    arr.push([key, dict[key]]);
  }
  arr.sort((a, b) => {
    return b[1] - a[1];
  });
  return arr;
}

module.exports = {getHostname, getTimestamp, getHistogram, sortDict};
