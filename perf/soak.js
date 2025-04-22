import { check } from "k6";
import { setLimit, buyBolton } from "./lib/api.js";

export let options = {
	vus: 20,
	duration: "6h",
	thresholds: {
		http_req_duration: ["p(95)<700"],
		http_reqs: ["count>10000"],
	},
};

export default function () {
	if (__ITER % 2 === 0) {
		let r1 = setLimit({ userId: `soak-${__VU}`, limit: 80 });
		check(r1, { "setLimit OK": (r) => r.status === 200 });
	} else {
		let r2 = buyBolton({ userId: `soak-${__VU}`, type: "minutes", amount: 5 });
		check(r2, { "buyBolton OK": (r) => r.status === 201 });
	}
}
