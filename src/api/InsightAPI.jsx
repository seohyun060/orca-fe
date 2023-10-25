export async function getInsights() {
	return fetch('http://43.202.46.227/api/insights', {
		method: 'GET',
	})
		.then((res) => res.json())

		.then((data) => {
			console.log(data);

			return data;
		});
}
export async function getInsightDetail(id) {
	return fetch(`http://43.202.46.227/api/insights/${id}`, {
		method: 'GET',
	})
		.then((res) => res.json())

		.then((data) => {
			console.log(data);

			return data;
		});
}
