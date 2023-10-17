export async function getResearchers() {
	return fetch('/api/researchers', {
		method: 'GET',
	})
		.then((res) => res.json())

		.then((data) => {
			console.log(data);

			return data;
		});
}

export async function getResearcherDetail(id) {
	return fetch(`/api/researchers/${id}`, {
		method: 'GET',
	})
		.then((res) => res.json())

		.then((data) => {
			console.log(data);

			return data;
		});
}
