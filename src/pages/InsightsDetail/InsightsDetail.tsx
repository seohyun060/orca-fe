import React from 'react';
import PdfViewer from './components/PdfViewer';
import images from 'src/assets/images';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './styles/insightsdetail.styles.css';
type Props = {
	title: string;
	type: string;
	link: string[];
	date: Date;
	formatDate: (date: Date) => string;
	onBackClick: () => void;
};

const InsightsDetail = ({
	title,
	type,
	link,
	date,
	formatDate,
	onBackClick,
}: Props) => {
	const navigate = useNavigate();
	const { t } = useTranslation();
	return (
		<div className='iDetail'>
			<div className='iDetail-back' onClick={() => onBackClick()}>
				<div className='iDetail-back-box'>
					<img src={images.back_arrow} />
					<div>{t('back')}</div>
				</div>
			</div>
			<div className='iDetail-title'>{title}</div>
			<div className='iDetail-typedate'>
				<div className='iDetail-typedate-type'>{`: ${type}`}</div>
				<div className='iDetail-typedate-date'>{formatDate(date)}</div>
			</div>
			<div className='iDetail-pdf'>
				{link.map((l, index) => (
					<PdfViewer link={l} />
				))}
			</div>
			<div className='iDetail-back-container'>
				<div className='readmore' onClick={() => onBackClick()}>
					Back
				</div>
			</div>
		</div>
	);
};

export default InsightsDetail;
