import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../styles/home.styles.css";
import ProjectCard from "../../Projects/components/ProjectCard";

import ProjectDummyData from "../../Projects/components/ProjectDummyData";

import { getAllProjectData } from "src/api/projectsAPI";

const HomeProjects = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    getAllProjectData().then((data) => {
      let dummy = [];
      for (let i = 0; i < 3; i++) {
        dummy.push(data.data[i]);
      }
      setProjectData(dummy);
    });

    let dummy = [];
    for (let i = 0; i < 3; i++) {
      dummy.push(projectData[i]);
    }
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
        {/* 우선 앞에서 세개 가져옴 */}
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
