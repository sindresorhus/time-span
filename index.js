'use strict';
var convertHrtime = require('convert-hrtime');

module.exports = function () {
	var start = process.hrtime();

	var end = function (type) {
		return convertHrtime(process.hrtime(start))[type];
	};

	var ret = end.bind(null, 'ms');

	ret.rounded = function () {
		return Math.round(end('ms'));
	};

	ret.sec = end.bind(null, 's');
	ret.nano = end.bind(null, 'ns');

	return ret;
};
