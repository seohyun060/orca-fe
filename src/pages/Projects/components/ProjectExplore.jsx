import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import ProjectCard from "./ProjectCard";

import images from "src/assets/images";

import { getAllProjectData } from "src/api/projectsAPI";

const ProjectExplore = (props) => {
  const { t } = useTranslation();

  const { projStatus, projID, projTitle, projStudyType, projLocation } = props;

  const [projectData, setProjectData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [numberToShow, setNumberToShow] = useState(7);
  const [isYearlySelectionBar, setIsYearlySelectionBar] = useState(true);
  const [isStatusSelectionBar, setIsStatusSelectionBar] = useState(true);

  const studyType = [
    ["ORCA Projects", "CadAI-B", "CadAI-T", "Chat AI"],
    ["", "CADAI_B", "CADAI_T", "CHAT_AI"],
  ];

  const [isStudyTypeChecked, setIsStudyTypeChecked] = useState([
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
  const status = [
    ["All", "Active", "Completed", "Terminated"],
    ["", "ACTIVE", "COMPLETED", "TERMINATED"],
  ];
  const [isStatusChecked, setIsStatusChecked] = useState([
    true,
    true,
    true,
    true,
  ]);
  const [searchSentence, setSearchSentence] = useState();
  const [search, setSearch] = useState();

  const onStudyTypeClick = (studyTypeNum) => {
    if (studyTypeNum == 0) {
      const temp = [true, false, false, false];
      setIsStudyTypeChecked(temp);
    } else {
      let temp = [false, false, false, false];
      temp[studyTypeNum] = true;
      setIsStudyTypeChecked(temp);
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
    let filterData = projectData.filter((data) => {
      if (data.projectTitle.includes(value)) {
        return true;
      }
    });

    if (isStudyTypeChecked[0] == false) {
      const studyTypeNum = isStudyTypeChecked.indexOf(true);
      filterData = filterData.filter((data) => {
        if (data.studyType == studyType[1][studyTypeNum]) {
          return true;
        }
      });
    }

    if (isYearlyChecked[0] == true) {
    } else if (isYearlyChecked.indexOf(true) != -1) {
      const yearlyNum = isYearlyChecked.indexOf(true);
      filterData = filterData.filter((data) => {
        const projectDate = new Date(data.startDate);
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
          if (data.status == status[1][index]) {
            return true;
          }
        });
        tempStatsus = [...tempStatsus, ...temp];
      }
    });
    filterData = tempStatsus;

    setFilteredData(filterData);
  };

  const makeProjectList = () => {
    let list = [];
    let listlen = filteredData.length;
    if (filteredData.length > numberToShow) {
      listlen = numberToShow;
    }
    for (let i = 0; i < listlen; i++)
      list.push(
        <ProjectCard
          id={filteredData[i].id}
          inProject={true}
          projectId={filteredData[i].projectId}
          projectTitle={filteredData[i].projectTitle}
          status={filteredData[i].status}
          studyType={filteredData[i].studyType}
          location={filteredData[i].location}
          startDate={filteredData[i].startDate}
        />
      );
    return list;
  };

  useEffect(() => {
    getAllProjectData().then((data) => {
      setProjectData(data.data);
    });
  }, []);

  useEffect(() => {
    dataFiltering();
  }, [projectData, isStudyTypeChecked, isYearlyChecked, isStatusChecked]);

  return (
    <section className="ProjectSection">
      <div className="SectionTitle">{t("project_explore")}</div>
      <div className="ProjectExplore">
        <div className="ProjectExploreUpperBar">
          <div className="StudyTypeBar">
            {studyType[0].map((studyType, index) => (
              <button
                className={isStudyTypeChecked[index].toString()}
                onClick={(e) => onStudyTypeClick(index)}
              >
                {studyType}
              </button>
            ))}
          </div>
          <div className="SearchBar">
            <input
              type="text"
              placeholder="search"
              name="search"
              id="search"
              value={search}
              onChange={(e) => {
                onSearchChange();
                setSearch(e.target.value);
              }}
            />
            {search ? (
              <img src={images.search_b} />
            ) : (
              <img src={images.search} />
            )}
          </div>
        </div>
        {filteredData.length != 0 ? (
          <div className="ProjectList">
            {searchSentence}
            {makeProjectList()}
          </div>
        ) : (
          <div className="ResultEmpty">
            No search results match "{search}"
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
              status[0].map((status, index) => (
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
        {filteredData.length > numberToShow ? (
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
