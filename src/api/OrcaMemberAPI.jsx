export async function postOrcaMembers(email) {
	let data = new FormData();
	data.append('email', email);
	return fetch('http://43.202.46.227/api/orcaMembers', {
		method: 'POST',
		body: data,
	})
		.then((res) => res.json())

		.then((data) => {
			console.log(data);

			return data;
		});
}
