var _previousFormat;

function(format) {
  var moment = require('moment');
  return function() {
    var parameters = Array.prototype.slice.call(arguments, 0);
    parameters.unshift(moment().format(this));
    console.log.apply(console, parameters);
  }
  .bind(_previousFormat = (format || _previousFormat || 'MMM Do YYYY, h:mm:ss a'));
  // For efficiency, format is bound as "this" so we don't have to 
  // look in the outer scope for "format".
}