export async function getResearchers() {
	return fetch('https://api-orca.beamworks.co.kr/api/researchers', {
		method: 'GET',
	})
		.then((res) => res.json())

		.then((data) => {
			console.log(data);

			return data;
		});
}

export async function getResearcherDetail(id) {
	return fetch(`https://api-orca.beamworks.co.kr/api/researchers/${id}`, {
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
			//console.log(data.status);
			return data;
		});
}
