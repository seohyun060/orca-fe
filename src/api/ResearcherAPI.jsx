export async function getResearchers() {
	return fetch('http://43.202.46.227/api/researchers', {
		method: 'GET',
	})
		.then((res) => res.json())

		.then((data) => {
			console.log(data);

			return data;
		});
}

export async function getResearcherDetail(id) {
	return fetch(`http://43.202.46.227/api/researchers/${id}`, {
		method: 'GET',
	})
		.then((res) => res.json())

		.then((data) => {
			console.log(data);

			return data;
		});
}
