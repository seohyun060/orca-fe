import HomeContainer from 'src/pages/Home/containers/HomeContainer';
import ProjectsPage from 'src/pages/Projects/ProjectsPage';

import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  useLocation,
  Route,
  Routes,
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './styles/rootnavigation.style.css';
import FooterContainer from 'src/pages/Footer/containers/FooterContainer';
import GnbContainer from 'src/pages/Gnb/containers/GnbContainer';
import OrcaContainer from 'src/pages/Orca/containers/OrcaContainer';
import ResearcherContainer from 'src/pages/Researcher/containers/ResearcherContainer';

// /* eslint no-restricted-globals: ["off"] */

const RootNavigation = () => {
  const location = useLocation();
  return (
    <>
      <GnbContainer location={location.pathname} />
      <Routes location={location}>
        <Route
          path='/'
          element={<HomeContainer location={location.pathname} />}
        />
        <Route path='/orca' element={<OrcaContainer />} />
        <Route
          path='/researcher'
          element={<ResearcherContainer location={location.pathname} />}
        />
        <Route path='/projects' element={<ProjectsPage />} />
      </Routes>
      <FooterContainer />
    </>
  );
};

export default RootNavigation;
