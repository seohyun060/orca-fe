import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../styles/home.styles.scss";
import InsightsCard from "../../Insights/components/InsightsCard";

import { getSeletedInsightsData } from "src/api/InsightAPI";

const HomeInsights = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [selectedInsightsData, setSelectedInsightsData] = useState();

  useEffect(() => {
    getSeletedInsightsData().then((data) => {
      console.log(data);
      setSelectedInsightsData(data.data);
    });
  }, []);

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
      <div className="EventBoxSlide Insight">
        {selectedInsightsData &&
          selectedInsightsData.map((data) => (
            <InsightsCard
              id={data.id}
              pdfLink={data.file}
              category={data.category}
              title={data.title}
              views={data.views}
            />
          ))}
      </div>
    </section>
  );
};

export default HomeInsights;
