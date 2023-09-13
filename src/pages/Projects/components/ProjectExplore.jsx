import React, { useState, useEffect } from "react";

import ProjectCard from "./ProjectCard";

import images from "src/assets/images";

import ProjectDummyData from "./ProjectDummyData";

const ProjectExplore = (props) => {
  const { projStatus, projID, projTitle, projCategory, projLocation } = props;
  const [tempData, setTempData] = useState(ProjectDummyData);

  const [category, setCategory] = useState([
    "ORCA Projects",
    "CadAI-B",
    "CadAI-T",
    "Chat AI",
  ]);
  const [isCategoryChecked, setIsCategoryChecked] = useState([
    true,
    false,
    false,
    false,
  ]);
  const [yearly, setYearly] = useState([
    "The past year",
    "The past 3 years",
    "The past 5 years",
  ]);
  const [isYearlyChecked, setIsYearlyChecked] = useState([false, false, false]);
  const [status, setStatus] = useState(["Active", "Completed", "Terminated"]);
  const [isStatusChecked, setIsStatusChecked] = useState([false, false, false]);

  const getProjectData = () => {
    // 백엔드 생성시 데이터를 받을 함수
  };

  const onCategoryClick = (categoryNum) => {
    onSearchChange();
    if (categoryNum == 0) {
      const temp = [true, false, false, false];
      setIsCategoryChecked(temp);
      setTempData(ProjectDummyData)
    } else {
      let temp = [false, false, false, false];
      temp[categoryNum] = true;
      setIsCategoryChecked(temp);
      setTempData(
        ProjectDummyData.filter((data) => {
          if (data.category == category[categoryNum]) {
            return true;
          }
        })
      );
    }
    console.log(categoryNum);
  };

  const filterStatus = () => {
    
  };

  const filterYearly = (index) => {
    console.log(yearly);
    console.log(1);
    if (yearly[index].isChecked == true) {
    } else if (yearly[index] == false) {
    }
    console.log(yearly);
    let temp = { ...yearly };
    console.log(typeof yearly);
    console.log(yearly);
    console.log(2);
    temp[index].isChecked = !temp[index].isChecked;
    console.log(3);
    setYearly(temp);
    console.log(4);
    console.log(yearly);
  };

  console.log(yearly);

  const onSearchChange = () => {
    const value = document.getElementById("search").value;
    setTempData(
      ProjectDummyData.filter((data) => {
        if (data.title.includes(value)) {
          return true;
        }
      })
    );
  };

  useEffect(() => {}, []);

  return (
    <section className="Section">
      <div className="SectionTitle">Explore ORCA Projects</div>
      <div className="ProjectExplore">
        <div className="ProjectExploreUpperBar">
          <div className="CategoryBar">
            {category.map((category, index) => (
              <button
                className={isCategoryChecked[index].toString()}
                onClick={(e) => onCategoryClick(index)}
              >
                {category}
              </button>
            ))}
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
        {tempData.length != 0 ? (
          <div className="ProjectList">
            {tempData.map((temp) => (
              <ProjectCard
                title={temp.title}
                status={temp.status}
                projID={temp.projID}
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
                  checked={isYearlyChecked[index]}
                  // onChange={(e) => filterYearly(index)}
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
                  onChange={(e) => filterStatus(index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="ButtonArrange">
        <button className="LeadMoreButton">
          <label>Read More</label>
        </button>
      </div>
    </section>
  );
};

export default ProjectExplore;
