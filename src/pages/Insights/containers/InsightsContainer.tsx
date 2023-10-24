import React, { useCallback, useEffect, useState } from 'react';
import Insights from '../Insights';
import { Insight } from '@typedef/types';
import { useNavigate } from 'react-router-dom';
import { getInsights, getInsightDetail } from 'src/api/InsightAPI';
type Props = {};

for (let j = 0; j < 18; j++) {}
//const insightList: Insight[] = [];

// for (let i = 0; i < 2; i++) {
// 	let tempType: string = '';
// 	let tempLink: string = '';
// 	let tempTitle: string = '';
// 	if (i == 0) {
// 		tempType = 'White Paper';
// 		tempLink =
// 			'https://raw.githubusercontent.com/seohyun060/orca-fe-pdf/main/CadAI-B%20Initial%20Clinical%20Validation.pdf';
// 		tempTitle = 'CadAI-B Initial Clinical Validation';
// 	} else if (i == 1) {
// 		tempType = 'White Paper';
// 		tempLink =
// 			'https://raw.githubusercontent.com/seohyun060/orca-fe-pdf/main/CadAI-B Technical Perspective.pdf';
// 		tempTitle = 'CadAI-B Technical Perspective';
// 	}
// 	//  else if (i < 15) {
// 	// 	tempType = 'News';
// 	// 	tempLink =
// 	// 		'https://raw.githubusercontent.com/seohyun060/orca-fe-pdf/main/CadAI-B%20Initial%20Clinical%20Validation.pdf';
// 	// } else {
// 	// 	tempType = 'Education';
// 	// 	tempLink =
// 	// 		'https://raw.githubusercontent.com/seohyun060/orca-fe-pdf/main/CadAI-B Technical Perspective.pdf';
// 	// }
// 	insightList.push({
// 		type: tempType,
// 		title: tempTitle,
// 		date: new Date(2023, 7, 19),
// 		link: tempLink,
// 	});
// }

const InsightsContainer = (props: Props) => {
	const navigate = useNavigate();
	const [filteredList, setFilteredList] = useState<Insight[]>([]);
	const [insightList, setInsightList] = useState<Insight[]>([]);
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
					setSelectedTab(0);
					break;
				case 'whitepaper':
					setSelectedTab(1);
					console.log(selectedTab);
					break;
				case 'publication':
					setSelectedTab(2);
					console.log(selectedTab);
					break;
				case 'news':
					setSelectedTab(3);
					break;
				case 'education':
					setSelectedTab(4);
					break;
			}
			//setSlicedList(filteredList);
			console.log(selectedTab);
			console.log(window.innerWidth);
		},
		[filteredList, selectedTab, slicedList],
	);
	function formatDate(date: Date) {
		const months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];

		const year = date.getFullYear().toString().substr(-2); // 년도의 마지막 두 자리
		const month = months[date.getMonth()]; // 월을 문자열로 변환
		const day = date.getDate(); // 일

		return `${day}.${month}.${year}`;
	}
	const saveScrollPosition = () => {
		const scrollPosition = window.scrollY;

		console.log(scrollPosition);
		localStorage.setItem('scrollPosition', scrollPosition.toString());
	};
	const onInsightClick = useCallback(
		(type: string, title: string, link: string, date: Date, id: number) => {
			console.log(type, title, link, id);
			saveScrollPosition();
			navigate(`/insights/${id}`, {
				state: {
					Type: type,
					Title: title,
					Link: link,
					InsightDate: date,
				},
			});
			window.scrollTo(0, 0);
		},
		[navigate],
	);
	useEffect(() => {
		getInsights().then((data) => {
			console.log(data); // 나옴
			const updatedList: Insight[] = [];
			data.data.map((d: any) => {
				const tempData: Insight = {
					id: d.id,
					title: d.title,
					date: new Date(d.createDate),
					type: d.category,
					link: d.file,
					isStored: d.isStored,
				};
				updatedList.push(tempData);
			});
			setInsightList(updatedList);
			//setResearcherList(updatedList);
			//console.log(researcherList); // 안나옴
		});
		//console.log(researcherList); // 안나옴
		//console.log(tempData);

		// for (let i = 0; i < ResearcherAPI.length; i++){
		// 	researcherList.push({
		// 		id: ResearcherAPI[i].id,
		// 		name: ResearcherAPI[i].name,
		// 		location: ResearcherAPI[i].name,
		// 		profile: ResearcherAPI[i].name,
		// 		project: ResearcherAPI[i].name,
		// 		department: ResearcherAPI[i].name,
		// 	});
		// }
		// 	researcherList.push({
		// 		name: `${j}Name`,
		// 		profile: randomProfile,
		// 		department: 'Radiology Department',
		// 		project: 'CadAI-B projects',
		// 	});
		return () => {};
	}, []);

	useEffect(() => {
		setFilteredList(
			insightList.filter((insight) => insight.isStored !== false),
		);
		switch (selectedTab) {
			case 0:
				setFilteredList(insightList);
				console.log(insightList);
				break;
			case 1:
				setFilteredList(
					insightList.filter((insight) => insight.type == 'WHITE_PAPER'),
				);
				break;
			case 2:
				setFilteredList(
					insightList.filter((insight) => insight.type == 'PUBLICATION'),
				);
				console.log(selectedTab);
				break;
			case 3:
				setFilteredList(
					insightList.filter((insight) => insight.type == 'NEWS'),
				);
				break;
			case 4:
				setFilteredList(
					insightList.filter((insight) => insight.type == 'EDUCATION'),
				);
				break;
		}

		return () => {};
	}, [readMore, containerHeight, selectedTab, insightList]);

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
			formatDate={formatDate}
			onInsightClick={onInsightClick}
		/>
	);
};

export default InsightsContainer;
