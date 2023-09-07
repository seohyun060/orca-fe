import React from "react";

import ProjectExplore from "./components/ProjectExplore";

import "src/pages/Home/styles/home.styles.scss";
import "./style/projects.css";

const PrejectsPage = () => {
  return (
    <div className="Projects">
      <ProjectExplore />
      <section classname="Section">
        <button className="LeadMoreButton">
          <label>Read More</label>
        </button>
      </section>
    </div>
  );
};

export default PrejectsPage;
