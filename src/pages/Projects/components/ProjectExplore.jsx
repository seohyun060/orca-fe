import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import ProjectCard from "./ProjectCard";

import images from "src/assets/images";

import ProjectDummyData from "./ProjectDummyData";

const ProjectExplore = (props) => {
  const { t } = useTranslation();

  const { projStatus, projID, projTitle, projCategory, projLocation } = props;
  const [tempData, setTempData] = useState(ProjectDummyData);
  const [numberToShow, setNumberToShow] = useState(7);
  const [isYearlySelectionBar, setIsYearlySelectionBar] = useState(true);
  const [isStatusSelectionBar, setIsStatusSelectionBar] = useState(true);

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
    "All",
    "The past year",
    "The past 3 years",
    "The past 5 years",
  ]);
  const [yearlyCriteria, setyearlyCrieria] = useState([0, 1, 3, 5]);
  const [isYearlyChecked, setIsYearlyChecked] = useState([
    true,
    false,
    false,
    false,
  ]);
  const [status, setStatus] = useState([
    "All",
    "Active",
    "Completed",
    "Terminated",
  ]);
  const [isStatusChecked, setIsStatusChecked] = useState([
    true,
    true,
    true,
    true,
  ]);
  const [searchSentence, setSearchSentence] = useState();

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
    if (yearlyNum == 0) {
      setIsYearlyChecked([true, false, false, false]);
    } else if (isYearlyChecked[yearlyNum] == true) {
      setIsYearlyChecked([true, false, false, false]);
    } else {
      let temp = [false, false, false, false];
      temp[yearlyNum] = true;
      setIsYearlyChecked(temp);
    }
  };

  const filterStatus = (statusNum) => {
    if (statusNum === 0) {
      if (isStatusChecked[0] === true) {
        setIsStatusChecked([false, false, false, false]);
      } else {
        setIsStatusChecked([true, true, true, true]);
      }
    } else {
      let temp = [...isStatusChecked];
      temp[statusNum] = !temp[statusNum];
      if (temp[statusNum] === false) {
        temp[0] = false;
      }
      if (JSON.stringify(temp) == JSON.stringify([false, true, true, true])) {
        temp[0] = true;
      }

      setIsStatusChecked(temp);
    }
  };

  const onSearchChange = () => {
    {
      document.getElementById("search").value != ""
        ? setSearchSentence(
            <div className="ResultSentence">
              There are search results for “
              {document.getElementById("search").value}”.
            </div>
          )
        : setSearchSentence(<></>);
    }
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

    if (isYearlyChecked[0] == true) {
    } else if (isYearlyChecked.indexOf(true) != -1) {
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

  const makeProjectList = () => {
    let list = [];
    let listlen = tempData.length;
    if (tempData.length > numberToShow) {
      listlen = numberToShow;
    }
    for (let i = 0; i < listlen; i++)
      list.push(
        <ProjectCard
          inProject={true}
          title={tempData[i].title}
          status={tempData[i].status}
          projID={tempData[i].projID}
          category={tempData[i].category}
          location={tempData[i].location}
          projDate={tempData[i].projDate}
        />
      );
    return list;
  };

  useEffect(() => {});

  useEffect(() => {
    dataFiltering();
  }, [isCategoryChecked, isYearlyChecked, isStatusChecked]);

  return (
    <section className="ProjectSection">
      <div className="SectionTitle">{t("project_explore")}</div>
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
        {tempData.length != 0 ? (
          <div className="ProjectList">
            {searchSentence}
            {makeProjectList()}
            {/* {tempData.map((temp) => (
              <ProjectCard
                inProject={true}
                title={temp.title}
                status={temp.status}
                projID={temp.projID}
                category={temp.category}
                location={temp.location}
                projDate={temp.projDate}
              />
            ))} */}
          </div>
        ) : (
          <div className="ResultEmpty">
            No search results match '{document.getElementById("search").value}'
            <br />
            Please try a new search
          </div>
        )}
        <div className="ProjectSelectionSector">
          <div className="ProjectSelectionBar">
            <div
              className="title"
              onClick={(e) => setIsYearlySelectionBar(!isYearlySelectionBar)}
            >
              <label>Yearly</label>
              <img
                className={isYearlySelectionBar ? "imageRotate" : ""}
                src={images.baropen_w}
              ></img>
            </div>
            {isYearlySelectionBar &&
              yearly.map((yearly, index) => (
                <div className="sub">
                  {yearly}
                  {!isYearlyChecked[index] ? (
                    <div
                      className="checkbox"
                      key={yearly}
                      checked={isYearlyChecked[index]}
                      onClick={(e) => filterYearly(index)}
                    />
                  ) : (
                    <img
                      className="checkboxChecked"
                      src={images.checkon}
                      key={yearly}
                      checked={isYearlyChecked[index]}
                      onClick={(e) => filterYearly(index)}
                    />
                  )}
                </div>
              ))}
          </div>
          <div className="ProjectSelectionBar">
            <div
              className="title"
              onClick={(e) => setIsStatusSelectionBar(!isStatusSelectionBar)}
            >
              <label>Research status</label>
              <img
                className={isStatusSelectionBar ? "imageRotate" : ""}
                src={images.baropen_w}
              ></img>
            </div>
            {isStatusSelectionBar &&
              status.map((status, index) => (
                <div className="sub">
                  {status}
                  {!isStatusChecked[index] ? (
                    <div
                      className="checkbox"
                      key={status}
                      checked={isStatusChecked[index]}
                      onClick={(e) => filterStatus(index)}
                    />
                  ) : (
                    <img
                      className="checkboxChecked"
                      src={images.checkon}
                      key={status}
                      checked={isStatusChecked[index]}
                      onClick={(e) => filterStatus(index)}
                    />
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="ButtonArrange">
        {tempData.length > numberToShow ? (
          <button
            className="ReadMoreButton"
            onClick={() => setNumberToShow(numberToShow + 7)}
          >
            {t("read_more")}
          </button>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default ProjectExplore;
