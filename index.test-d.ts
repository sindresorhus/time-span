import {expectType} from 'tsd';
import timeSpan from './index.js';

const end = timeSpan();

expectType<number>(end());
expectType<number>(end.rounded());
expectType<number>(end.seconds());
expectType<bigint>(end.nanoseconds());
