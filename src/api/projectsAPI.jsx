export async function getAllProjectData() {
  return fetch(`https://api-orca.beamworks.co.kr/api/projects?store=false`, {
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
  try {
    return await fetch(`https://api-orca.beamworks.co.kr/api/projects/${id}`, {
      method: "GET",
    }).then((res) => res.json());
  } catch (e) {
    return "Unexpected Error";
  }
}
