import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../styles/home.styles.scss";
import ResearchCard from "../../Insights/components/InsightsCard";

const HomeInsights = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section className="Section">
      <div className="SectionTitle">
        <label>{t("insights")}</label>
        <button
          className="ViewButton"
          onClick={() => {
            navigate("/insights ");
            window.scrollTo(0, 0);
          }}
        >
          {t("view_all")}
        </button>
      </div>
      <div className="EventBoxSlide">
        <ResearchCard />
        <ResearchCard />
        <ResearchCard />
        <ResearchCard />
      </div>
    </section>
  );
};

export default HomeInsights;
