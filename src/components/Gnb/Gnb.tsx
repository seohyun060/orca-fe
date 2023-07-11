import React from 'react';
import './styles/gnb.style.scss';
type Props = {};

const Gnb = (props: Props) => {
  return (
    <div className='gnb'>
      <div className='gnb-profile'>
        <span className='name'>Seohyun Park</span>
        <span>▣ asdfdf@dfd.com</span>
        <span>☎ 0123456789</span>
      </div>
      <div className='gnb-bar'>
        <div className='menu'>About me</div>
        <div className='menu'>Skills</div>
        <div className='menu'>Projects</div>
        <div className='menu'>Recommendations</div>
      </div>
    </div>
  );
};

export default Gnb;
