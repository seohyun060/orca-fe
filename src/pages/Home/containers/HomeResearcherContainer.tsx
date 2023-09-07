import HomeResearcher from '../components/HomeResearcher';
import { useNavigate } from 'react-router-dom';
import React, { useCallback, useEffect, useState } from 'react';
import { Researcher, ResearcherList } from '@typedef/types';
import images from 'src/assets/images';
const globalLists: ResearcherList[] = [];

type Props = {};

for (let i = 0; i < 32; i++) {
  const tempList: Researcher[] = [];
  for (let j = 0; j < 11; j++) {
    tempList.push({
      profile: images.profile,
      name: `Name${j}`,
    });
  }
  globalLists.push(tempList);
}

const HomeResearcherContainer = (props: Props) => {
  console.log('????');
  const navigate = useNavigate();
  const onViewAllClicked = useCallback(() => {
    navigate('/researcher');
  }, []);
  useEffect(() => {
    console.log('??????');
    console.log(globalLists[15]);
  }, []);

  return (
    <HomeResearcher
      onViewAllClicked={onViewAllClicked}
      globalLists={globalLists}
    />
  );
};

export default HomeResearcherContainer;
