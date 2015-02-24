## moment-log
Logging with timestamps from moment

Usage: Optionally, you may set the format string for moment.js. The default date format is `'MMM Do YYYY, h:mm:ss a'`;
```
var log = require('moment-log');
log.format = 'MMM DD YY, hh:mm:ss';
log('it is about', ['time']);

//  Outputs:
//  

// You can also access the moment dependency
var moment = log.moment;
var formatted = moment(1424817118663).format("MMM Do YY");

//  formatted: Feb 24th 15
```
