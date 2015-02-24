## moment-log
Logging with timestamps from moment

Usage: Optionally pass in a date format string for moment.js.  You only need to do this the first time you require it.  The default date format is `'MMM Do YYYY, h:mm:ss a'`;
```
var dateFormat = 'MMM DD YY, hh:mm:ss';
var log = require('moment-log')(dateFormat);
log('it is about', ['time']);
```
