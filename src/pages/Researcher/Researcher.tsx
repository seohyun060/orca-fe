import React, { useCallback, useState } from 'react';
import ResearcherMapContainer from '../Home/containers/ResearcherMapContainer';
import './styles/researcher.styles.scss';
import { EChange, ResearcherList } from '@typedef/types';
import { notStrictEqual } from 'assert';
import { useTranslation } from 'react-i18next';
import images from 'src/assets/images';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
	route: string;
	search: string;
	readMore: boolean;
	onSetSearch: (e: EChange) => void;
	filteredList: ResearcherList;
	slicedList: ResearcherList;
	containerHeight: string;
	onReadMoreClick: () => void;

	onResearcherClick: any;
	prevHeight: string;
};

const Researcher = ({
	route,
	search,
	readMore,
	onSetSearch,
	filteredList,
	slicedList,
	containerHeight,
	onReadMoreClick,
	onResearcherClick,
	prevHeight,
}: Props) => {
	const { t } = useTranslation();
	return (
		<div className='researcher'>
			<div className='researcher-meet-background'>
				<div className='researcher-meet'>
					<div className='researcher-meet-head'>{t('researcher_title')}</div>
					<ResearcherMapContainer route={route} />
				</div>
			</div>
			<div className='researcher-body'>
				<div className='researcher-body-head'>{t('researcher_introduce')}</div>
				<div className='researcher-body-search'>
					<input
						placeholder='search'
						onChange={onSetSearch}
						required
						value={search}
					></input>
					{search ? <img src={images.search_b} /> : <img src={images.search} />}
				</div>
				<AnimatePresence>
					<motion.div
						className='researcher-body-list'
						style={{
							maxHeight: 'fit-content',
						}}

						// initial={{ maxHeight: prevHeight }}
						// animate={{ maxHeight: containerHeight }}
						// exit={{ maxHeight: prevHeight }}
						// key={containerHeight}
						// transition={{ duration: 0.5 }}
						// Adjust the duration as needed
					>
						<AnimatePresence>
							{slicedList.map((researcher, index) => (
								<motion.div
									className='researcher-info'
									layout
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									key={`${researcher.name}`}
									transition={{
										duration: 0.1,
										//delay: 0.2,
										delay: 0.005 * (readMore ? index - 12 : index),
									}}
									//key={`researcher-${index}`}
									// transition={{ duration: 0.3, delay:0.05*index}}
									onClick={() => {
										onResearcherClick(
											researcher.name,
											researcher.profile,
											researcher.department,
											researcher.project,
											index,
										);
										console.log('onResearcherClick');
									}}
								>
									<div className='researcher-info-box'>
										<div>Learn More</div>
									</div>
									<img src={researcher.profile}></img>
									<div className='researcher-info-name'>{researcher.name}</div>
									<div className='researcher-info-department'>
										{researcher.department}
									</div>
									<div className='researcher-info-project'>
										{researcher.project}
									</div>
								</motion.div>
							))}
						</AnimatePresence>
					</motion.div>
				</AnimatePresence>
				{filteredList.length > 16 ? (
					<button
						className='researcher-body-readmore'
						onClick={onReadMoreClick}
					>
						{readMore ? t('fold') : t('read_more')}
					</button>
				) : (
					''
				)}
			</div>
		</div>
	);
};

export default Researcher;
