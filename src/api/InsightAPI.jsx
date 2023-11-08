export async function getInsights() {
	return fetch('https://api-orca.beamworks.co.kr/api/insights', {
		method: 'GET',
	})
		.then((res) => res.json())

		.then((data) => {
			console.log(data);

			return data;
		});
}
export async function getInsightDetail(id) {
	return fetch(`https://api-orca.beamworks.co.kr/api/insights/${id}`, {
		method: 'GET',
	})
		.then((res) => {
			console.log(res.status);
			if (res.status === 200) {
				return res.json();
			} else {
				return -1;
			}
		})
		.then((data) => {
			console.log(data);

			return data;
		});
}

export async function getSeletedInsightsData() {
	return fetch(`https://api-orca.beamworks.co.kr/api/insights?select=true`, {
		method: 'GET',
	})
		.then((res) => res.json())
		.then((data) => {
			return data;
		});
}
