/**
 * @returns Elapsed milliseconds.
 */
export interface TimeEndFunction {
	(): number;

	/**
	 * @returns Elapsed milliseconds rounded.
	 */
	rounded(): number;

	/**
	 * @returns Elapsed seconds.
	 */
	seconds(): number;

	/**
	 * @returns Elapsed nanoseconds.
	 */
	nanoseconds(): number;
}

/**
 * Simplified high resolution timing.
 *
 * @returns A function that returns the time difference.
 */
export default function timeSpan(): TimeEndFunction;
