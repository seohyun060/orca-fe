export async function getAllProjectData() {
  return fetch("/api/projects", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

export async function getOneProjectData(id) {
  return fetch(`/api/projects/${id}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};
