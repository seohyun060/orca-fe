import React, { useEffect, useMemo } from 'react';
import ResearcherBox from '../components/ResearcherBox';
import { ResearcherList } from '@typedef/types';
import { useState, useCallback } from 'react';
import images from 'src/assets/images';
type Props = {
	researcherList: ResearcherList;
	index: number;
	isSelected: boolean;
	setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
	black: string;
	selectedBoxList: boolean[];
	setSelectedBoxList: React.Dispatch<React.SetStateAction<boolean[]>>;
	activeList: boolean[];
	setActiveList: React.Dispatch<React.SetStateAction<boolean[]>>;
};

const ResearcherBoxContainer = ({
	researcherList,
	index,
	isSelected,
	setIsSelected,
	black,
	selectedBoxList,
	setSelectedBoxList,
	activeList,
	setActiveList,
}: Props) => {
	const [active, setActive] = useState(false);
	const [boxType, setBoxType] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const lastIndex = useMemo(() => currentPage * 3, [currentPage]);
	const firstIndex = useMemo(() => lastIndex - 3, [currentPage]);
	const [topPosition, setTopPosition] = useState('');
	const [leftPosition, setLeftPosition] = useState('');
	const [dotList, setDotList] = useState<string[]>([]);
	researcherList = researcherList.filter(
		(researcher) => researcher.isStored !== true,
	);
	const requestedItems = useMemo(
		() => researcherList.slice(firstIndex, lastIndex),
		[currentPage, researcherList],
	);
	const totalPosts = useMemo(
		() => researcherList.length,
		[currentPage, researcherList],
	);
	const totalPage = Math.ceil(totalPosts / 3);
	const [goTransition, setGoTransition] = useState(true);
	const handleResize = useCallback(() => {
		if (black == '') {
			if (index < 16) {
				if (index % 8 < 4) {
					setTopPosition('-30%');
					setLeftPosition('110%');
				} else {
					setTopPosition('-30%');
					setLeftPosition(window.innerWidth < 768 ? '-280%' : '-165%');
				}
			} else {
				if (index % 8 < 4) {
					setTopPosition('-70%');
					setLeftPosition('110%');
				} else {
					setTopPosition('-70%');
					setLeftPosition(window.innerWidth < 768 ? '-280%' : '-165%');
				}
			}
		} else {
			if (index < 16) {
				if (index % 8 < 4) {
					setTopPosition('-40%');
					setLeftPosition('110%');
				} else {
					setTopPosition('-40%');
					setLeftPosition(window.innerWidth < 768 ? '-280%' : '-165%');
				}
			} else {
				if (index % 8 < 4) {
					setTopPosition('-70%');
					setLeftPosition('110%');
				} else {
					setTopPosition('-70%');
					setLeftPosition(window.innerWidth < 768 ? '-280%' : '-165%');
				}
			}
		}
	}, [window.innerWidth, topPosition, leftPosition]);

	useEffect(() => {
		handleResize();
		window.addEventListener('resize', handleResize);
		if (index === 31) {
			setBoxType(3);
		} else if (index > 23) {
			setBoxType(2);
		} else if (index % 8 === 7) {
			setBoxType(1);
		}

		const newDotList = [];
		for (let i = 1; i <= totalPage; i++) {
			if (i === currentPage) {
				newDotList.push(images.dot_w);
			} else {
				newDotList.push(images.dot_g);
			}
		}
		setDotList(newDotList);
	}, [black, index, currentPage, totalPage, boxType, window.innerWidth]);

	const onBackClick = useCallback(
		(e: React.MouseEvent<HTMLImageElement>) => {
			e.preventDefault();
			e.stopPropagation();
			if (currentPage != 1) {
				setCurrentPage((prev) => prev - 1);
			}
			setGoTransition(false);
		},
		[currentPage, researcherList],
	);

	const onGoClick = (e: any) => {
		e.preventDefault();
		e.stopPropagation();
		if (currentPage !== totalPage) {
			setCurrentPage((prev) => prev + 1);
		}
		setGoTransition(true);
	};

	const boxClickHandler = useCallback(
		(e: React.MouseEvent<HTMLElement>) => {
			console.log(researcherList);
			console.log(requestedItems);
			e.preventDefault();
			e.stopPropagation();
			if (!selectedBoxList[index]) {
				for (let i = 0; i < 32; i++) {
					if (selectedBoxList[i]) {
						setSelectedBoxList((prevList) => {
							const updatedList = [...prevList];
							updatedList[i] = false;
							return updatedList;
						});
						setActiveList((prevList) => {
							const updatedList = [...prevList];
							updatedList[i] = false;
							return updatedList;
						});

						break;
					}
				}
				setSelectedBoxList((prevList) => {
					const updatedList = [...prevList];
					updatedList[index] = true;
					return updatedList;
				});
				setActiveList((prevList) => {
					const updatedList = [...prevList];
					updatedList[index] = true;
					return updatedList;
				});
			} else {
				setSelectedBoxList((prevList) => {
					const updatedList = [...prevList];
					updatedList[index] = false;
					return updatedList;
				});
				setActiveList((prevList) => {
					const updatedList = [...prevList];
					updatedList[index] = false;
					return updatedList;
				});
			}
		},
		[index, selectedBoxList, setSelectedBoxList, activeList, setActiveList],
	);

	return (
		<ResearcherBox
			requestedItems={requestedItems}
			boxType={boxType}
			black={black}
			onBackClick={onBackClick}
			onGoClick={onGoClick}
			boxClickHandler={boxClickHandler}
			topPosition={topPosition}
			leftPosition={leftPosition}
			dotList={dotList}
			goTransition={goTransition}
			selectedBoxList={selectedBoxList}
			index={index}
			activeList={activeList}
			currentPage={currentPage}
			totalPage={totalPage}
		/>
	);
};

export default ResearcherBoxContainer;
