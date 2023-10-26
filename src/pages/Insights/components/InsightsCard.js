import React from "react";
import { useNavigate } from "react-router-dom";

import "../style/Insight.scss";
import images from "src/assets/images";
import PdfThumbnail from "./PdfThumbnail";

export default function InsightsCard(props) {
  const navigate = useNavigate();
  const { id, pdfLink, category, title, views } = props;

  return (
    <div className="InsightCard">
      <div className="InsightCardHoverAction">
        <div
          onClick={() => {
            navigate(`/insights/${id}`);
            window.scrollTo(0, 0);
          }}
        >
          Read more
        </div>
      </div>
      <div className="InsightImage" src={images.logo_orca}>
        <PdfThumbnail link={pdfLink} />
      </div>
      <div className="InsightCategory">{category}</div>
      <div className="InsightTitle">{title}</div>
      <div className="ViewCount">
        <img src={images.view}></img>
        <label className="CountNumber">{views}</label>
      </div>
    </div>
  );
}
