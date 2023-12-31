import React from "react";

import images from "src/assets/images";

const ProjectMenuBar = (props) => {
  const {isMenubarOpen, setisMenubarOpen, Name, Content} = props;

  return (
    <>
      <div className="MenuBar" onClick={() => setisMenubarOpen(!isMenubarOpen)}>
        <ul>{Name}</ul>
        {!isMenubarOpen ? (
          <img src={images.baropen_b}></img>
        ) : (
          <img src={images.barclose_b}></img>
        )}
      </div>
      {isMenubarOpen && Content}
    </>
  );
};

export default ProjectMenuBar;
