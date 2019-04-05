'use strict';
const convertHrtime = require('convert-hrtime');

const timeSpan = () => {
	const start = process.hrtime();
	const end = type => convertHrtime(process.hrtime(start))[type];

	const returnValue = () => end('milliseconds');
	returnValue.rounded = () => Math.round(end('milliseconds'));
	returnValue.seconds = () => end('seconds');
	returnValue.nanoseconds = () => end('nanoseconds');

	return returnValue;
};

module.exports = timeSpan;
// TODO: Remove this for the next major release
module.exports.default = timeSpan;
