import React, { useState, useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../style/projects.css";

export default function ProjectCard(props) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // projID를 통해 project정보 가져온 후 내용출력
  const {
    shortForm,
    inProject,
    title,
    status,
    projID,
    category,
    location,
    projDate,
  } = props;

  const projectDate = new Date(projDate);
  const projectDateFormat =
    projectDate.getDate() +
    "." +
    projectDate.getMonth() +
    "." +
    projectDate.getFullYear();

  const [statusSector, setStatusSector] = useState(<></>);

  const makeStatusSector = () => {
    if (status === "Completed") {
      setStatusSector(
        <p className="ProjectCardProgress Completed">• Completed</p>
      );
    } else if (status === "Terminated") {
      setStatusSector(
        <p className="ProjectCardProgress Terminated">• Terminated</p>
      );
    } else if (status === "Active") {
      setStatusSector(<p className="ProjectCardProgress Active">• Active</p>);
    }
  };

  useEffect(() => {
    makeStatusSector();
  }, [status]);

  return shortForm ? (
    // 추후 projID 받아 이동
    <article
      className="ProjectCardContent shortForm"
      onClick={() => navigate("/projects/default")}
    >
      <div className="ProjectCardTitle shortForm">{title}</div>
      <div className="ProjectDate ShortForm">{projDate}</div>
    </article>
  ) : (
    <article
      className={
        inProject ? "ProjectCardContent inProject" : "ProjectCardContent"
      }
    >
      <div className="RowBox">
        {statusSector}
        <p className="ProjectCardID">
          {t("project_id")}: {projID}
        </p>
      </div>
      <div className="RowBox">
        <div className="ProjectCardTitle">{title}</div>
        <div className="ProjectDate">{projectDateFormat}</div>
      </div>
      <div className="RowBox">
        <label className="ProjectCardCategory">{category}</label>
      </div>
      <div className="RowBox">
        <p className="ProjectCardLocation">
          {t("locaion")} : {location}
        </p>
        <button
          className="ReadMoreButton"
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
};
