import React from "react";
import '../style/Insight.scss'
import images from "src/assets/images";

export default function InsightCard(props) {
  return (
    <div className="InsightCard">
      <img className="InsightImage" src={images.logo_orca}></img>
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
