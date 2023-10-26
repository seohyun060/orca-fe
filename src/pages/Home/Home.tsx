import React from 'react';

import './styles/home.styles.css';
import HomeIntroContainer from './containers/HomeIntroContainer';
import HomeProjects from './components/HomeProjects';
import HomeEvents from './components/HomeEvents';
import HomeInsights from './components/HomeInsights';

import images from 'src/assets/images';
import home_banner from '../../assets/images/HOME/home_banner.png';

import HomeResearcherContainer from './containers/HomeResearcherContainer';
import FooterContainer from '../Footer/containers/FooterContainer';
import './styles/home.styles.scss';
type Props = {
	route: string;
	mainBanner: string;
};
const Home = ({ route, mainBanner }: Props) => {
	return (
		<div className='home'>
			<div className='home-anime'>
				<img src={images.logo_gif} />
			</div>
			<HomeIntroContainer />
			<HomeResearcherContainer route={route} />
			<HomeProjects />
			<HomeEvents />
			<HomeInsights />
		</div>
	);
};

export default Home;
