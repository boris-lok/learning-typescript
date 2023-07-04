import { describe, expect, test } from "@jest/globals";

import { shallowDifferences } from '.'


describe(shallowDifferences, () => {
	test.each([
		[[], [], []],
		[["a"], [], undefined],
		[[], ["a"], undefined],
		[["a"], ["a"], ["a"]],
		[
			["a", "c"],
			["a", "c"],
			["a", "c"],
		],
		[
			["a", "c"],
			["c", "a"],
			[undefined, undefined],
		],
		[
			["a", "c"],
			["a", "a"],
			["a", undefined],
		],
		[
			["c", "a"],
			["a", "a"],
			[undefined, "a"],
		],
		[["c", "a"], ["c", "a", "t"], undefined],
		[
			["a", "c", "g", "t"],
			["a", "c", "g", "t"],
			["a", "c", "g", "t"],
		],
		[
			["a", "c", "g", "t"],
			["a", "c", "g", "a"],
			["a", "c", "g", undefined],
		],
		[
			["a", "c", "g", "t"],
			["a", "c", "a", "t"],
			["a", "c", undefined, "t"],
		],
	])("%j %j", (a, b, result) => {
		expect(shallowDifferences(a, b)).toEqual(result);
	});
});
