export default function getProjectData() {
    fetch("/api/projects", {
      method: "GET",
      // body: formData,
    }).then((res) => res.json().then((data) => console.log("data", data)));
  };