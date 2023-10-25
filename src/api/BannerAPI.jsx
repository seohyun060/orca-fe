export async function getOrcaBanner() {
	return fetch('http://43.202.46.227/api/banners?is-main=false', {
		method: 'GET',
	})
		.then((res) => res.json())

		.then((data) => {
			console.log(data);

			return data;
		});
}

export async function getMainBanner() {
	return fetch('http://43.202.46.227/api/banners?is-main=true', {
		method: 'GET',
	})
		.then((res) => res.json())

		.then((data) => {
			console.log(data);

			return data;
		});
}
