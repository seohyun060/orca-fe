import HomeContainer from 'src/pages/Home/containers/HomeContainer';
import ProjectsPage from 'src/pages/Projects/ProjectsPage'
import ProjectDetails from 'src/pages/Projects/ProjectDetails'

import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  useLocation,
  Route,
  Routes,
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './styles/rootnavigation.style.css';
import GnbContainer from 'src/pages/Gnb/containers/GnbContainer';
// /* eslint no-restricted-globals: ["off"] */

const RootNavigation = () => {
  const location = useLocation();
  return (
    <>
      <GnbContainer />
      <Routes location={location}>
        <Route path='/' element={<HomeContainer />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/projects/default' element={<ProjectDetails projID="default"/>} />
      </Routes>
    </>
  );
};

export default RootNavigation;
