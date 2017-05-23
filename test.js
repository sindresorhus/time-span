import test from 'ava';
import delay from 'delay';
import inRange from 'in-range';
import m from '.';

test(async t => {
	const end = m();
	await delay(100);
	t.true(inRange(end(), 80, 120));
	t.true(inRange(end.rounded(), 80, 120));
	t.true(inRange(end.seconds(), 0.08, 0.12));
	t.true(inRange(end.nanoseconds(), 80000000, 120000000));
});
