import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../styles/home.styles.css";
import ProjectCard from "../../Projects/components/ProjectCard";

const HomeProjects = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section className="Section">
      <div className="SectionTitle">
        <label>{t("projects")}</label>
        <button className="ViewButton" onClick={() => navigate("/projects")}>
          <label>{t("view_all")}</label>
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
