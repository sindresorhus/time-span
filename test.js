import test from 'ava';
import delay from 'delay';
import inRange from 'in-range';
import fn from './';

global.Promise = Promise;

test(async t => {
	const end = fn();
	await delay(100);
	t.true(inRange(end(), 80, 120));
	t.true(inRange(end.rounded(), 80, 120));
	t.true(inRange(end.sec(), 0.08, 0.12));
	t.true(inRange(end.nano(), 80000000, 120000000));
});
