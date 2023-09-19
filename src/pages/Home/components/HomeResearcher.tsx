import React, { useState } from 'react';
import '../styles/home.styles.scss';
import { ResearcherList } from '@typedef/types';
import { useTranslation } from 'react-i18next';
import images from 'src/assets/images';
import ResearcherMapContainer from '../containers/ResearcherMapContainer';

type Props = {
	onViewAllClicked: () => void;
	route: string;
};

const HomeResearcher = ({ onViewAllClicked, route }: Props) => {
	const { t } = useTranslation();
	return (
		<div className='home-research'>
			<div className='home-research-head'>
				<span>{t('orca_researchers')}</span>
				<button onClick={onViewAllClicked}>{t('view_all')}</button>
			</div>
			<ResearcherMapContainer route={route} />
		</div>
	);
};

export default HomeResearcher;
