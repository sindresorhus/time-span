declare function end(): number;
declare interface TimeSpanObject {
    rounded(): number;
    sec(): number;
    nano(): number;
}


type TimeSpan = () => TimeSpanObject & typeof end;
declare const timeSpan: TimeSpan;
export = timeSpan;