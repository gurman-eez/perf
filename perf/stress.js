import { check } from "k6";
import { setLimit } from "./lib/api.js";

export let options = {
	stages: [
		{ duration: "2m", target: 100 },
		{ duration: "2m", target: 200 },
		{ duration: "2m", target: 400 },
		{ duration: "2m", target: 800 },
		{ duration: "2m", target: 0 },
	],
	thresholds: {
		http_req_failed: ["rate<0.01"],
		http_req_duration: ["p(95)<1000"],
	},
};

export default function () {
	let r = setLimit({ userId: `stress-${__VU}`, limit: 50 });
	check(r, { "status 200": (r) => r.status === 200 });
}
