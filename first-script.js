import http from "k6/http";
import { sleep } from "k6";

export const options = {
	duration: "15s",
	vus: 1,
	thresholds: {
		http_req_failed: ["rate<0.01"], // http errors should be less than 1%
		http_req_duration: ["p(95)<500"], // 95 percent of response times must be below 500ms
	},
};

export default function () {
	const res = http.get("https://quickpizza.grafana.com/");
	sleep(1);
}
