import React, { useState } from 'react';
import '../styles/home.styles.scss';
import { ResearcherList } from '@typedef/types';
import images from 'src/assets/images';
import ResearcherMapContainer from '../containers/ResearcherMapContainer';

type Props = {
  onViewAllClicked: () => void;
  route: string;
};

const HomeResearcher = ({ onViewAllClicked, route }: Props) => {
  return (
    <div className='home-research'>
      <div className='home-research-head'>
        <span>ORCA Researchers</span>
        <button onClick={onViewAllClicked}>View All</button>
      </div>
      <ResearcherMapContainer route={route} />
    </div>
  );
};

export default HomeResearcher;
