import React from 'react';
import { useTranslation } from 'react-i18next';
import './style/Insight.css';
import InsightsCard from './components/InsightsCard';
import { Insight } from '@typedef/types';
import { motion, AnimatePresence } from 'framer-motion';
import PdfThumbnail from './components/PdfThumbnail';
type Props = {
	insightsGnbHandler: (e: string) => void;
	filteredList: Insight[];
	readMore: boolean;
	onReadMoreClick: () => void;
	containerHeight: string;
	selectedTab: number;
	prevHeight: string;
	slicedList: Insight[];
	formatDate: (date: Date) => string;
	onInsightClick: (
		type: string,
		title: string,
		link: string,
		date: Date,
		id: number,
	) => void;
};

const Insights = ({
	insightsGnbHandler,
	filteredList,
	readMore,
	onReadMoreClick,
	containerHeight,
	selectedTab,
	prevHeight,
	slicedList,
	formatDate,
	onInsightClick,
}: Props) => {
	const { t } = useTranslation();
	return (
		<div className='insights'>
			<div className='insights-head'>
				<div className='big'>ORCA Insights:</div>
				<div className='small'>{t('news')}</div>
			</div>
			<div className='insights-gnb'>
				<div className='insights-gnb-body'>
					{/* 추후에 동적생성? */}
					<button
						onClick={() => {
							insightsGnbHandler('all');
							console.log(filteredList);
						}}
						style={{
							backgroundColor: selectedTab == 0 ? '#000' : '#fff',
							color: selectedTab == 0 ? '#fff' : '#9E9E9E',
						}}
					>
						ORCA Insights
					</button>
					<button
						onClick={() => {
							insightsGnbHandler('whitepaper');
						}}
						style={{
							backgroundColor: selectedTab == 1 ? '#000' : '#fff',
							color: selectedTab == 1 ? '#fff' : '#9E9E9E',
						}}
					>
						White Paper
					</button>
					<button
						onClick={() => {
							insightsGnbHandler('publication');
						}}
						style={{
							backgroundColor: selectedTab == 2 ? '#000' : '#fff',
							color: selectedTab == 2 ? '#fff' : '#9E9E9E',
						}}
					>
						Publication
					</button>
					<button
						onClick={() => {
							insightsGnbHandler('news');
						}}
						style={{
							backgroundColor: selectedTab == 3 ? '#000' : '#fff',
							color: selectedTab == 3 ? '#fff' : '#9E9E9E',
						}}
					>
						News
					</button>
					<button
						onClick={() => {
							insightsGnbHandler('education');
						}}
						style={{
							backgroundColor: selectedTab == 4 ? '#000' : '#fff',
							color: selectedTab == 4 ? '#fff' : '#9E9E9E',
						}}
					>
						Education
					</button>
				</div>
			</div>
			{filteredList.length === 0 ? (
				<div className='waitPlease'>
					유익한 정보를 드리기 위해 열심히 제작중입니다. 조금만 기다려주세요.
				</div>
			) : (
				<div
					className='insights-body'
					style={{
						maxHeight: 'fit-content',
					}}
				>
					<AnimatePresence>
						{filteredList.map((insight, index) => {
							// 첫 12개만 출력하거나 readMore가 true면 모두 출력
							if (!readMore && index >= 12) return null;

							return (
								<motion.div
									className='insight-info'
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{
										duration: 0.3,
										delay: 0.05 * (readMore ? index - 12 : index),
									}}
									key={`insight-${index}`}
									onClick={() => {
										onInsightClick(
											insight.type,
											insight.title,
											insight.link,
											insight.date,
											insight.id,
										);
									}}
								>
									<div className='learnMore'>
										<div className='text'>Learn More</div>
									</div>
									<div className='insight-info-box'>
										<PdfThumbnail link={insight.link} />
									</div>
									<div className='insight-info-type'>{insight.type}</div>
									<div className='insight-info-title'>{insight.title}</div>
									<div className='insight-info-date'>
										{formatDate(insight.date)}
									</div>
								</motion.div>
							);
						})}
					</AnimatePresence>
				</div>
			)}

			{filteredList.length > 12 ? (
				<button className='insights-readmore' onClick={onReadMoreClick}>
					{readMore ? 'Fold' : 'Read More'}
				</button>
			) : (
				''
			)}
		</div>
	);
};

export default Insights;
