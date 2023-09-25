import HomeResearcher from '../components/HomeResearcher';
import { useNavigate } from 'react-router-dom';
import React, { useCallback, useEffect, useState } from 'react';
import { Researchers, ResearcherList } from '@typedef/types';
import images from 'src/assets/images';
// const globalLists: ResearcherList[] = [];

type Props = {
	route: string;
};

const HomeResearcherContainer = ({ route }: Props) => {
	console.log('????');
	const navigate = useNavigate();
	const onViewAllClicked = useCallback(() => {
		navigate('/researcher');
		window.scrollTo(0, 0);
	}, []);

	return <HomeResearcher onViewAllClicked={onViewAllClicked} route={route} />;
};

export default HomeResearcherContainer;
