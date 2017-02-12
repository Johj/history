const file = require('./Takeout/Chrome/BrowserHistory.json');
const key = Object.keys(file)[0];

/*
 * 0: favicon_url, not used
 * 1: page_transition
 * 2: title, not used
 * 3: url
 * 4: client_id
 * 5: time_usec
 */
const data = Object.keys(file[key][0]);

// peek at first entry for reference
//console.log(file[key][0]);

const p = require('./util/process.js');

const page_transition_dict = p.getHistogram(file[key], data[1]);
//console.log(page_transition_dict);

const hostname_dict = p.getHistogram(file[key], data[3], p.getHostname);
//console.log(hostname_dict);
const hostname_arr = p.sortDict(hostname_dict);
//console.log(hostname_arr);

const client_dict = p.getHistogram(file[key], data[4]);
//console.log(client_dict);

const date_dict = p.getHistogram(file[key], data[5], p.getTimestamp, 'YYYY-MM-DD');
//console.log(date_dict);
const hour_dict = p.getHistogram(file[key], data[5], p.getTimestamp, 'HH');
//console.log(hour_dict);
