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
			label: 'Researcher',
			path: '/researcher',
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
	const [menuToggle, setMenuToggle] = useState(false);

	const { i18n, t } = useTranslation();
	const onMenuToggleClicked = useCallback(() => {
		setMenuToggle((prev) => !prev);
	}, []);
	const onItemClicked = useCallback(
		(path: string) => {
			if (path === '/custom') {
				return;
			}
			setSelectedTab(path);

			navigate(path);
			window.scrollTo(0, 0);
		},
		[selectedTab],
	);
	const updateScroll = () => {
		setScrollPosition(window.scrollY || document.documentElement.scrollTop);
	};

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
		} else if (`/${route}` == '/researcher') {
			if (scrollPosition > 1081) {
				setGnbColor('-white');
			} else {
				setGnbColor('');
			}
		} else if (`/${route}` == '/projects') {
			setGnbColor('-white');
		} else if (`/${route}` == '/researcherdetail') {
			setGnbColor('-white');
		} else if (`/${route}` == '/insights') {
			setGnbColor('-white');
		} else if (`/${route}` == '/events') {
			setGnbColor('-white');
		}
	}, [scrollPosition, route]);

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
	}, [scrollPosition, route]);
	return (
		<div>
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
			/>
		</div>
	);
};

export default GnbContainer;
