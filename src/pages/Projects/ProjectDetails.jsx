import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import moment from "moment";

import "./style/projects.css";

import images from "src/assets/images";

import ProjectMenuBar from "./components/ProjectMenuBar";
import CandIInfo from "./components/CandIInfo";
import PublicationCard from "./components/PublicationCard";

import { getOneProjectData, postProjectForm } from "src/api/projectsAPI";

const PrejectsDetails = (props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const StudyPharagraph = useRef(1);
  const [refallocated, setRefAllocated] = useState(false);
  const params = useParams();

  const projID = params.id;

  const [is404, setIs404] = useState(false);
  const [projectData, setProjectData] = useState();

  const [isPharagraphOpen, setIsPharagraphOpen] = useState(false);
  const [isInclCriteriaOpen, setIsInclCriteriaOpen] = useState(false);
  const [isExclCriteriaOpen, setIsExclCriteriaOpen] = useState(false);
  const [isInvTreatOpen, setIsInvTreatOpen] = useState(false);
  const [isStudyResultOpen, setStudyResultOpen] = useState(false);

  const studyTypes = {
    CADAI_B: "CadAI-B",
    CADAI_T: "CadAI-T",
    CHAT_AI: "Chat AI",
  };

  // 데이터에서 상태를 받아올 때 사용
  const [statusSector, setStatusSector] = useState(<></>);

  const makeStatusSector = (status) => {
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

  const openPharagraph = () => {
    if (!isPharagraphOpen) {
      StudyPharagraph.current.style.display = "block";
    } else {
      StudyPharagraph.current.style.display = "-webkit-box";
    }
    setIsPharagraphOpen(!isPharagraphOpen);
  };

  useEffect(() => {
    getOneProjectData(projID).then((data) => {
      if (data === "Unexpected Error" || data.status !== 200) {
        setIs404(true);
        throw new Error("Wrong Project Path");
        return;
      }
      makeStatusSector(data.data.status);
      setProjectData(data.data);
    });
  }, []);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (StudyPharagraph.current) {
      const newHeight = StudyPharagraph.current.scrollHeight;
      setHeight(newHeight);
    }
  });

  // 백엔드 데이터 확인 후 어떤식으로 나눌껀지 생각
  return (
    <>
      {!is404 ? (
        <div className="Projects">
          <section className="ProjectDetailsSection">
            <div className="BackImage" onClick={() => navigate(-1)}>
              <img className="arrow" src={images.back_arrow} />
              <div>Back</div>
            </div>
            <div className="ProjectStatus">{statusSector}</div>
            <div className="ProjectTitle">
              {projectData ? projectData.projectTitle : ""}
            </div>
            <div className="ProjectGird">
              <article className="StudyOverviewContents Article">
                <div className="StudyOverview ArticleTitle">
                  {t("study_overview")}
                </div>
                <div className="Contents" ref={StudyPharagraph}>
                  {projectData ? projectData.overview : ""}
                </div>
                {height > 280 &&
                  (!isPharagraphOpen ? (
                    <button className="ShowMoreButton" onClick={openPharagraph}>
                      + {t("show_more")}
                    </button>
                  ) : (
                    <button className="ShowMoreButton" onClick={openPharagraph}>
                      - {t("fold")}
                    </button>
                  ))}

                <div className="ProjectOfficial">
                  <div className="SubjectName">{t("study_title")}</div>
                  <div className="Contents">
                    {projectData ? projectData.officialTitle : ""}
                  </div>
                </div>
                <div className="ProjectCondition">
                  <div className="SubjectName">{t("study_condition")}</div>
                  {projectData && projectData.conditions && (
                    <button>
                      <label>{projectData.conditions}</label>
                    </button>
                  )}
                </div>
              </article>
              <article className="StudyInformation Article">
                <div className="Information">
                  <div className="SubjectName">Study Start (Actual)</div>
                  <div className="Content">
                    {projectData
                      ? moment(projectData.startDate).format("YY.MM.DD")
                      : ""}
                  </div>
                </div>
                <div className="Information">
                  <div className="SubjectName">
                    Study Completion (Estimated)
                  </div>
                  <div className="Content">
                    {projectData
                      ? moment(projectData.endDate).format("YY.MM.DD")
                      : ""}
                  </div>
                </div>
                <div className="Information">
                  <div className="SubjectName">Enrollment (Estimated)</div>
                  <div className="Content">
                    {projectData ? projectData.enrollment : ""}
                  </div>
                </div>
                <div className="Information">
                  <div className="SubjectName">Study Type</div>
                  <div className="Content">
                    {projectData ? studyTypes[projectData.studyType] : ""}
                  </div>
                </div>
                <div className="Information">
                  <div className="SubjectName">Other Study ID Numbers</div>
                  <div className="Content">
                    {projectData ? projectData.otherStudyId : ""}
                  </div>
                </div>
              </article>
              <article className="Contact Article">
                <div className="ArticleTitle">{t("contacts_location")}</div>
                <div className="Information">
                  <div>Name : {projectData ? projectData.name : ""}</div>
                  <div>
                    Number : {projectData ? projectData.phoneNumber : ""}
                  </div>
                  <div>Email : {projectData ? projectData.email : ""}</div>
                  <div>
                    Location : {projectData ? projectData.location : ""}
                  </div>
                </div>
              </article>
              <article className="ParticipationCreteria Article">
                <div className="ArticleTitle">
                  {t("participation_criteria")}
                </div>
                <ProjectMenuBar
                  isMenubarOpen={isInclCriteriaOpen}
                  setisMenubarOpen={setIsInclCriteriaOpen}
                  Name={t("inclusion_criteria")}
                  Content={
                    <div className="MenuBarContent">
                      {projectData ? projectData.inclusionCriteria : ""}
                    </div>
                  }
                />
                <ProjectMenuBar
                  isMenubarOpen={isExclCriteriaOpen}
                  setisMenubarOpen={setIsExclCriteriaOpen}
                  Name={t("exclusion_criteria")}
                  Content={
                    <div className="MenuBarContent">
                      {projectData ? projectData.exclusionCriteria : ""}
                    </div>
                  }
                />
              </article>
              <article className="CreteriaInformation Article">
                <div className="Information">
                  <div className="SubjectName">Ages eligible for study</div>
                  <div className="Content">
                    {projectData ? projectData.ageEligible : ""}
                  </div>
                </div>
                <div className="Information">
                  <div className="SubjectName">Sexes eligible for study</div>
                  <div className="Content">
                    {projectData ? projectData.sexEligible : ""}
                  </div>
                </div>
                <div className="Information">
                  <div className="SubjectName">Accepts healthy volunteers</div>
                  <div className="Content">
                    {projectData ? projectData.acceptedHealthy : ""}
                  </div>
                </div>
                <div className="Information">
                  <div className="SubjectName">Sampling method</div>
                  <div className="Content">
                    {projectData ? projectData.samplingMethod : ""}
                  </div>
                </div>
              </article>
              <article className="StudyPlan Article">
                <div className="ArticleTitle">{t("study_plan")}</div>
                <div className="SubjectName">{t("design_details")}</div>
                <div className="Content">
                  Observational Model :{" "}
                  {projectData ? projectData.observationalModel : ""}
                  <br />
                  Perspective : {projectData ? projectData.timePerspective : ""}
                </div>
                <ProjectMenuBar
                  isMenubarOpen={isInvTreatOpen}
                  setisMenubarOpen={setIsInvTreatOpen}
                  Name="Intervention / Treatment"
                  Content={
                    <div className="MenuBarContent">
                      {projectData ? projectData.interventionTreatment : ""}
                    </div>
                  }
                />
                <ProjectMenuBar
                  isMenubarOpen={isStudyResultOpen}
                  setisMenubarOpen={setStudyResultOpen}
                  Name={t("measures")}
                  Content={
                    <div className="MeasuresTable">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Outcome Measure</th>
                          <th>Measure Description</th>
                          <th>Time frame</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>Primary</th>
                          <td>
                            <div className="element">
                              {projectData
                                ? projectData.primaryOutcome[0]
                                : null}
                            </div>
                          </td>
                          <td>
                            <div className="element">
                              {projectData
                                ? projectData.primaryOutcome[1]
                                : null}
                            </div>
                          </td>
                          <td>
                            <div className="element">
                              {projectData
                                ? projectData.primaryOutcome[2]
                                : null}
                            </div>
                          </td>
                        </tr>
                        {projectData ? (
                          projectData.secondaryOutcome ? (
                            <tr>
                              <th>Secondary</th>
                              <td>
                                <div className="element">
                                  {projectData.secondaryOutcome[0]}
                                </div>
                              </td>
                              <td>
                                <div className="element">
                                  {projectData.secondaryOutcome[1]}
                                </div>
                              </td>
                              <td>
                                <div className="element">
                                  {projectData.secondaryOutcome[2]}
                                </div>
                              </td>
                            </tr>
                          ) : null
                        ) : null}
                      </tbody>
                    </div>
                  }
                />
              </article>
              <article className="CandI Article">
                <div className="ArticleTitle">{t("CandI")}</div>
                <div className="SubjectName">{t("principal_investigator")}</div>
                {projectData ? (
                  projectData.pis[0] != null ? (
                    projectData.pis.map((data) => (
                      <CandIInfo
                        id={data.id}
                        name={data.name}
                        affiliation={data.affiliation}
                      />
                    ))
                  ) : (
                    <CandIInfo id={null} name="None" affiliation="None" />
                  )
                ) : (
                  <CandIInfo />
                )}
                <div className="SubjectName">{t("collaborators")}</div>
                {projectData ? (
                  projectData.collaborators[0] != null ? (
                    projectData.collaborators.map((data) => (
                      <CandIInfo
                        id={data.id}
                        name={data.name}
                        affiliation={data.affiliation}
                      />
                    ))
                  ) : (
                    <CandIInfo id={null} name="None" affiliation="None" />
                  )
                ) : (
                  <CandIInfo />
                )}
              </article>
              <article className="Publications Article">
                <div className="ArticleTitle">{t("related_publications")}</div>
                {projectData ? (
                  projectData.publications.map((data) => (
                    <PublicationCard
                      // Publication API 연동
                      title={data.title}
                      projDate={data.pubYear}
                      link={data.link}
                    />
                  ))
                ) : (
                  <></>
                )}
              </article>
            </div>
          </section>
        </div>
      ) : (
        // <div className="ErrorHandlingPage">Wrong Page</div>
        <></>
      )}
    </>
  );
};

export default PrejectsDetails;
