import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Researcher from '../Researcher';
import { EChange, ResearcherList } from '@typedef/types';
import images from 'src/assets/images';
import { useNavigate } from 'react-router-dom';
type Props = {
	location: string;
};
const researcherList: ResearcherList = [];
for (let j = 0; j < 20; j++) {
	researcherList.push({
		name: `${j}Name`,
		profile: images.profile,
		department: 'Radiology Department',
		project: 'CadAI-B projects',
	});
}
const listLength = researcherList.length;

const ResearcherContainer = ({ location }: Props) => {
	const route = location.split('/')[1];
	const navigate = useNavigate();
	const [search, setSearch] = useState('');
	const [readMore, setReadMore] = useState(false);
	const [containerHeight, setContainerHeight] = useState('1742px');
	const [prevHeight, setPrevHeight] = useState('1742px');
	const [filteredList, setFilteredList] = useState<ResearcherList>([]);
	const [slicedList, setSlicedList] = useState<ResearcherList>([]);
	const onReadMoreClick = useCallback(() => {
		if (filteredList.length > 12) {
			setPrevHeight(containerHeight);

			setReadMore((prev) => !prev);
			console.log(prevHeight, containerHeight);
		}
	}, [readMore, filteredList]);
	const onSetSearch = useCallback(
		(e: EChange) => {
			setSearch(e.target.value);
		},
		[search],
	);
	// const filteredList = useMemo(
	// 	() =>
	// 		researcherList.filter(
	// 			(researcher) => researcher.name.indexOf(search) !== -1,
	// 		),
	// 	[search, readMore],
	// );
	const onResearcherClick = useCallback(
		(name: string, profile: string, department: string, project: string) => {
			navigate('/researcherdetail', {
				state: {
					Name: name,
					Profile: profile,
					Department: department,
					Project: project,
				},
			});
			window.scrollTo(0, 0);
		},
		[navigate],
	);
	useEffect(() => {
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
		console.log(slicedList);
		return () => {};
	}, [search, readMore, containerHeight]);

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
