import React, { useState, useEffect } from "react";

import ProjectCard from "./ProjectCard";

import images from "src/assets/images";

import dummyData from "./dummyData";

const ProjectExplore = (props) => {
  const { projStatus, projID, projTitle, projCategory, projLocation } = props;
  const [tempData, setTempData] = useState(dummyData);
  // object로 관리
  const[yearly, setYearly] = useState([
    { criteria: "The past year", isChecked: false },
    { criteria: "The past 3 years", isChecked: false },
    { criteria: "The past 5 years", isChecked: false }
  ]);
  const [isStatusChecked, setIsStatusChecked] = useState([false, false, false]);

  const category = ["ORCA Projects", "CadAI-B", "CadAI-T", "Chat AI"];
  const status = ["Active", "Completed", "Terminated"];

  const onCateoryClick = () => {};

  const getProjectData = () => {};

  const filterYearly = (index) => {
    console.log(yearly)
    console.log(1)
    if (yearly[index].isChecked == true) {
    } else if (yearly[index] == false) {
    }
    console.log(yearly)
    let temp = { ...yearly };
    console.log(typeof(yearly))
    console.log(yearly)
    console.log(2)
    temp[index].isChecked = !temp[index].isChecked;
    console.log(3)
    setYearly(temp);
    console.log(4)
    console.log(yearly)
  };

  console.log(yearly)

  const filterStatus = (index) => {
    console.log(isStatusChecked);
    // console.log(isStatusChecked[index]);

    if (isStatusChecked[index] == false) {
      console.log(true);

      // let tempData = {...dummyData}
      // isStatusChecked.map((checked, index) => {
      //   if (checked[index]) {
      //     tempData.filter((data) => (data.status = status[index]));
      //   }
      // });
      console.log(tempData);
    } else if (isStatusChecked[index] == true) {
      console.log(false);

      // isStatusChecked.map((checked, index) => {
      //   if (checked[index]) {
      //     let temp = isStatusChecked;
      //     temp[index] = !temp[index];
      //     setIsStatusChecked(temp);
      //     setTempData(tempData.filter((data) => (data.status = criteria)));
      //   }
      // });
    }
    let temp = { ...isStatusChecked };
    console.log(temp);
    temp[index] = !temp[index];
    setIsStatusChecked(temp);
    console.log(isStatusChecked);
  };

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
                {yearly.criteria}
                <input
                  type="checkbox"
                  key={yearly.criteria}
                  checked={yearly.isChecked}
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
