import Gnb from '../Gnb';

import { GNBTableTypes } from '@typedef/types';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
type Props = { location: string };
const GnbContainer = ({ location }: Props) => {
	const route = location.split('/')[1];
	const navigate = useNavigate();
	const tabTable: GNBTableTypes[] = [
		{
			label: 'ORCA',
			path: '/orca',
		},
		{
			label: 'Researchers',
			path: '/researchers',
		},
		{
			label: 'Projects',
			path: '/projects',
		},
		{
			label: 'Events',
			path: '/events',
		},
		{
			label: 'Insights',
			path: '/insights',
		},
		{
			label: 'Join Us',
			path: '/',
		},
	];
	const [selectedTab, setSelectedTab] = useState<string>('/');
	const [language, setLanguage] = useState('En');
	const [gnbColor, setGnbColor] = useState('');
	const [scrollPosition, setScrollPosition] = useState(0);
	const [mobile, setMobile] = useState(false);
	const [globe, setGlobe] = useState(false);
	const [menuToggle, setMenuToggle] = useState(false);

	const { i18n, t } = useTranslation();
	const onMenuToggleClicked = useCallback(() => {
		setMenuToggle((prev) => !prev);
	}, []);
	const onGlobeClicked = useCallback(() => {
		setGlobe((prev) => !prev);
	}, []);

	const onItemClicked = useCallback(
		async (path: string) => {
			setSelectedTab(path);

			navigate(path);

			window.scrollTo(0, 0);
		},
		[selectedTab],
	);
	const updateScroll = () => {
		setScrollPosition(window.scrollY || document.documentElement.scrollTop);
	};
	const onSideJoinUsClicked = useCallback(async (path: string) => {
		await onItemClicked(path);
		if (path === '/') {
			window.scrollTo(0, 900);
		}
	}, []);

	const gnbColorHandler = useCallback(() => {
		if (`/${route}` == '/') {
			if (scrollPosition > 2000) {
				setGnbColor('-white');
			} else {
				setGnbColor('');
			}
		} else if (`/${route}` == '/orca') {
			if (scrollPosition > 727) {
				setGnbColor('-white');
			} else {
				setGnbColor('');
			}
		} else if (location === '/researchers') {
			if (window.innerWidth > 1400) {
				if (scrollPosition > 1080) {
					setGnbColor('-white');
				} else {
					setGnbColor('');
				}
			} else if (window.innerWidth > 1092) {
				if (scrollPosition > 900) {
					setGnbColor('-white');
				} else {
					setGnbColor('');
				}
			} else if (window.innerWidth > 768) {
				if (scrollPosition > 700) {
					setGnbColor('-white');
				} else {
					setGnbColor('');
				}
			} else {
				if (scrollPosition > 400) {
					setGnbColor('-white');
				} else {
					setGnbColor('');
				}
			}
		} else if (`/${route}` == '/projects') {
			setGnbColor('-white');
		} else if (location.includes('/researchers')) {
			setGnbColor('-white');
		} else if (`/${route}` == '/insights') {
			setGnbColor('-white');
		} else if (`/${route}` == '/events') {
			setGnbColor('-white');
		} else if (`/${route}` == '/insightsdetail') {
			setGnbColor('-white');
		}
	}, [scrollPosition, location, route]);

	const onLanguageClicked = useCallback(() => {
		if (language === 'Kr') {
			setLanguage('En');
			i18n.changeLanguage('en');
		} else {
			setLanguage('Kr');
			i18n.changeLanguage('kr');
		}
	}, [language]);
	// ... (이전 코드)

	// ... (나머지 코드)

	useEffect(() => {
		window.addEventListener('scroll', updateScroll);
		gnbColorHandler();
		// if (window.innerWidth < 768) {
		// 	setMobile(true);
		// } else {
		// 	setMobile(false);
		// }
		//console.log(mobile);
	}, [scrollPosition, route, location]);
	return (
		<div>
			{location !== '/error404' ? (
				<Gnb
					gnbColor={gnbColor}
					tabTable={tabTable}
					language={language}
					route={route}
					onLanguageClicked={onLanguageClicked}
					onItemClicked={onItemClicked}
					menuToggle={menuToggle}
					onMenuToggleClicked={onMenuToggleClicked}
					setMenuToggle={setMenuToggle}
					globe={globe}
					onGlobeClicked={onGlobeClicked}
					setLanguage={setLanguage}
					i18n={i18n}
					onSideJoinUsClicked={onSideJoinUsClicked}
				/>
			) : (
				''
			)}
		</div>
	);
};

export default GnbContainer;
