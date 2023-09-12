import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import "./style/projects.css";

import images from 'src/assets/images';

import ProjectMenuBar from "./components/ProjectMenuBar";
import CandIInfo from "./components/CandIInfo";
import ProjectCard from "./components/ProjectCard";

import dummyData from "./components/dummyData";

const PrejectsDetails = (props) => {
  const navigate = useNavigate();

  const { projID } = props;

  const [isOpen, setIsopen] = useState(true);
  const [isInclCriteriaOpen, setIsInclCriteriaOpen] = useState(false);
  const [isExclCriteriaOpen, setIsExclCriteriaOpen] = useState(false);
  const [isInvTreatOpen, setIsInvTreatOpen] = useState(false);
  const [isStudyResultOpen, setStudyResultOpen] = useState(false);

  const samplePharagraph =
    "Lorem ipsum dolor sit amet, cosectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ";
  const sampleQautation =
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, ";
  const sampleContents = (
    <div className="MenuBarContent">{sampleQautation}</div>
  );

  // 백엔드 데이터 확인 후 어떤식으로 나눌껀지 생각
  return (
    <div className="Projects">
      <section className="ProjectDetailsSection">
        <img
          className="BackImage"
          src={images.backwithletter}
          onClick={() => navigate(-1)}
        />
        <div className="ProjectTitle">
          Real-time Decision Support by Light-weighted AI Model Trained with
          Large-scale Data for Breast Cancer Diagnosis
        </div>
        <div className="ProjectGird">
          <article className="StudyOverviewContents Article">
            <div className="StudyOverview ArticleTitle">Study Overview</div>
            <div className="Contents">{samplePharagraph}</div>
            <button className="ShowMoreButton">+ Show more</button>
            <div className="ProjectOfficial">
              <div className="SubjectName">Official Title</div>
              <div className="Contents">{sampleQautation}</div>
            </div>
            <div className="ProjectCondition">
              <div className="SubjectName">Conditions</div>
              <button>
                <label>View Product Description</label>
              </button>
            </div>
          </article>
          <article className="StudyInformation Article">
            <div className="Information">
              <div className="SubjectName">Study Start (Actual)</div>
              <div className="Content">23.00.00</div>
            </div>
            <div className="Information">
              <div className="SubjectName">Study Completion (Estimated)</div>
              <div className="Content">23.00.00</div>
            </div>
            <div className="Information">
              <div className="SubjectName">Enrollment (Estimated)</div>
              <div className="Content">23.00.00</div>
            </div>
            <div className="Information">
              <div className="SubjectName">Study Type</div>
              <div className="Content">CadAI-B</div>
            </div>
            <div className="Information">
              <div className="SubjectName">Other Study ID Numbers</div>
              <div className="Content">NCC2962</div>
            </div>
          </article>
          <article className="Contact Article">
            <div className="ArticleTitle">Contancts and Locations</div>
            <div className="Information">
              <div>Name</div>
              <div>Number</div>
              <div>Email</div>
            </div>
          </article>
          <article className="ParticipationCreteria Article">
            <div className="ArticleTitle">Participation Criteria</div>
            {sampleContents}
            <ProjectMenuBar
              isMenubarOpen={isInclCriteriaOpen}
              setisMenubarOpen={setIsInclCriteriaOpen}
              Name="Inclusion Criteria"
              Content={sampleContents}
            />
            <ProjectMenuBar
              isMenubarOpen={isExclCriteriaOpen}
              setisMenubarOpen={setIsExclCriteriaOpen}
              Name="Exclusion Criteria"
              Content={sampleContents}
            />
          </article>
          <article className="StudyPlan Article">
            <div className="ArticleTitle">Study Plan</div>
            <div className="SubjectName">Design details</div>
            <div className="Content">
              Observational Model : Other Time
              <br />
              Perspective : Prospective
            </div>
            <ProjectMenuBar
              isMenubarOpen={isInvTreatOpen}
              setisMenubarOpen={setIsInvTreatOpen}
              Name="Intervention / Treatment"
              Content={sampleContents}
            />
            <ProjectMenuBar
              isMenubarOpen={isStudyResultOpen}
              setisMenubarOpen={setStudyResultOpen}
              Name="Outcome Measure / Measure Description / Time frame"
              Content={sampleContents}
            />
          </article>
          <article className="CandI Article">
            <div className="ArticleTitle">Collaborators and Investigators</div>
            <div className="SubjectName">Principal Investigator</div>
            <CandIInfo
              Name="Name"
              AffiliatedInstitution="Affiliated Institution"
            />
            <div className="SubjectName">Collaborators</div>
            <CandIInfo
              Name="Name"
              AffiliatedInstitution="Affiliated Institution"
            />
            <CandIInfo
              Name="Name"
              AffiliatedInstitution="Affiliated Institution"
            />
            <CandIInfo
              Name="Name"
              AffiliatedInstitution="Affiliated Institution"
            />
            <CandIInfo
              Name="Name"
              AffiliatedInstitution="Affiliated Institution"
            />
            <CandIInfo
              Name="Name"
              AffiliatedInstitution="Affiliated Institution"
            />
          </article>
          <article className="Publications Article">
            <div className="ArticleTitle">Publications</div>
            <ProjectCard shortForm = {true}
            title = {dummyData[0].title}
            projDate = {dummyData[0].projDate}/>
          </article>
        </div>
      </section>
    </div>
  );
};

export default PrejectsDetails;
