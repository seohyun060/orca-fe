import React from "react";
import "../style/Project.scss";

export default function ProjectCard() {
  return (
    <article className="ProjectContent">
      {/* 진행상황 및 프로젝트번호 */}
      <div className="RowBox">
        <p className="Completed">• Completed</p>
        <p className="PID">Project ID: 2.13454835226345</p>
      </div>
      {/* 제목 */}
      <div className="RowBox">
        <div className="Title">
          Real-time Decision Support by Light-weighted AI Model Trained with
          Large-scale Data for Breast Cancer Diagnosis
        </div>
      </div>
      {/* 과제카테고리? */}
      <div className="RowBox">
        <label className="Category">CADAI-B</label>
      </div>
      {/* 지역 및 상세 페이지 버튼 */}
      <div className="RowBox">
        <p className="Location">Location : Bukgu, Daegu, Korea</p>
        <button className="LeadMoreButton">Read More</button>
      </div>
    </article>
  );
}
