export async function postNewsletters(email) {
	let data = new FormData();
	data.append('email', email);
	return fetch('https://api-orca.beamworks.co.kr/api/newsletters', {
		method: 'POST',
		body: data,
	})
		.then((res) => res.json())

		.then((data) => {
			console.log(data);

			return data;
		});
}
