var moment = require('moment');
var log = module.exports = function() {
  var parameters = Array.prototype.slice.call(arguments, 0);
  parameters.unshift(this.moment().format(this.format));
  console.log.apply(console, parameters);
};
log.format = 'MMM Do YYYY, h:mm:ss a';
log.moment = moment;