var config   = require('../../config/api.config');
var log      = require('../../lib/log')('api');
var postgres = new require('../lib/db.js')(config.get('sql'));
var response = require('response');

var getPayments = function (req, res, next) {

  var options = prepareOptions();
  
  function prepareOptions() {
    account : req.params.address
  }

}

module.exports = getPayments;
