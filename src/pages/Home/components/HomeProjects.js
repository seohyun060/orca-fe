import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../styles/home.styles.css";
import ProjectCard from "../../Projects/components/ProjectCard";

import ProjectDummyData from "../../Projects/components/ProjectDummyData";

const HomeProjects = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section className="Section">
      <div className="SectionTitle">
        <label>{t("projects")}</label>
        <button
          className="ViewButton"
          onClick={() => {
            navigate("/projects");
            window.scrollTo(0, 0);
          }}
        >
          {t("view_all")}
        </button>
      </div>
      <div className="ProjectBox">
        <ProjectCard
          title={ProjectDummyData[0].title}
          status={ProjectDummyData[0].status}
          projID={ProjectDummyData[0].projID}
          category={ProjectDummyData[0].category}
          location={ProjectDummyData[0].location}
          projDate={ProjectDummyData[0].projDate}
        />
        <ProjectCard
          title={ProjectDummyData[1].title}
          status={ProjectDummyData[1].status}
          projID={ProjectDummyData[1].projID}
          category={ProjectDummyData[1].category}
          location={ProjectDummyData[1].location}
          projDate={ProjectDummyData[1].projDate}
        />
        <ProjectCard
          title={ProjectDummyData[2].title}
          status={ProjectDummyData[2].status}
          projID={ProjectDummyData[2].projID}
          category={ProjectDummyData[2].category}
          location={ProjectDummyData[2].location}
          projDate={ProjectDummyData[2].projDate}
        />
      </div>
    </section>
  );
};

export default HomeProjects;
