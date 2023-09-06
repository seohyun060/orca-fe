import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/home.styles.scss";
import ProjectCard from "../../Projects/components/ProjectCard";

const HomeProjects = () => {
  const navigate = useNavigate();

  return (
    <section className="Section">
      <div className="SectionTitle">
        <label className="MainTitleFont">Projects</label>
        <button className="ViewButton" onClick={() => navigate("/projects")}>
          <label>View All</label>
        </button>
      </div>
      <div className="ProjectBox">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default HomeProjects;
