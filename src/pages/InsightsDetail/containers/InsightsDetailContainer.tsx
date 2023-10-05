import React from 'react';
import InsightsDetail from '../InsightsDetail';
import { useLocation } from 'react-router-dom';
type Props = {};

const InsightsDetailContainer = (props: Props) => {
	const location = useLocation();
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
	return (
		<InsightsDetail
			title={title}
			type={type}
			link={link}
			date={date}
			formatDate={formatDate}
		/>
	);
};

export default InsightsDetailContainer;
