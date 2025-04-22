import { check } from "k6";
import { setLimit, buyBolton } from "./lib/api.js";

export let options = {
	stages: [
		{ duration: "1m", target: 50 },
		{ duration: "3m", target: 50 },
		{ duration: "1m", target: 0 },
	],
	thresholds: {
		http_req_duration: ["p(95)<500"],
	},
};

export default function () {
	let r1 = setLimit({ userId: `load-${__VU}`, limit: 100 });
	check(r1, { "setLimit OK": (r) => r.status === 200 });

	let r2 = buyBolton({ userId: `load-${__VU}`, type: "data", amount: 1 });
	check(r2, { "buyBolton OK": (r) => r.status === 201 });
}
