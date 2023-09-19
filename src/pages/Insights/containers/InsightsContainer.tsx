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
	const [filteredList, setFilteredList] = useState<Insight[]>([]);

	const [readMore, setReadMore] = useState(false);
	const [containerHeight, setContainerHeight] = useState('1314px');
	const [prevHeight, setPrevHeight] = useState('1314px');
	const [slicedList, setSlicedList] = useState<Insight[]>([]);

	const [selectedTab, setSelectedTab] = useState(0);
	const onReadMoreClick = useCallback(() => {
		if (insightList.length > 12) {
			setPrevHeight(containerHeight);
			setReadMore((prev) => !prev);
		}
	}, [readMore, filteredList]);
	const insightsGnbHandler = useCallback(
		(type: string) => {
			switch (type) {
				case 'all':
					//setFilteredList(insightList);
					setSelectedTab(0);
					break;
				case 'whitepaper':
					// setFilteredList(
					// 	insightList.filter((insight) => insight.type == 'White Paper'),
					// );
					setSelectedTab(1);
					console.log(selectedTab);
					break;
				case 'publication':
					// setFilteredList(
					// 	insightList.filter((insight) => insight.type == 'Publication'),
					// );
					setSelectedTab(2);
					console.log(selectedTab);
					break;
				case 'news':
					// setFilteredList(
					// 	insightList.filter((insight) => insight.type == 'News'),
					// );
					setSelectedTab(3);
					break;
				case 'education':
					// setFilteredList(
					// 	insightList.filter((insight) => insight.type == 'Education'),
					// );
					setSelectedTab(4);
					break;
			}
			//setSlicedList(filteredList);
			console.log(selectedTab);
			console.log(window.innerWidth);
		},
		[filteredList, selectedTab, slicedList],
	);
	// const handleResize = () => {
	// 	if (window.innerWidth > 1400) {
	// 		if (filteredList.length > 12 && !readMore) {
	// 			setContainerHeight('1314px');
	// 		} else {
	// 			setContainerHeight('fit-content');
	// 		}
	// 	} else if (window.innerWidth > 1024) {
	// 		console.log(readMore, window.innerWidth, containerHeight, 'ddd');
	// 		if (filteredList.length > 12 && !readMore) {
	// 			setContainerHeight('992px');
	// 		} else {
	// 			setContainerHeight('fit-content');
	// 		}
	// 	} else if (window.innerWidth > 768) {
	// 		if (filteredList.length > 12 && !readMore) {
	// 			setContainerHeight('771.64px');
	// 		} else {
	// 			setContainerHeight('fit-content');
	// 		}
	// 	} else {
	// 		if (filteredList.length > 12 && !readMore) {
	// 			setContainerHeight('870px');
	// 		} else {
	// 			setContainerHeight('fit-content');
	// 		}
	// 	}
	// };

	useEffect(() => {
		//handleResize();
		// const observer = new ResizeObserver(handleResize);
		// observer.observe(targetElement);

		switch (selectedTab) {
			case 0:
				setFilteredList(insightList);
				break;
			case 1:
				setFilteredList(
					insightList.filter((insight) => insight.type == 'White Paper'),
				);
				break;
			case 2:
				setFilteredList(
					insightList.filter((insight) => insight.type == 'Publication'),
				);
				console.log(selectedTab);
				break;
			case 3:
				setFilteredList(
					insightList.filter((insight) => insight.type == 'News'),
				);
				break;
			case 4:
				setFilteredList(
					insightList.filter((insight) => insight.type == 'Education'),
				);
				break;
		}
		// const targetElement = document.querySelector('.insights')!;
		// if (readMore) {
		// 	setFilteredList(filteredList);
		// } else {
		// 	setFilteredList((prev) => {
		// 		const newFilteredList = [];
		// 		for (let i = 0; i < Math.min(12, prev.length); i++) {
		// 			newFilteredList.push(prev[i]);
		// 		}
		// 		return newFilteredList;
		// 	});
		// 	// setSlicedList(filteredList.slice(0, 12));
		// }
		return () => {};
	}, [readMore, containerHeight, selectedTab]);

	return (
		<Insights
			insightsGnbHandler={insightsGnbHandler}
			filteredList={filteredList}
			readMore={readMore}
			onReadMoreClick={onReadMoreClick}
			containerHeight={containerHeight}
			selectedTab={selectedTab}
			prevHeight={prevHeight}
			slicedList={slicedList}
		/>
	);
};

export default InsightsContainer;
