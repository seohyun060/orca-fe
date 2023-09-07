import React, { useCallback, useEffect, useState, useMemo } from 'react';
import '../styles/home.styles.scss';
import { ResearcherList } from '@typedef/types';
import images from 'src/assets/images';
type Props = {
  researcherList: ResearcherList;
  boxType: number;
  active: boolean;
  inBox: boolean;
  inPopUp: boolean;
  onSetActive: () => void;
  boxSelected: boolean;
  onSetInBox: () => void;
  onSetInPopUp: () => void;
};

const ResearcherBox = ({
  researcherList,
  boxType,
  active,
  inBox,
  inPopUp,
  onSetActive,
  boxSelected,
  onSetInBox,
  onSetInPopUp,
}: Props) => {
  useEffect(() => {
    onSetActive();
  }, [inBox, inPopUp, active]);

  const [tempActive, setTempActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = useMemo(() => currentPage * 3, [currentPage]);
  const firstIndex = useMemo(() => lastIndex - 3, [currentPage]);
  const requestedItems = useMemo(
    () => researcherList.slice(firstIndex, lastIndex),
    [currentPage],
  );
  const totalPosts = useMemo(() => researcherList.length, [currentPage]);
  const totalPage = Math.ceil(totalPosts / 3);
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
  // const onGoClick = useCallback(
  //   (e: React.MouseEvent<HTMLImageElement>) => {
  //     e.stopPropagation();
  //     if (currentPage != totalPage) {
  //       setCurrentPage((prev) => prev + 1);
  //     }
  //   },
  //   [currentPage],
  // );

  const onGoClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (currentPage != totalPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className={`country${boxType}`}>
      {tempActive ? (
        <div
          className='researchers'
          // onMouseOver={() => setTempActive(true)}
          // onMouseOut={() => setTempActive(false)}
          // onMouseEnter={onSetInPopUp}
          // onMouseOut={onSetInPopUp}
        >
          <div className='researchers-head'>Researchers List</div>
          <img
            className='researchers-back'
            src={images.back}
            onClick={onBackClick}
          />
          <div className='researchers-body'>
            {requestedItems.map((requestItem) => (
              <div className='researcher-card'>
                <img src={requestItem.profile} />
                <span>{requestItem.name}</span>
              </div>
            ))}
          </div>
          <img className='researchers-go' src={images.go} onClick={onGoClick} />
        </div>
      ) : (
        ''
      )}
      <div
        // onMouseOver={() => setTempActive(true)}
        // onMouseOut={() => setTempActive(false)}
        onClick={() => setTempActive((prev) => !prev)}
        className={`country-box`}
      ></div>
    </div>
  );
};

export default ResearcherBox;
