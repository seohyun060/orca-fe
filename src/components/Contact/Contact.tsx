import React, { useState } from 'react';
import './styles/contact.style.css';
import '../Header/containers/HeaderContainer';

import HeaderContainer from '../Header/containers/HeaderContainer';
import KakaoMapScriptContainer from './containers/KakaoMapScriptContainer';

type Props = {};
const Contact = (props: Props) => {
  return (
    <div className='contact'>
      <HeaderContainer />
      <div className='contact-body'>
        <div className='map'>
          <KakaoMapScriptContainer />
        </div>
        <img
          src='https://static.wixstatic.com/media/6f1958_18dac8d55dc544dbb5a6bdcc409d5353~mv2.png/v1/fill/w_981,h_428,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/%EC%A0%84%ED%99%94%2C%EB%AC%B8%EC%9D%98%2C%EB%A9%94%EC%9D%BC.png'
          alt='전화,문의,메일.png'></img>
      </div>
    </div>
  );
};

export default Contact;
