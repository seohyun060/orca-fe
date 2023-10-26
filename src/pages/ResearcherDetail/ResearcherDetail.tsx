import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./styles/researcherdetail.styles.css";
import images from "src/assets/images";
import { Publication } from "@typedef/types";
import PublicationCard from "../Projects/components/PublicationCard";
type Props = {
  name: string;
  profile: string;
  department: string;
  project: string;
  publist: number[];
  navigate: (e: string) => void;
  onBackClick: () => void;
  publication: Publication[];
  linkedIn: string;
  twitter: string;
  biography: string;
};

const ResearcherDetail = ({
  name,
  profile,
  department,
  project,
  publist,
  navigate,
  onBackClick,
  publication,
  linkedIn,
  twitter,
  biography,
}: Props) => {
  const { t } = useTranslation();
  return (
    <div className="researcherdetail">
      <div
        className="researcherdetail-back"
        onClick={() => {
          onBackClick();
        }}
      >
        <div className="researcherdetail-back-box">
          <img src={images.back_arrow} />
          <div>{t("back")}</div>
        </div>
      </div>
      <div className="researcherdetail-individual">
        {t("individual_esearcher")}
      </div>
      <div className="researcherdetail-profile">
        <img src={profile} />
        <div className="researcherdetail-profile-name">{name}</div>
        <div className="researcherdetail-profile-department">{department}</div>
        <div className="researcherdetail-profile-project">{project}</div>
        <div className="researcherdetail-profile-icon">
          <div
            onClick={() => {
              window.location.href = linkedIn;
            }}
          >
            L
          </div>
          <div
            onClick={() => {
              window.location.href = twitter;
            }}
          >
            T
          </div>
        </div>
      </div>
      <div className="researcherdetail-biography">
        <div className="researcherdetail-biography-head">{t("biography")}</div>
        <div className="researcherdetail-biography-body">{biography}</div>
      </div>
      <div className="researcherdetail-line">
        <div></div>
      </div>
      <div className="researcherdetail-publication">
        <div className="head">{t("publications")}</div>
        {publication.map((pub, index) => (
          <PublicationCard
            // Publication API 연동
            title={pub.title}
            projDate={pub.pubYear}
            link={pub.link}
          />
        ))}
      </div>
      <div className="researcherdetail-back-container">
        <div className="readmore" onClick={() => onBackClick()}>
          Back
        </div>
      </div>
      {/* //<ProjectCard shortForm={true} /> */}
    </div>
  );
};

export default ResearcherDetail;
