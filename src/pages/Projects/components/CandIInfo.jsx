import React from "react";
import { useNavigate } from "react-router-dom";

import images from "src/assets/images";

const CandIInfo = (props) => {
  const navigate = useNavigate();

  const { link, Name, AffiliatedInstitution } = props;

  return (
    <div className="CandIInfo">
      <div
        className="Link"
        onClick={() => {
          navigate(link);
          window.scrollTo(0, 0);
        }}
      >
        Link
      </div>
      <div>{Name}</div>
      <img src={images.vector36} className="SeparateLine"></img>
      <div>{AffiliatedInstitution}</div>
    </div>
  );
};

export default CandIInfo;
