import React from "react";
import { useNavigate, Routes, Route } from "react-router-dom";

import ProjectDetails from "../ProjectDetails";

import "../style/projects.css";

export default function ProjectCard(props) {
  const navigate = useNavigate();

  const { shortForm, projID } = props;

  // projID를 통해 project정보 가져온 후 내용출력

  return shortForm ? (
    // 추후 projID 받아 이동
    <article className="ProjectCardContent shortForm" onClick={() => navigate("/projects/default")}>
      <div className="ProjectCardTitle shortForm">
        Real-time Decision Support by Light-weighted AI Model Trained with
        Large-scale Data for Breast Cancer Diagnosis
      </div>
      <div className="ProjectDate">19.August.23</div>
    </article>
  ) : (
    <article className="ProjectCardContent">
      {/* 진행상황 및 프로젝트번호 */}
      <div className="RowBox">
        <p className="ProjectCardProgress">• Completed</p>
        <p className="ProjectCardID">Project ID: 2.13454835226345</p>
      </div>
      {/* 제목 */}
      <div className="RowBox">
        <div className="ProjectCardTitle">
          Real-time Decision Support by Light-weighted AI Model Trained with
          Large-scale Data for Breast Cancer Diagnosis
        </div>
      </div>
      {/* 과제카테고리? */}
      <div className="RowBox">
        <label className="ProjectCardCategory">CadAI-B</label>
      </div>
      {/* 지역 및 상세 페이지 버튼 */}
      <div className="RowBox">
        <p className="ProjectCardLocation">Location : Bukgu, Daegu, Korea</p>
        <button
          className="LeadMoreButton"
          // 추후 projID를 받아와 변경
          onClick={() => navigate("/projects/default")}
          // onClick={() => navigate("/project/" + {projID})}
        >
          Read More
        </button>
      </div>
    </article>
  );
}
