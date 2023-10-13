import React, { useCallback } from 'react';
import InsightsDetail from '../InsightsDetail';
import { useLocation, useNavigate } from 'react-router-dom';
type Props = {};

const InsightsDetailContainer = (props: Props) => {
	const location = useLocation();
	const navigate = useNavigate();
	const title = location.state.Title;
	const type = location.state.Type;
	const link = location.state.Link;
	const date = location.state.InsightDate;
	function formatDate(date: Date) {
		const year = date.getFullYear().toString().substr(-2); // 년도의 마지막 두 자리
		const month = ('0' + (date.getMonth() + 1)).slice(-2); // 월 (0부터 시작하므로 +1, 두 자리로 표현)
		const day = ('0' + date.getDate()).slice(-2); // 일 (두 자리로 표현)

		return `${year}.${month}.${day}`;
	}
	const onBackClick = useCallback(() => {
		let scrollPosition = localStorage.getItem('scrollPosition');
		localStorage.removeItem('scrollPosition');
		if (!scrollPosition) {
			scrollPosition = '0';
		}
		// Get the maximum scroll height of the document
		let targetScrollPosition = parseFloat(scrollPosition) || 0;

		// If the target scroll position is beyond the maximum scroll height, set it to the maximum scroll height
		navigate('/insights');

		setTimeout(() => {
			window.scrollTo({ top: targetScrollPosition });
		}, 150);

		console.log(targetScrollPosition);
	}, [location.pathname]);
	return (
		<InsightsDetail
			title={title}
			type={type}
			link={link}
			date={date}
			formatDate={formatDate}
			onBackClick={onBackClick}
		/>
	);
};

export default InsightsDetailContainer;