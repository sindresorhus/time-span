'use strict';
const convertHrtime = require('convert-hrtime');

module.exports = function () {
	const start = process.hrtime();

	const end = function (type) {
		return convertHrtime(process.hrtime(start))[type];
	};

	const ret = end.bind(null, 'ms');

	ret.rounded = function () {
		return Math.round(end('ms'));
	};

	ret.sec = end.bind(null, 's');
	ret.nano = end.bind(null, 'ns');

	return ret;
};
