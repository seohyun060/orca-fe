import React from "react";
import "../style/Insight.scss";
import images from "src/assets/images";
import PdfThumbnail from "./PdfThumbnail";

export default function InsightsCard(props) {
  return (
    <div className="InsightCard">
      <div className="InsightCardHoverAction">
        <div>Read more</div>
      </div>
      <div className="InsightImage" src={images.logo_orca}>
        <PdfThumbnail
          link={
            "https://raw.githubusercontent.com/seohyun060/orca-fe-pdf/main/CadAI-B%20Initial%20Clinical%20Validation.pdf"
          }
        />
      </div>
      <div className="InsightCategory">CadAI-B</div>
      <div className="InsightTitle">
        Revolutionizing Ultrasound Technology: The Global Frontier of Artificial
        Intelligence Ultrasound
      </div>
      <div className="ViewCount">
        <img src={images.view}></img>
        <label className="CountNumber">0</label>
      </div>
    </div>
  );
}
