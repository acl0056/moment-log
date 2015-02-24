## moment-log
Logging with timestamps from moment

Usage:
```
// The default date format is `'MMM DD YY, hh:mm:ss[:]'`;
var log = require('moment-log');
log('it is about', ['time']);

//  Outputs:
//  Feb 24 15, 05:02:21: it is about [ 'time' ]

// Optionally, you may set the format string for moment.js.
log.format = 'MMM Do YYYY, h:mm:ss a[ -]';
log('it is about', ['time']);

//  Outputs:
//  Feb 24th 2015, 5:04:12 pm - it is about [ 'time' ]

// You can also access the moment dependency
var moment = log.moment;
var formatted = moment(1424817118663).format("MMM Do YY");

//  formatted: Feb 24th 15
```
