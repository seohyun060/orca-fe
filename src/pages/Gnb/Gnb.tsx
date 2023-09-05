import React from 'react';
import './styles/gnb.styles.scss';
import images from 'src/assets/images';
type Props = {};

const gnb = (props: Props) => {
  return (
    <div className='gnb'>
      <img src={images.logo} className='gnb-logo' />
      <div className='gnb-menu'>
        <div>ORCA</div>
        <div>Researcher</div>
        <div>Projects</div>
        <div>Events</div>
        <div>Insights</div>
      </div>
    </div>
  );
};

export default gnb;
