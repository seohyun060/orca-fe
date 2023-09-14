import React, { useEffect, useMemo } from 'react';
import ResearcherBox from '../components/ResearcherBox';
import { ResearcherList } from '@typedef/types';
import { useState, useCallback } from 'react';
type Props = {
  researcherList: ResearcherList;
  index: number;
  isSelected: boolean;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
  black: string;
};

const ResearcherBoxContainer = ({
  researcherList,
  index,
  isSelected,
  setIsSelected,
  black,
}: Props) => {
  const [active, setActive] = useState(false);
  const [boxType, setBoxType] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = useMemo(() => currentPage * 3, [currentPage]);
  const firstIndex = useMemo(() => lastIndex - 3, [currentPage]);
  const [topPosition, setTopPosition] = useState('');
  const [leftPosition, setLeftPosition] = useState('');
  const requestedItems = useMemo(
    () => researcherList.slice(firstIndex, lastIndex),
    [currentPage],
  );
  const totalPosts = useMemo(() => researcherList.length, [currentPage]);
  const totalPage = Math.ceil(totalPosts / 3);

  useEffect(() => {
    if (index === 31) {
      setBoxType(3);
    } else if (index > 23) {
      setBoxType(2);
    } else if (index % 8 === 7) {
      setBoxType(1);
    }
    if (black == '') {
      if (index < 16) {
        if (index % 8 < 4) {
          setTopPosition('-22%');
          setLeftPosition('100%');
        } else {
          setTopPosition('-22%');
          setLeftPosition('-165%');
        }
      } else {
        if (index % 8 < 4) {
          setTopPosition('-131%');
          setLeftPosition('100%');
        } else {
          setTopPosition('-131%');
          setLeftPosition('-165%');
        }
      }
    } else {
      if (index < 16) {
        if (index % 8 < 4) {
          setTopPosition('-22%');
          setLeftPosition('100%');
        } else {
          setTopPosition('-22%');
          setLeftPosition('-155%');
        }
      } else {
        if (index % 8 < 4) {
          setTopPosition('-140%');
          setLeftPosition('100%');
        } else {
          setTopPosition('-140%');
          setLeftPosition('-155%');
        }
      }
    }
  }, [black, index, boxType, topPosition, leftPosition]);

  const onBackClick = useCallback(
    (e: React.MouseEvent<HTMLImageElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (currentPage != 1) {
        setCurrentPage((prev) => prev - 1);
      }
    },
    [currentPage],
  );

  const onGoClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (currentPage != totalPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const boxClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!(isSelected && !active)) {
      setIsSelected(active ? false : true);
      setActive((prev) => !prev);
    }
  };
  return (
    <ResearcherBox
      requestedItems={requestedItems}
      active={active}
      boxType={boxType}
      black={black}
      isSelected={isSelected}
      onBackClick={onBackClick}
      onGoClick={onGoClick}
      boxClickHandler={boxClickHandler}
      topPosition={topPosition}
      leftPosition={leftPosition}
    />
  );
};

export default ResearcherBoxContainer;
