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
  const [yearlyCriteria, setyearlyCrieria] = useState([1, 3, 5]);
  const [isYearlyChecked, setIsYearlyChecked] = useState([false, false, false]);
  const [status, setStatus] = useState(["Active", "Completed", "Terminated"]);
  const [isStatusChecked, setIsStatusChecked] = useState([true, true, true]);

  const getProjectData = () => {
    // 백엔드 생성시 데이터를 받을 함수
  };

  const onCategoryClick = (categoryNum) => {
    if (categoryNum == 0) {
      const temp = [true, false, false, false];
      setIsCategoryChecked(temp);
    } else {
      let temp = [false, false, false, false];
      temp[categoryNum] = true;
      setIsCategoryChecked(temp);
    }
  };

  const filterYearly = (yearlyNum) => {
    if (isYearlyChecked[yearlyNum] == true) {
      let temp = [...isYearlyChecked];
      temp[yearlyNum] = false;
      setIsYearlyChecked(temp);
    } else {
      let temp = [false, false, false];
      temp[yearlyNum] = true;
      setIsYearlyChecked(temp);
    }
  };

  const filterStatus = (statusNum) => {
    let temp = [...isStatusChecked];
    temp[statusNum] = !temp[statusNum];
    setIsStatusChecked(temp);
  };

  const onSearchChange = () => {
    dataFiltering();
  };

  const dataFiltering = () => {
    const value = document.getElementById("search").value;
    let filterData = ProjectDummyData.filter((data) => {
      if (data.title.includes(value)) {
        return true;
      }
    });

    if (isCategoryChecked[0] == false) {
      const categoryNum = isCategoryChecked.indexOf(true);
      filterData = filterData.filter((data) => {
        if (data.category == category[categoryNum]) {
          return true;
        }
      });
    }

    if (isYearlyChecked.indexOf(true) != -1) {
      const yearlyNum = isYearlyChecked.indexOf(true);
      filterData = filterData.filter((data) => {
        const projectDate = new Date(data.projDate);
        if (
          (new Date() - projectDate) / (1000 * 60 * 60 * 24) <
          yearlyCriteria[yearlyNum] * 365
        ) {
          return true;
        }
      });
    }

    let tempStatsus = [];
    isStatusChecked.map((isStatus, index) => {
      let temp = [];
      if (isStatus) {
        temp = filterData.filter((data) => {
          if (data.status == status[index]) {
            return true;
          }
        });
        tempStatsus = [...tempStatsus, ...temp];
      }
    });
    filterData = tempStatsus;
    setTempData(filterData);
  };

  useEffect(() => {
    dataFiltering();
  }, [isCategoryChecked, isYearlyChecked, isStatusChecked]);

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
                  onChange={(e) => filterYearly(index)}
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
