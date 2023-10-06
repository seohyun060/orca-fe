import React, { useCallback, useEffect, useState, useMemo } from 'react';
import '../styles/home.styles.scss';
import { ResearcherList } from '@typedef/types';
import { useTranslation } from 'react-i18next';
import images from 'src/assets/images';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
	requestedItems: ResearcherList;
	boxType: number;
	onBackClick: (e: React.MouseEvent<HTMLImageElement>) => void;
	onGoClick: (e: React.MouseEvent<HTMLImageElement>) => void;
	boxClickHandler: (e: React.MouseEvent<HTMLElement>) => void;
	black: string;
	topPosition: string;
	leftPosition: string;
	dotList: string[];
	goTransition: boolean;
	selectedBoxList: boolean[];
	index: number;
	activeList: boolean[];
};

const ResearcherBox = ({
	requestedItems,
	boxType,
	onBackClick,
	onGoClick,
	boxClickHandler,
	black,
	topPosition,
	leftPosition,
	dotList,
	goTransition,
	selectedBoxList,
	index,
	activeList,
}: Props) => {
	const { t } = useTranslation();
	return (
		<div className={`country${boxType}`}>
			<div
				onClick={(e) => boxClickHandler(e)}
				className={`${
					!selectedBoxList[index] || activeList[index]
						? 'country-box'
						: 'country-box-Off'
				}`}
				style={{
					backgroundColor: activeList[index] ? '#9e9e9e' : '',
					mixBlendMode: 'multiply',
				}}
			></div>
			<div
				className={`researchers${activeList[index] ? '-active' : ''}`}
				style={{
					top: topPosition,
					left: leftPosition,
				}}
			>
				<div className='researchers-head'>{t('researcher_list')}</div>
				<img
					className='researchers-back'
					src={black === '' ? images.back_b : images.back_w}
					onClick={onBackClick}
				/>
				<AnimatePresence>
					<div className='researchers-body'>
						{requestedItems.map((requestItem, index) => (
							<motion.div
								layout
								initial={{ x: goTransition ? 100 : -100, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								exit={{ x: goTransition ? -100 : 100, opacity: 0 }}
								transition={{ duration: 0.3 }}
								className='researcher-card'
								key={`${requestItem.name}`}
							>
								<img src={requestItem.profile} />
								<span>{requestItem.name}</span>
							</motion.div>
						))}
					</div>
				</AnimatePresence>
				<img
					className='researchers-go'
					src={black === '' ? images.go_b : images.go_w}
					onClick={onGoClick}
				/>
				<div className='researchers-dot'>
					{dotList.map((dot, index) => (
						<img src={dot} />
					))}
				</div>
			</div>
		</div>
	);
};

export default ResearcherBox;
