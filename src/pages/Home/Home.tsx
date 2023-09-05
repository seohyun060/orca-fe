import React from 'react';
import './styles/home.styles.css';
import images from 'src/assets/images';
import home_banner from '../../assets/images/HOME/home_banner.png';
type Props = {};

const Home = (props: Props) => {
  return (
    <div className='home'>
      <div className='home-anime'>
        <img src={images.logo_orca} />
      </div>
    </div>
  );
};

export default Home;
