export async function getAllEventData() {
  return fetch(`https://api-orca.beamworks.co.kr/api/events`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

export async function getOneEventData(id) {
  try {
    return await fetch(`https://api-orca.beamworks.co.kr/api/events/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  } catch (e) {
    return "Unexpectied Error";
  }
}
