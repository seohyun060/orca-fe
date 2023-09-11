import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/home.styles.scss";
import ResearchCard from "../../Insights/components/ResearchCard";

const HomeInsights = () => {
  const navigate = useNavigate();

  return (
    <section className="Section">
      <div className="SectionTitle">
        <label>Insights</label>
        <button className="ViewButton" onClick={() => navigate("/insights ")}>
          <label className="View">View All</label>
        </button>
      </div>
      <div className="EventBox">
        <ResearchCard />
        <ResearchCard />
        <ResearchCard />
        <ResearchCard />
      </div>
    </section>
  );
};

export default HomeInsights;
