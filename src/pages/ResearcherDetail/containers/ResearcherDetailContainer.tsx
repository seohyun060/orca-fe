import React, { useCallback } from 'react';
import ResearcherDetail from '../ResearcherDetail';
import { useLocation, useNavigate } from 'react-router-dom';
type Props = {};

const ResearcherDetailContainer = ({}: Props) => {
	const publist = [1, 2, 3, 4, 5, 6, 7];
	const location = useLocation();
	const navigate = useNavigate();
	const name = location.state.Name;
	const profile = location.state.Profile;
	const department = location.state.Department;
	const project = location.state.Project;
	const readMore = location.state.ReadMore;
	const index = location.state.Index;
	const onBackClick = useCallback(() => {
		let scrollPosition = localStorage.getItem('scrollPosition');
		localStorage.removeItem('scrollPosition');
		if (!scrollPosition) {
			scrollPosition = '0';
		}
		// Get the maximum scroll height of the document
		let targetScrollPosition = parseFloat(scrollPosition) || 0;

		// If the target scroll position is beyond the maximum scroll height, set it to the maximum scroll height
		navigate('/researcher', {
			state: {
				Index: index,
			},
		});

		setTimeout(() => {
			window.scrollTo({ top: targetScrollPosition });
		}, 150);

		console.log(targetScrollPosition);
	}, [location.pathname]);

	return (
		<ResearcherDetail
			name={name}
			profile={profile}
			department={department}
			project={project}
			publist={publist}
			navigate={navigate}
			onBackClick={onBackClick}
		/>
	);
};

export default ResearcherDetailContainer;
