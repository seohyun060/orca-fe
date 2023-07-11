import React, { useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import './styles/header.style.css';
type Props = {
  check: string;
  toggle: boolean;
  onToggle: () => void;
  onNavigateHome: () => void;
  onNavigateIdeology: () => void;
  onNavigateContact: () => void;
};

const Header = ({
  check,
  toggle,
  onToggle,
  onNavigateHome,
  onNavigateIdeology,
  onNavigateContact,
}: Props) => {
  return (
    <div className='header'>
      <div className='youtube'>
        <a
          target='_blank'
          href='https://www.youtube.com/channel/UCN9IW1INzTP8nxchZ5TcsVA'>
          <img src='https://static.wixstatic.com/media/6f1958_d7aaf988ce3a405292c73039cdb0c609~mv2.png/v1/crop/x_0,y_0,w_2092,h_1525/fill/w_196,h_143,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/%EB%A1%9C%EA%B3%A0.png' />
        </a>
        <div className='youtube-square'>움직이는네모</div>
        <div className='youtube-since'>SINCE 2011</div>
      </div>
      <div className='header-menu' onClick={onNavigateHome}>
        HOME
      </div>
      <div className='header-menu' onClick={onNavigateIdeology}>
        IDEOLOGY
      </div>
      <div
        className={`header-menu${check}`}
        onMouseEnter={onToggle}
        onMouseLeave={onToggle}>
        WORK
      </div>
      {!toggle ? (
        <div className='header-menu' onClick={onNavigateContact}>
          CONTACT US
        </div>
      ) : (
        <div
          className='header-work'
          onMouseEnter={onToggle}
          onMouseLeave={onToggle}>
          <Link to='/city' className='header-work-tab'>
            도시 홍보
          </Link>
          <Link to='/ad' className='header-work-tab'>
            제품 광고
          </Link>
          <Link to='/pb' className='header-work-tab'>
            퍼스널 브랜딩
          </Link>
          <Link to='/entertain' className='header-work-tab'>
            예능
          </Link>
          <Link to='/csc' className='header-work-tab'>
            청수친
          </Link>
          <Link to='/broad' className='header-work-tab'>
            실시간 송출, 방송
          </Link>
          <Link to='/wedding' className='header-work-tab'>
            웨딩 본식
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
