import { describe, expect, test } from "@jest/globals";
import { GroupedRestaurants, Restaurant, groupRestaurants } from ".";

describe('groupRestaurants', () => {
	test.each([
		[[], {}],
		[
			[{ city: "Troy", name: "Muddaddy Flats" }],
			{
				Troy: ["Muddaddy Flats"],
			},
		],
		[
			[
				{ city: "Troy", name: "Muddaddy Flats" },
				{ city: "Troy", name: "Nighthalks" },
			],
			{
				Troy: ["Muddaddy Flats", "Nighthalks"],
			},
		],
		[
			[
				{ city: "Troy", name: "Muddaddy Flats" },
				{ city: "Albany", name: "Bombers" },
			],
			{
				Troy: ["Muddaddy Flats"],
				Albany: ["Bombers"],
			},
		],
		[
			[
				{ city: "Troy", name: "Muddaddy Flats" },
				{ city: "Troy", name: "Nighthalks" },
				{ city: "Albany", name: "Bombers" },
			],
			{
				Troy: ["Muddaddy Flats", "Nighthalks"],
				Albany: ["Bombers"],
			},
		],
		[
			[
				{ city: "Troy", name: "Muddaddy Flats" },
				{ city: "Albany", name: "Bombers" },
				{ city: "Troy", name: "Nighthalks" },
			],
			{
				Troy: ["Muddaddy Flats", "Nighthalks"],
				Albany: ["Bombers"],
			},
		],
	])(
		"%j",
		(city: Restaurant[], grouped: GroupedRestaurants) => {
			expect(groupRestaurants(city)).toEqual(grouped);
		}
	);
});
