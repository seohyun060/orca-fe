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
	const onReadMoreClick = useCallback(() => {
		if (filteredList.length > 16) {
			setPrevHeight(containerHeight);
			setReadMore((prev) => !prev);
			console.log(prevHeight, containerHeight);
		}
	}, [readMore]);
	const onSetSearch = useCallback(
		(e: EChange) => {
			setSearch(e.target.value);
		},
		[search],
	);
	const filteredList = useMemo(
		() =>
			researcherList.filter(
				(researcher) => researcher.name.indexOf(search) !== -1,
			),
		[search],
	);
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
		},
		[navigate],
	);
	const handleResize = () => {
		if (window.innerWidth > 1400) {
			if (filteredList.length > 16 && !readMore) {
				setContainerHeight('1742px');
			} else {
				setContainerHeight('fit-content');
			}
		} else if (window.innerWidth > 1024) {
			if (filteredList.length > 16 && !readMore) {
				setContainerHeight('1315px');
			} else {
				setContainerHeight('fit-content');
			}
		} else if (window.innerWidth > 768) {
			if (filteredList.length > 16 && !readMore) {
				setContainerHeight('1022px');
			} else {
				setContainerHeight('fit-content');
			}
		} else {
			if (filteredList.length > 16 && !readMore) {
				setContainerHeight('584px');
			} else {
				setContainerHeight('fit-content');
			}
		}
	};
	useEffect(() => {
		const observer = new ResizeObserver(handleResize);
		const targetElement = document.querySelector('.researcher')!;
		observer.observe(targetElement);
		return () => {};
	}, [filteredList, readMore, containerHeight]);

	return (
		<Researcher
			route={route}
			search={search}
			readMore={readMore}
			onSetSearch={onSetSearch}
			filteredList={filteredList}
			containerHeight={containerHeight}
			onReadMoreClick={onReadMoreClick}
			onResearcherClick={onResearcherClick}
			prevHeight={prevHeight}
		/>
	);
};

export default ResearcherContainer;
