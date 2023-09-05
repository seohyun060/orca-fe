import React from 'react';
import '../styles/home.styles.css';
type Props = {};

const HomeIntro = (props: Props) => {
  return (
    <div className='home-intro'>
      <div className='home-intro-what'>
        <div className='home-intro-what-head'>What is the ORCA Group?</div>
        <div className='home-intro-what-about'>About ORCA /ˈɔːr.kə/</div>
        <div className='home-intro-what-body'>
          The ORCA (Optimized Research in Clinical AI) Group at BeamWorks is a
          collaborative team of AI specialists and clinical researchers, focused
          on healthcare applications.
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;
