import HomeContainer from 'src/pages/Home/containers/HomeContainer';
import ProjectsPage from 'src/pages/Projects/ProjectsPage';
import ProjectDetails from 'src/pages/Projects/ProjectDetails';
import EventsPage from 'src/pages/Events/EventsPage';
import EventDetails from 'src/pages/Events/EventDetails';
import Error404 from 'src/pages/Error404/Error404';

import React, { useEffect, useState } from 'react';
import {
	BrowserRouter as Router,
	useLocation,
	Route,
	Routes,
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './styles/rootnavigation.style.css';
import FooterContainer from 'src/pages/Footer/containers/FooterContainer';
import GnbContainer from 'src/pages/Gnb/containers/GnbContainer';
import OrcaContainer from 'src/pages/Orca/containers/OrcaContainer';
import ResearcherContainer from 'src/pages/Researcher/containers/ResearcherContainer';
import InsightsContainer from 'src/pages/Insights/containers/InsightsContainer';
import ResearcherDetailContainer from 'src/pages/ResearcherDetail/containers/ResearcherDetailContainer';
import InsightsDetailContainer from 'src/pages/InsightsDetail/containers/InsightsDetailContainer';
import { EChange } from '@typedef/types';
// /* eslint no-restricted-globals: ["off"] */
type Props = {
	newsPop: boolean;
	newsEmail: string;
	onChangeNewsEmail: (e: EChange) => void;
	onConfirmNews: () => void;
	onNewsSubClick: () => void;
};
const RootNavigation = ({
	newsPop,
	newsEmail,
	onChangeNewsEmail,
	onConfirmNews,
	onNewsSubClick,
}: Props) => {
	const location = useLocation();
	return (
		<div className='entire'>
			<GnbContainer location={location.pathname} />
			<Routes location={location}>
				<Route
					path='/'
					element={<HomeContainer location={location.pathname} />}
				/>
				<Route path='/orca' element={<OrcaContainer />} />
				<Route
					path='/researchers'
					element={<ResearcherContainer location={location.pathname} />}
				/>
				<Route
					path='/researchers/:id'
					element={<ResearcherDetailContainer />}
				/>
				<Route path='/projects' element={<ProjectsPage />} />
				<Route path='/projects/:id' element={<ProjectDetails />} />
				<Route path='/events' element={<EventsPage />} />
				<Route path='/events/:id' element={<EventDetails />} />
				<Route path='/insights' element={<InsightsContainer />} />
				<Route path='/error404' element={<Error404 />} />
				<Route path='/insights/:id' element={<InsightsDetailContainer />} />
				{/* <Route path="/*" element={<></>} /> */}
			</Routes>
			{newsPop ? (
				<div className='newspop'>
					<div className='newspop-box'>
						<div className='text'>
							Now you can check various updates and news with
							<br />
							{`${newsEmail}!`}
						</div>
						<button onClick={onConfirmNews}>Subscribe</button>
					</div>
				</div>
			) : (
				''
			)}
			<FooterContainer
				location={location.pathname}
				email={newsEmail}
				onChangeEmail={onChangeNewsEmail}
				onNewsSubClick={onNewsSubClick}
			/>
		</div>
	);
};

export default RootNavigation;
