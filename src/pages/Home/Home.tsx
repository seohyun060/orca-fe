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
import { EChange } from '@typedef/types';
type Props = {
	route: string;
	mainBanner: string;
	orcaPop: boolean;
	onConfirmOrca: () => void;
	onOrcaSubClick: () => void;
	orcaEmail: string;
	onChangeOrcaEmail: (e: EChange) => void;
};
const Home = ({
	route,
	mainBanner,
	orcaPop,
	onConfirmOrca,
	onOrcaSubClick,
	orcaEmail,
	onChangeOrcaEmail,
}: Props) => {
	return (
		<div className='home'>
			<div className='home-anime'>
				<video autoPlay loop muted>
					{/* <source src={images.logo_mp4} type='video/mp4' /> */}
					<source src={mainBanner} type='video/mp4' />
				</video>
			</div>
			<HomeIntroContainer
				onConfirmOrca={onConfirmOrca}
				onOrcaSubClick={onOrcaSubClick}
				email={orcaEmail}
				onChangeEmail={onChangeOrcaEmail}
			/>
			<HomeResearcherContainer route={route} />
			<HomeProjects />
			<HomeEvents />
			<HomeInsights />
			{orcaPop ? (
				<div className='home-orcapop'>
					<div className='home-orcapop-box'>
						<div className='text'>
							You're welcome! We'll contact you through
							<br />
							{`${orcaEmail}.`}
						</div>
						<button onClick={onConfirmOrca}>Subscribe</button>
					</div>
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default Home;
