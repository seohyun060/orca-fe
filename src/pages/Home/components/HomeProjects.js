import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../styles/home.styles.css";
import ProjectCard from "../../Projects/components/ProjectCard";

import { getAllProjectData, getSeletedProjectData } from "src/api/projectsAPI";

const HomeProjects = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    getSeletedProjectData().then((data) => {
      console.log(data)
      setProjectData(data.data);
    });
  }, []);

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
        {/* 데이터가 없을때는 어떻게? */}
        {projectData == undefined && <ProjectCard
            inProject={false}
            projectTitle={"Preparing..."}
          />}
        {projectData.map((data) => (
          <ProjectCard
            id={data.id}
            inProject={false}
            projectId={data.projectId}
            projectTitle={data.projectTitle}
            status={data.status}
            studyType={data.studyType}
            location={data.location}
            startDate={data.startDate}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeProjects;
