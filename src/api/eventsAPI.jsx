import client from './client.js';

export async function getAllEventData() {

    return fetch(`${client()}/api/events`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  };
  
  export async function getOneEventData(id) {
    return fetch(`${client()}/api/events/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  };
  