var moment = require('moment');
var log = module.exports = function() {
  var parameters = Array.prototype.slice.call(arguments, 0);
  parameters.unshift(moment().format(log.format));
  console.log.apply(console, parameters);
};
log.format = 'MMM DD YY, hh:mm:ss[:]';
log.moment = moment;