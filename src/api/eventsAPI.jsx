import client from "./client.js";

export async function getAllEventData(end) {
  return fetch(`https://api-orca.beamworks.co.kr/api/events?is-ended=${end}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

export async function getOneEventData(id) {
  return fetch(`https://api-orca.beamworks.co.kr/api/events/${id}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}
