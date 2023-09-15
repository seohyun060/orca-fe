import React from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

import ProjectDetails from "../ProjectDetails";

import "../style/projects.css";

export default function ProjectCard(props) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // projID를 통해 project정보 가져온 후 내용출력
  const { shortForm, title, status, projID, category, location, projDate } =
    props;

  return shortForm ? (
    // 추후 projID 받아 이동
    <article
      className="ProjectCardContent shortForm"
      onClick={() => navigate("/projects/default")}
    >
      <div className="ProjectCardTitle shortForm">{title}</div>
      <div className="ProjectDate">{projDate}</div>
    </article>
  ) : (
    <article className="ProjectCardContent">
      {/* 진행상황 및 프로젝트번호 */}
      <div className="RowBox">
        <p className="ProjectCardProgress">• {status}</p>
        <p className="ProjectCardID">{t("project_id")}: {projID}</p>
      </div>
      {/* 제목 */}
      <div className="RowBox">
        <div className="ProjectCardTitle">{title}</div>
      </div>
      {/* 과제카테고리? */}
      <div className="RowBox">
        <label className="ProjectCardCategory">{category}</label>
      </div>
      {/* 지역 및 상세 페이지 버튼 */}
      <div className="RowBox">
        <p className="ProjectCardLocation">{t("locaion")} : {location}</p>
        <button
          className="LeadMoreButton"
          // 추후 projID를 받아와 변경
          onClick={() => navigate("/projects/default")}
          // onClick={() => navigate("/project/" + {projID})}
        >
          {t("read_more")}
        </button>
      </div>
    </article>
  );
}

// 추후 삭제
ProjectCard.defaultProps = {
  title: "test",
  status: "test",
  projID: "test",
  category: "test",
  location: "test",
  projDate: "test",
}