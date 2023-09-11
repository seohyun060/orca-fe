import React from "react";

import images from "src/assets/images";

const CandIInfo = (props) => {
  const { Name, AffiliatedInstitution } = props;

  return (
    <div className="CandIInfo">
      <div className="Link">Link</div>
      <div>{Name}</div>
      <img src={images.vector36} className="SeparateLine"></img>
      <div>{AffiliatedInstitution}</div>
    </div>
  );
};

export default CandIInfo;
