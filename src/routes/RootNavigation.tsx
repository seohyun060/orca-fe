import HomeContainer from '@components/Home/containers/HomeContainer';
import IdeologyConatainer from '@components/Ideology/containers/IdeologyContainer';
import ContactContainer from '@components/Contact/containers/ContactContainer';
import CityContainer from '@components/City/containers/CityContainer';
import AdContainer from '@components/Ad/containers/AdContainer';
import PbContainer from '@components/Pb/containers/PbContainer';
import CscContainer from '@components/Csc/containers/CscContainer';
import BroadContainer from '@components/Broad/containers/BroadContainer';
import WeddingContainer from '@components/Wedding/containers/WeddingContainer';
import EntertainContainer from '@components/Entertain/containers/EntertainContainer';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  useLocation,
  Route,
  Routes,
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './styles/rootnavigation.style.css';
import HelmetHoc from './helmet/HelmetHoc';
// /* eslint no-restricted-globals: ["off"] */

const RootNavigation = () => {
  const [key, setkey] = useState('');
  useEffect(() => {
    setkey(new Date().getSeconds().toString());
  }, [key]);
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} classNames='fade' timeout={400}>
        <Routes location={location}>
          <Route
            path='/'
            element={
              <HelmetHoc title='Portfolio | 움직이는네모'>
                <HomeContainer />
              </HelmetHoc>
            }
          />
          <Route
            path='/contact'
            element={
              <HelmetHoc title='Contact Us | 움직이는네모'>
                <ContactContainer />
              </HelmetHoc>
            }
          />
          <Route
            path='/ideology'
            element={
              <HelmetHoc title='Ideology | 움직이는네모'>
                <IdeologyConatainer />
              </HelmetHoc>
            }
          />
          <Route
            path='/city'
            element={
              <HelmetHoc title='도시홍보 | 움직이는네모'>
                <CityContainer />
              </HelmetHoc>
            }
          />
          <Route
            path='/ad'
            element={
              <HelmetHoc title='제품 광고 | 움직이는네모'>
                <AdContainer />
              </HelmetHoc>
            }
          />
          <Route
            path='/pb'
            element={
              <HelmetHoc title='퍼스널 브랜딩 | 움직이는네모'>
                <PbContainer />
              </HelmetHoc>
            }
          />
          <Route
            path='/entertain'
            element={
              <HelmetHoc title='예능 | 움직이는네모'>
                <EntertainContainer />
              </HelmetHoc>
            }
          />
          <Route
            path='/csc'
            element={
              <HelmetHoc title='청수친 | 움직이는네모'>
                <CscContainer />
              </HelmetHoc>
            }
          />
          <Route
            path='/broad'
            element={
              <HelmetHoc title='실시간 송출, 방송 | 움직이는네모'>
                <BroadContainer />
              </HelmetHoc>
            }
          />
          <Route
            path='/wedding'
            element={
              <HelmetHoc title='웨딩 본식 | 움직이는네모'>
                <WeddingContainer />
              </HelmetHoc>
            }
          />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default RootNavigation;
