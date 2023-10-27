import client from "./client.js";

export async function getAllProjectData() {
  return fetch(`https://api-orca.beamworks.co.kr/api/projects`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

export async function getSeletedProjectData() {
  return fetch(`https://api-orca.beamworks.co.kr/api/projects?select=true`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

export async function getOneProjectData(id) {
  return fetch(`https://api-orca.beamworks.co.kr/api/projects/${id}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

export const postProjectForm = async () => {
  let data = new FormData();

  data.append("isEnded", null);
  data.append("thumbnail", null);
  data.append("title", "TestEvent1");
  data.append("startDate", "2023-09-18");
  data.append("endDate", "2023-09-19");
  data.append("isAllDay", null);
  data.append("venue", "BeamWorks");
  data.append("openingHour", null);
  data.append("relatedWebsite", null);
  data.append("purpose", null);
  data.append("explanation", null);
  data.append("mainImages", null);
  data.append("location", null);
  data.append("latitude", null);
  data.append("longitude", null);
  data.append("galleries", null);

  const testJson = {
    isEnded: null,
    thumbnail: null,
    title: "TestEvent1",
    startDate: "2023-09-18",
    endDate: "2023-09-19",
    isAllDay: false,
    venue: "BeamWorks",
    openingHour: null,
    relatedWebsite: null,
    purpose: null,
    explanation: null,
    mainImages: null,
    location: null,
    latitude: null,
    longitude: null,
    galleries: null,
  };

  fetch("/api/events", {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }).then((res) => res.json().then((data) => console.log("data", data)));

  fetch("/api/projects", {
    method: "GET",
  }).then((res) => res.json().then((data) => console.log("data", data)));

  fetch("/api/projects/2", {
    method: "DELETE",
  }).then((res) => res.json().then((data) => console.log("data", data)));
};
