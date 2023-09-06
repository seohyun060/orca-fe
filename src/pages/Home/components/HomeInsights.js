import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/home.styles.scss";
import InsightCard from "../../Insights/components/InsightCard";

const HomeInsights = () => {
  const navigate = useNavigate();

  return (
    <section className="Section">
      <div className="SectionTitle">
        <label className="MainTitleFont">Insights</label>
        <button className="ViewButton" onClick={() => navigate("/insights ")}>
          <label className="View">View All</label>
        </button>
      </div>
      <div className="EventBox">
        <InsightCard />
        <InsightCard />
        <InsightCard />
        <InsightCard />
      </div>
    </section>
  );
};

export default HomeInsights;
