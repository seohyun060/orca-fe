import React from "react";

import "./styles/home.styles.css";
import "./styles/home.styles.scss";
import HomeIntroContainer from "./containers/HomeIntroContainer";
import HomeProjects from "./components/HomeProjects";
import HomeEvents from "./components/HomeEvents";
import HomeInsights from "./components/HomeInsights";

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
      <HomeProjects />
      <HomeEvents />
      <HomeInsights />
    </div>
  );
};

export default Home;
