import React from 'react';
import './styles/gnb.styles.css';
import images from 'src/assets/images';
import { GNBTableTypes } from '@typedef/types';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
	gnbColor: string;
	tabTable: GNBTableTypes[];
	language: string;
	route: string;
	onLanguageClicked: () => void;
	onItemClicked: (item: string) => void;
	menuToggle: boolean;
	onMenuToggleClicked: () => void;
	setMenuToggle: any;
	globe: boolean;
	onGlobeClicked: any;
	setLanguage: any;
	i18n: any;
};

const gnb = ({
	gnbColor,
	tabTable,
	language,
	route,
	onLanguageClicked,
	onItemClicked,
	menuToggle,
	onMenuToggleClicked,
	setMenuToggle,
	globe,
	onGlobeClicked,
	setLanguage,
	i18n,
}: Props) => {
	const krBtnStyle = {
		backgroundColor: language === 'Kr' ? 'black' : 'white',
		color: language === 'Kr' ? 'white' : 'black',
	};

	// EN 버튼의 스타일
	const enBtnStyle = {
		backgroundColor: language === 'En' ? 'black' : 'white',
		color: language === 'En' ? 'white' : 'black',
	};
	return (
		<div className={`gnb${gnbColor}`} style={{ width: '100vw' }}>
			<img
				src={gnbColor === '-white' ? images.newlogo_b : images.newlogo_w}
				// src={images.logo_w}
				className='gnb-newlogo'
			/>
			<img
				src={gnbColor === '-white' ? images.logo_b : images.logo_w}
				// src={images.logo_w}
				className='gnb-logo'
				onClick={() => {
					onItemClicked('/');
					setMenuToggle(false);
				}}
			/>
			{!menuToggle ? (
				<img
					src={gnbColor === '-white' ? images.menu_b : images.menu}
					className='gnb-bar'
					onClick={onMenuToggleClicked}
				/>
			) : (
				<img
					src={gnbColor === '-white' ? images.gnb_back_b : images.gnb_back}
					className='gnb-bar'
					onClick={onMenuToggleClicked}
				/>
			)}

			{menuToggle && window.innerWidth <= 768 && (
				<div className='side'>
					<div className='side-menu'>
						{tabTable.map((item, idx) => {
							return (
								<div
									className='side-menu-button'
									key={idx}
									onClick={() => {
										onItemClicked(item.path);
										onMenuToggleClicked();
									}}
								>
									<div>{item.label}</div>
								</div>
							);
						})}
					</div>
				</div>
			)}
			<div className='gnb-tiny'>[ˈɔːr.kə]</div>
			<div className='gnb-menu'>
				{tabTable.slice(0, -1).map((item, idx) => {
					return (
						<div
							key={idx}
							onClick={() => {
								onItemClicked(item.path);
							}}
							style={{
								textDecorationLine: `/${route}` == item.path ? 'underline' : '',
							}}
						>
							{item.label}
						</div>
					);
				})}
			</div>
			<AnimatePresence>
				<motion.div
					className={`gnb-${language}`}
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
					}}
					exit={{
						opacity: 0,
					}}
					transition={{
						duration: 0.5,
						ease: 'easeInOut',
					}}
					key={`${language}`}
					onClick={onLanguageClicked}
				>
					<motion.div className='kr-btn'>KR</motion.div>
					<motion.div className='en-btn'>EN</motion.div>
				</motion.div>
			</AnimatePresence>
			<div
				className='gnb-join'
				onClick={() => {
					onItemClicked('/');
					window.scrollTo(0, 1000);
				}}
			>
				Join Us
			</div>
			<img
				src={gnbColor === '-white' ? images.language_b : images.language}
				className='gnb-language'
				//onClick={onLanguageClicked}
				onClick={onGlobeClicked}
			/>
			{globe ? (
				<div className='globeBox'>
					<div
						className='globeBox-en'
						onClick={() => {
							setLanguage('En');
							i18n.changeLanguage('en');
						}}
						style={{
							backgroundColor: language === 'En' ? '#3c3c3c' : '',
						}}
					>
						EN
					</div>
					<div
						className='globeBox-kr'
						onClick={() => {
							setLanguage('Kr');
							i18n.changeLanguage('kr');
						}}
						style={{
							backgroundColor: language === 'Kr' ? '#3c3c3c' : '',
						}}
					>
						KR
					</div>
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default gnb;
