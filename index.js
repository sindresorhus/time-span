'use strict';

const convertHrtime = require('convert-hrtime');

const timeSpan = () => {
	const start = process.hrtime();
	const end = type => convertHrtime(process.hrtime(start))[type];

	const ret = () => end('milliseconds');
	ret.rounded = () => Math.round(end('milliseconds'));
	ret.seconds = () => end('seconds');
	ret.nanoseconds = () => end('nanoseconds');

	return ret;
};

module.exports = timeSpan;
module.exports.default = timeSpan;
