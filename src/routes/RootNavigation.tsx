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
// /* eslint no-restricted-globals: ["off"] */

const RootNavigation = () => {
  const location = useLocation();
  return (
    <>
      <GnbContainer location={location.pathname} />
      <Routes location={location}>
        <Route path='/' element={<HomeContainer />} />
        <Route path='/orca' element={<OrcaContainer />} />
        <Route path='/projects' element={<ProjectsPage />} />
      </Routes>
      <FooterContainer />
    </>
  );
};

export default RootNavigation;
