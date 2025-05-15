import { check } from "k6";
import { setLimit, buyBolton } from "./lib/api.js";

export let options = {
	vus: 5,
	duration: "10s",
};

export default function () {
	let r1 = setLimit({ userId: "smoke-1", limit: 100 });
	check(r1, { "setLimit status 200": (r) => r.status === 200 });

	let r2 = buyBolton({ userId: "smoke-1", type: "data", amount: 1 });
	check(r2, { "buyBolton status 201": (r) => r.status === 201 });
}
