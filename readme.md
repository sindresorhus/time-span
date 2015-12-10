# time-span [![Build Status](https://travis-ci.org/sindresorhus/time-span.svg?branch=master)](https://travis-ci.org/sindresorhus/time-span)

> Simplified high resolution timing


## Install

```
$ npm install --save time-span
```


## Usage

```js
const timeSpan = require('time-span');
const end = timeSpan();

timeConsumingFn();

console.log(end());
//=> 1745.3186

console.log(end.rounded());
//=> 1745

console.log(end.sec());
//=> 1.7453186
```


## API

### timeSpan()

Returns a function that returns the time difference:

#### end()

Milliseconds.

#### end.rounded()

Milliseconds rounded.

#### end.sec()

Seconds.

#### end.nano()

Nanoseconds.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
