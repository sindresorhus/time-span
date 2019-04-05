import {expectType} from 'tsd';
import timeSpan = require('.');

const end = timeSpan();

expectType<number>(end());
expectType<number>(end.rounded());
expectType<number>(end.seconds());
expectType<number>(end.nanoseconds());
