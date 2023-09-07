import React, { useState, useEffect } from "react";

import ProjectCard from "./ProjectCard";

import images from "src/assets/images";

const ProjectExplore = () => {
  const [projectData, setProjectData] = useState([]);

  const yearly = ["The past year", "The past 3 years", "The past 5 years"];
  const status = ["Active", "Completed", "Terminated"];

  const onCateoryClick = () => {};

  const getProjectData = () => {};

  // 진행상황, 프로젝트번호, 제목, 카테고리, 지역
  // const projProgress, projID, projTitle, projCategory, projLocation

  useEffect(() => {
  }, []);

  return (
    <section className="Section">
      <div className="SectionTitle">Explore ORCA Projects</div>
      <div className="ProjectExplore">
        <div className="ProjectExploreUpperBar">
          <div className="CategoryBar">
            {/* 추후에 동적생성? */}
            <button>ORCA Projects</button>
            <button>CadAI-B</button>
            <button>CadAI-T</button>
            <button>Chat AI</button>
          </div>
          <div className="SearchBar">
            <input type="text" placeholder="search" name="search" />
            <img src={images.search}></img>
          </div>
        </div>
        {/* 데이터가 없을때의 페이지 생성 */}
        {projectData != null ? (
          <div className="ProjectList">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            {projectData.map((projectData) => {
              <ProjectCard />;
            })}
          </div>
        ) : (
          <div className="ResultEmpty">Result Empty</div>
        )}

        <div className="ProjectSelectionSector">
          <div className="ProjectSelectionBar">
            <div className="title">Yearly</div>
            {yearly.map((yearly) => (
              <div className="sub">
                {yearly}
                <input type="checkbox" key={yearly} />
              </div>
            ))}
          </div>
          <div className="ProjectSelectionBar">
            <div className="title">Research status</div>
            {status.map((status) => (
              <div className="sub">
                {status}
                {/* checkbox 이미지 처리? */}
                <input type="checkbox" key={status} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectExplore;

// projProgress: "",
// projID: "",
// projTitle: "",
// projCategory: "",
// projLocation: "",

// "• Completed", "2.13454835226345", "Real-time Decision Support by Light-weighted AI Model Trained with Large-scale Data for Breast Cancer Diagnosis", "CADAI-B", "Bukgu, Daegu, Korea"
// "• Active", "2.13454835226345", "Real-time Decision Support by Light-weighted AI Model Trained with Large-scale Data for Breast Cancer Diagnosis", "CADAI-T", "Bukgu, Daegu, Korea"
// "• Terminated", "2.13454835226345", "Real-time Decision Support by Light-weighted AI Model Trained with Large-scale Data for Breast Cancer Diagnosis", "CHAT AI", "Bukgu, Daegu, Korea"
