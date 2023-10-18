import React from "react";
import { useNavigate } from "react-router-dom";

import images from "src/assets/images";

const CandIInfo = (props) => {
  const navigate = useNavigate();

  const { id, name, affiliation } = props;

  return (
    <div className="CandIInfo">
      <div
        className="Link"
        onClick={() => {
          if (id) {
            navigate(`/researcher/${id}`);
            window.scrollTo(0, 0);
          }
        }}
      >
        Link
      </div>
      <div>{name}</div>
      <img src={images.vector36} className="SeparateLine"></img>
      <div>{affiliation}</div>
    </div>
  );
};

export default CandIInfo;

CandIInfo.defaultProps = {
  id: null,
  name: "name",
  affiliation: "Affiliation Institution",
};
