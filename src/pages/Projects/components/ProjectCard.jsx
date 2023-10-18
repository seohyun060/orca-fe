import React, { useState, useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

import moment from "moment";

import "../style/projects.css";

export default function ProjectCard(props) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // projID를 통해 project정보 가져온 후 내용출력
  const {
    id,
    inProject,
    projectTitle,
    status,
    projectId,
    studyType,
    location,
    startDate,
  } = props;

  const categorytest = {
    ALL : "ORCA Projects",
    CADAI_B : "CadAI-B",
    CADAI_T : "CadAI-T",
    CHAT_AI : "Chat AI",
  }

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  
  const projectDateFormat = moment(startDate).format("D.M.YYYY");
  // const projectDateFormat =
  //   projectDate.getDate() +
  //   "." +
  //   (projectDate.getMonth() + 1) +
  //   "." +
  //   projectDate.getFullYear();

  const [statusSector, setStatusSector] = useState(<></>);

  const makeStatusSector = () => {
    if (status === "COMPLETED") {
      setStatusSector(
        <p className="ProjectCardProgress Completed">• Completed</p>
      );
    } else if (status === "TERMINATED") {
      setStatusSector(
        <p className="ProjectCardProgress Terminated">• Terminated</p>
      );
    } else if (status === "ACTIVE") {
      setStatusSector(<p className="ProjectCardProgress Active">• Active</p>);
    }
  };

  useEffect(() => {
    makeStatusSector();
  }, [status]);

  return(
    <article
      className={
        inProject ? "ProjectCardContent inProject" : "ProjectCardContent"
      }
    >
      <div className="RowBox">
        {statusSector}
        <p className="ProjectCardID">
          {t("project_id")}: {projectId}
        </p>
      </div>
      <div className="RowBox">
        <div className="ProjectCardTitle">{projectTitle}</div>
        <div className="ProjectDate">{projectDateFormat}</div>
      </div>
      <div className="RowBox">
        <label className="ProjectCardCategory">{categorytest[studyType]}</label>
      </div>
      <div className="RowBox">
        <p className="ProjectCardLocation">
          {t("locaion")} : {location}
        </p>
        <button
          className="ReadMoreButton"
          // 추후 projID를 받아와 변경
          onClick={() => {
            navigate(`/projects/${id}`);
            window.scrollTo(0, 0);
          }}
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
  projectTitle: "N/A",
  status: "N/A",
  projectId: "N/A",
  studyType: "N/A",
  location: "N/A",
  startDate: "1900.01.01",
};
