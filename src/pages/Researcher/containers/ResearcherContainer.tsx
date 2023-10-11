import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Researcher from '../Researcher';
import { EChange, ResearcherList } from '@typedef/types';
import images from 'src/assets/images';
import { useLocation, useNavigate } from 'react-router-dom';
type Props = {
	location: string;
};
const researcherList: ResearcherList = [];
for (let j = 0; j < 20; j++) {
	const remainder = j % 6;
	let randomProfile = '';
	switch (remainder) {
		case 0:
			randomProfile = images.profile0;
			break;
		case 1:
			randomProfile = images.profile1;
			break;
		case 2:
			randomProfile = images.profile2;
			break;
		case 3:
			randomProfile = images.profile3;
			break;
		case 4:
			randomProfile = images.profile4;
			break;
		case 5:
			randomProfile = images.profile5;
			break;
	}

	researcherList.push({
		name: `${j}Name`,
		profile: randomProfile,
		department: 'Radiology Department',
		project: 'CadAI-B projects',
	});
}
const listLength = researcherList.length;
const ResearcherContainer = ({ location }: Props) => {
	const route = location.split('/')[1];
	const navigate = useNavigate();
	const fromDetail = useLocation();

	const [search, setSearch] = useState('');

	const [researcherIndex, setResearcherIndex] = useState(0);
	const [readMore, setReadMore] = useState(false);
	const [containerHeight, setContainerHeight] = useState('1742px');
	const [prevHeight, setPrevHeight] = useState('1742px');
	const [filteredList, setFilteredList] = useState<ResearcherList>([]);
	const [slicedList, setSlicedList] = useState<ResearcherList>([]);
	const onReadMoreClick = useCallback(() => {
		if (filteredList.length > 12) {
			setPrevHeight(containerHeight);

			setReadMore((prev: any) => !prev);
			if (!readMore) {
				setResearcherIndex(0);
			}
			localStorage.setItem('readMoreState', JSON.stringify(readMore));
			console.log(prevHeight, containerHeight);
		}
	}, [readMore, filteredList]);
	const onSetSearch = useCallback(
		(e: EChange) => {
			setSearch(e.target.value);
		},
		[search, readMore],
	);
	// const filteredList = useMemo(
	// 	() =>
	// 		researcherList.filter(
	// 			(researcher) => researcher.name.indexOf(search) !== -1,
	// 		),
	// 	[search, readMore],
	// );
	const saveScrollPosition = () => {
		const scrollPosition =
			window.scrollY > 1500 ? window.scrollY : window.scrollY;

		console.log(scrollPosition);
		localStorage.setItem('scrollPosition', scrollPosition.toString());
	};
	const onResearcherClick = useCallback(
		(
			name: string,
			profile: string,
			department: string,
			project: string,
			index: number,
		) => {
			setResearcherIndex(index);
			saveScrollPosition();

			navigate('/researcherDetail', {
				state: {
					Name: name,
					Profile: profile,
					Department: department,
					Project: project,
					Index: index,
				},
			});
			window.scrollTo(0, 0);
		},
		[navigate, readMore],
	);
	useEffect(() => {
		console.log(researcherIndex);
		if (researcherIndex > 11) {
			setReadMore(true);
		}
		return () => {};
	}, [researcherIndex]);

	useEffect(() => {
		//setResearcherIndex(0);
		//setReadMore(initReadMoreState);
		if (fromDetail.state) {
			setResearcherIndex(fromDetail.state.Index);
		}

		setFilteredList(
			researcherList.filter(
				(researcher) => researcher.name.indexOf(search) !== -1,
			),
		);
		if (readMore) {
			setSlicedList(filteredList);
		} else {
			setSlicedList(
				researcherList
					.filter((researcher) => researcher.name.indexOf(search) !== -1)
					.slice(0, 12),
			);
		}
		//console.log(slicedList);
		return () => {};
	}, [
		search,
		containerHeight,
		location,
		readMore,
		navigate,

		setResearcherIndex,
		researcherIndex,
	]);

	return (
		<Researcher
			route={route}
			search={search}
			readMore={readMore}
			onSetSearch={onSetSearch}
			filteredList={filteredList}
			slicedList={slicedList}
			containerHeight={containerHeight}
			onReadMoreClick={onReadMoreClick}
			onResearcherClick={onResearcherClick}
			prevHeight={prevHeight}
		/>
	);
};

export default ResearcherContainer;
