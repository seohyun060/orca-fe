import React from "react";
import "./styles/home.styles.css";
import "./styles/home.styles.scss";
import HomeIntroContainer from "./containers/HomeIntroContainer";
import EventCard from "../Events/components/EventCard";
import ProjectCard from "../Projects/components/ProjectCard";

import images from "src/assets/images";
import home_banner from "../../assets/images/HOME/home_banner.png";


type Props = {};
const Home = (props: Props) => {
  return (
    <div className="home">
      <div className="home-anime">
        <img src={images.logo_orca} />
      </div>
      <HomeIntroContainer />
      <section className='Section'>
        <div className='SectionTitle'>
          <label className='MainTitleFont'>Projects</label>
          {/* project로 연결 */}
          <button className='ViewButton'>
            <label className='View'>View All</label>
          </button>
        </div>
        <div className='ProjectBox'>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>
      <section className="Section">
        <div className='SectionTitle'>
          <label className='MainTitleFont'>Events</label>
          {/* project로 연결 */}
          <button className='ViewButton'>
            <label className='View'>View All</label>
          </button>
        </div>
        <div className="SectionTitle">
          <div className="EventBox">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
