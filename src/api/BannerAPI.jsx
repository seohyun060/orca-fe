export async function getOrcaBanner() {
	return fetch('https://api-orca.beamworks.co.kr/api/banners?is-main=false', {
		method: 'GET',
	})
		.then((res) => res.json())

		.then((data) => {
			console.log(data);

			return data;
		});
}

export async function getMainBanner() {
	return fetch('https://api-orca.beamworks.co.kr/api/banners?is-main=true', {
		method: 'GET',
	})
		.then((res) => res.json())

		.then((data) => {
			console.log(data);

			return data;
		});
}
