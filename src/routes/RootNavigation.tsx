import HomeContainer from 'src/pages/Home/containers/HomeContainer';
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

// /* eslint no-restricted-globals: ["off"] */

const RootNavigation = () => {
  const location = useLocation();
  return (
    <>
      <GnbContainer />
      <Routes location={location}>
        <Route path='/' element={<HomeContainer />} />
      </Routes>
      <FooterContainer />
    </>
  );
};

export default RootNavigation;
