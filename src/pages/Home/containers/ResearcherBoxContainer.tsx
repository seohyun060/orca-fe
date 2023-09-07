import React from 'react';
import ResearcherBox from '../components/ResearcherBox';
import { ResearcherList } from '@typedef/types';
import { useState, useCallback } from 'react';
type Props = {
  researcherList: ResearcherList;
  index: number;
  boxSelected: boolean;
};

const ResearcherBoxContainer = ({
  researcherList,
  index,
  boxSelected,
}: Props) => {
  let boxType = 0;
  if (index === 31) {
    boxType = 3;
  } else if (index > 23) {
    boxType = 2;
  } else if (index % 8 === 7) {
    boxType = 1;
  }
  const [inBox, setInBox] = useState(false);
  const [inPopUp, setInPopUp] = useState(false);
  const [active, setActive] = useState(false);
  const onSetActive = useCallback(() => {
    if (inBox == false && inPopUp == false) {
      setActive(false);
    } else {
      setActive(true);
    }
  }, [inBox, inPopUp, active]);
  const onSetInBox = useCallback(() => {
    setInBox((prev) => !prev);
    console.log('inbox: ', inBox);
    console.log('inPopUp: ', inPopUp);
  }, [inBox]);
  const onSetInPopUp = useCallback(() => {
    setInPopUp((prev) => !prev);
    console.log('inbox: ', inBox);
    console.log('inPopUp: ', inPopUp);
  }, [inPopUp]);

  return (
    <ResearcherBox
      researcherList={researcherList}
      boxSelected={boxSelected}
      boxType={boxType}
      active={active}
      inBox={inBox}
      inPopUp={inPopUp}
      onSetActive={onSetActive}
      onSetInBox={onSetInBox}
      onSetInPopUp={onSetInPopUp}
    />
  );
};

export default ResearcherBoxContainer;
