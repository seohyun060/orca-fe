import React from "react";

import ProjectExplore from "./components/ProjectExplore";

import "./style/projects.css";

const PrejectsPage = () => {
  return (
    <div className="Projects">
      <ProjectExplore />
      <section className="Section">
        <button className="LeadMoreButton">
          <label>Read More</label>
        </button>
      </section>
    </div>
  );
};

export default PrejectsPage;
