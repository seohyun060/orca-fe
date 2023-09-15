import React, { useCallback, useEffect, useState } from 'react';
import Insights from '../Insights';
import { Insight } from '@typedef/types';
type Props = {};

for (let j = 0; j < 18; j++) {}
const insightList: Insight[] = [];

for (let i = 0; i < 20; i++) {
	let tempType: string = '';
	if (i < 5) {
		tempType = 'White Paper';
	} else if (i < 10) {
		tempType = 'Publication';
	} else if (i < 15) {
		tempType = 'News';
	} else {
		tempType = 'Education';
	}
	insightList.push({
		type: tempType,
		title: 'Real-time Decision Support by Light-weighted AI ...',
		date: '19.August.23',
	});
}

const InsightsContainer = (props: Props) => {
	const [filteredList, setFilteredList] = useState<Insight[]>(insightList);
	const [readMore, setReadMore] = useState(false);
	const [containerHeight, setContainerHeight] = useState('1314px');
	const [selectedTab, setSelectedTab] = useState(0);
	const onReadMoreClick = useCallback(() => {
		if (filteredList.length > 12) {
			setReadMore((prev) => !prev);
		}
	}, [readMore]);
	const insightsGnbHandler = useCallback(
		(type: string) => {
			switch (type) {
				case 'all':
					setFilteredList(insightList);
					setSelectedTab(0);
					break;
				case 'whitepaper':
					setFilteredList(
						insightList.filter((insight) => insight.type == 'White Paper'),
					);
					setSelectedTab(1);
					console.log(selectedTab);
					break;
				case 'publication':
					setFilteredList(
						insightList.filter((insight) => insight.type == 'Publication'),
					);
					setSelectedTab(2);
					console.log(selectedTab);
					break;
				case 'news':
					setFilteredList(
						insightList.filter((insight) => insight.type == 'News'),
					);
					setSelectedTab(3);
					break;
				case 'education':
					setFilteredList(
						insightList.filter((insight) => insight.type == 'Education'),
					);
					setSelectedTab(4);
					break;
			}
			console.log(selectedTab);
			console.log(window.innerWidth);
		},
		[filteredList, selectedTab],
	);
	const handleResize = () => {
		if (window.innerWidth > 1400) {
			if (filteredList.length > 12 && !readMore) {
				setContainerHeight('1314px');
			} else {
				setContainerHeight('fit-content');
			}
		} else if (window.innerWidth > 1024) {
			console.log(readMore, window.innerWidth, containerHeight, 'ddd');
			if (filteredList.length > 12 && !readMore) {
				setContainerHeight('992px');
			} else {
				setContainerHeight('fit-content');
			}
		} else if (window.innerWidth > 768) {
			if (filteredList.length > 12 && !readMore) {
				setContainerHeight('771.64px');
			} else {
				setContainerHeight('fit-content');
			}
		} else {
			if (filteredList.length > 12 && !readMore) {
				setContainerHeight('440.94px');
			} else {
				setContainerHeight('fit-content');
			}
		}
	};

	useEffect(() => {
		//handleResize();
		const observer = new ResizeObserver(handleResize);
		const targetElement = document.querySelector('.insights')!;
		observer.observe(targetElement);
		return () => {};
	}, [filteredList, readMore, containerHeight, window.innerWidth]);

	return (
		<Insights
			insightsGnbHandler={insightsGnbHandler}
			filteredList={filteredList}
			readMore={readMore}
			onReadMoreClick={onReadMoreClick}
			containerHeight={containerHeight}
			selectedTab={selectedTab}
		/>
	);
};

export default InsightsContainer;
