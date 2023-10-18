import client from './client.js';

export async function getAllProjectData() {
  return fetch(`${client()}/api/projects`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

export async function getOneProjectData(id) {
  return fetch(`${client()}/api/projects/${id}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};
