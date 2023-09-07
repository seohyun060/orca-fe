import React from "react";
import "../style/projects.css";

export default function ProjectCard(props) {
  return (
    <article className="ProjectContent">
      {/* 진행상황 및 프로젝트번호 */}
      <div className="RowBox">
        <p className="ProjectProgress">• Completed</p>
        <p className="ProjectID">Project ID: 2.13454835226345</p>
      </div>
      {/* 제목 */}
      <div className="RowBox">
        <div className="ProjectTitle">
          Real-time Decision Support by Light-weighted AI Model Trained with
          Large-scale Data for Breast Cancer Diagnosis
        </div>
      </div>
      {/* 과제카테고리? */}
      <div className="RowBox">
        <label className="ProjectCategory">CADAI-B</label>
      </div>
      {/* 지역 및 상세 페이지 버튼 */}
      <div className="RowBox">
        <p className="ProjectLocation">Location : Bukgu, Daegu, Korea</p>
        <button className="LeadMoreButton">Read More</button>
      </div>
    </article>
  );
}
