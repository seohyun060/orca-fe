import React, { useState, useEffect } from "react";

import ProjectCard from "./ProjectCard";

import images from "src/assets/images";

import dummyData from "./dummyData";

const ProjectExplore = (props) => {
  const { projStatus, projID, projTitle, projCategory, projLocation } = props;

  const [projectData, setProjectData] = useState([1]);
  const [isYearlyChecked, setIsYearlyChecked] = useState([false, false, false]);
  const [isStatusChecked, setIsStatusChecked] = useState([true, false, false]);
  const [tempData, setTempData] = useState(dummyData);

  const category = ["ORCA Projects", "CadAI-B", "CadAI-T", "Chat AI"];
  const yearly = ["The past year", "The past 3 years", "The past 5 years"];
  const status = ["Active", "Completed", "Terminated"];

  const onCateoryClick = () => {};

  const getProjectData = () => {};

  console.log(tempData);

  // const filterYearly = (checked, criteria) => {
  //   if (checked == true) {
  //     setIsYearlyChecked(false);
  //   } else if (checked == false) {
  //     setIsYearlyChecked(true);
  //     tempData.filter((data) => (data.yearly = criteria));
  //   }
  // };
  // const filterStatus = (criteria, index) => {
  //   console.log(isStatusChecked);
  //   console.log(isStatusChecked[index]);
  //   if (isStatusChecked[index] == true) {
  //     console.log(true);
  //     let temp = isStatusChecked;
  //     temp[index] = !temp[index];
  //     setIsStatusChecked(temp);
  //     isStatusChecked.map((checked, index) => {
  //       if (checked[index]) {
  //         setTempData(tempData.filter((data) => (data.status = criteria)));
  //       }
  //     });
  //   } else if (isStatusChecked[index] == false) {
  //     console.log(false);
  //     setIsStatusChecked((isStatusChecked[index] = true));
  //     isStatusChecked.map((checked, index) => {
  //       if (checked[index]) {
  //         let temp = isStatusChecked;
  //         temp[index] = !temp[index];
  //         setIsStatusChecked(temp);
  //         setTempData(tempData.filter((data) => (data.status = criteria)));
  //       }
  //     });

  //     console.log(criteria, isStatusChecked);
  //   }
  // };

  const onSearchChange = () => {
    const value = document.getElementById("search").value;
    setTempData(
      dummyData.filter((data) => {
        console.log(data);
        console.log(value);
        if (data.title.includes(value)) {
          console.log(true);
          return true;
        }
      })
    );
    console.log(value);
    console.log(tempData);
  };

  console.log(tempData);

  useEffect(() => {}, []);

  return (
    <section className="Section">
      <div className="SectionTitle">Explore ORCA Projects</div>
      <div className="ProjectExplore">
        <div className="ProjectExploreUpperBar">
          <div className="CategoryBar">
            {/* 추후에 동적생성? */}
            <button>ORCA Projects</button>
            <button>CadAI-B</button>
            <button>CadAI-T</button>
            <button>Chat AI</button>
          </div>
          <div className="SearchBar">
            <input
              type="text"
              placeholder="search"
              name="search"
              id="search"
              onChange={() => {
                onSearchChange();
              }}
            />
            <img src={images.search}></img>
          </div>
        </div>
        {/* 데이터가 없을때의 페이지 생성 */}
        {projectData.length != 0 ? (
          <div className="ProjectList">
            {tempData.map((temp) => (
              <ProjectCard
                title={temp.title}
                status={temp.status}
                prjoID={temp.projID}
                category={temp.category}
                location={temp.location}
                projDate={temp.projDate}
              />
            ))}
          </div>
        ) : (
          <div className="ResultEmpty">Result Empty</div>
        )}
        <div className="ProjectSelectionSector">
          <div className="ProjectSelectionBar">
            <div className="title">Yearly</div>
            {yearly.map((yearly, index) => (
              <div className="sub">
                {yearly}
                <input
                  type="checkbox"
                  key={yearly}
                  checked={isYearlyChecked}
                  // onChange={(e) => filterYearly(isYearlyChecked, yearly)}
                />
              </div>
            ))}
          </div>
          <div className="ProjectSelectionBar">
            <div className="title">Research status</div>
            {status.map((status, index) => (
              <div className="sub">
                {status}
                {/* checkbox 이미지 처리 */}
                <input
                  type="checkbox"
                  key={status}
                  checked={isStatusChecked[index]}
                  // onChange={(e) => filterStatus(status, index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectExplore;
