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
  onSetInBox: () => void;
  onSetInPopUp: () => void;
  isSelected: boolean;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
};

const ResearcherBox = ({
  researcherList,
  boxType,
  active,
  inBox,
  inPopUp,
  onSetActive,
  isSelected,
  setIsSelected,
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

  const onGoClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (currentPage != totalPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  function boxClickHandler(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    e.stopPropagation();
    if (!(isSelected && !tempActive)) {
      setIsSelected(tempActive ? false : true);
      setTempActive((prev) => !prev);
    }
    //부모가 자식이 선택된 박스가 있는지 booleanType의 state를 setState(true) isSelected
    //isSelected && !TempActive 클릭이 불가능하게 만들면
  }

  return (
    <div className={`country${boxType}`}>
      <div
        // onMouseOver={() => setTempActive(true)}
        // onMouseOut={() => setTempActive(false)}
        onClick={(e) => boxClickHandler(e)}
        className={`${
          !isSelected || tempActive ? 'country-box' : 'country-box-Off'
        }`}
        style={{
          backgroundColor: tempActive ? '#9e9e9e' : '',
          opacity: tempActive ? 0.7 : 1,
        }}
      ></div>
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
    </div>
  );
};

export default ResearcherBox;
