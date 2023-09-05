import HomeContainer from '@components/Home/containers/HomeContainer';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  useLocation,
  Route,
  Routes,
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './styles/rootnavigation.style.css';
import GnbContainer from '@components/Gnb/containers/GnbContainer';
// /* eslint no-restricted-globals: ["off"] */

const RootNavigation = () => {
  const location = useLocation();
  return (
    <>
      <GnbContainer />
      <Routes location={location}>
        <Route
          path='/'
          element={
            //<HelmetHoc title='Portfolio | 움직이는네모'>
            <HomeContainer />
          }
        />
      </Routes>
    </>
  );
};

export default RootNavigation;
