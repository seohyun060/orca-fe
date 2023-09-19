import React from 'react';
import './styles/gnb.styles.css';
import images from 'src/assets/images';
import { GNBTableTypes } from '@typedef/types';
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
	return (
		<div className={`gnb${gnbColor}`}>
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
			{gnbColor === '-white' ? <div className='gnb-tiny'>[ˈɔːr.kə]</div> : ''}
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
			<div className={`gnb-${language}`} onClick={onLanguageClicked}>
				<div className='kr-btn'>KR</div>
				<div className='en-btn'>EN</div>
			</div>
			<div className='gnb-join' onClick={() => onItemClicked('/')}>
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
