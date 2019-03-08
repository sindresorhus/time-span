import {expectType} from 'tsd-check';
import timeSpan from '.';

const end = timeSpan();

expectType<number>(end());
expectType<number>(end.rounded());
expectType<number>(end.seconds());
expectType<number>(end.nanoseconds());
