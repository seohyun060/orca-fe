import React from 'react';
import './styles/orca.styles.scss';
import { useTranslation } from 'react-i18next';
import images from 'src/assets/images';
type Props = {
	orcaBanner: string;
	mobileWidth: number;
};

const Orca = ({ orcaBanner, mobileWidth }: Props) => {
	const { t } = useTranslation();
	return (
		<div className='orca'>
			<div className='orca-what-container'>
				<img
					className='orca-banner'
					src={orcaBanner}
					style={{
						left: mobileWidth < 768 ? mobileWidth - 768 : 0,
					}}
				/>
				<div className='banner-curtain' />
				<div className='orca-what'>
					<div className='orca-what-box'>
						<div
							className='orca-what-box-head'
							dangerouslySetInnerHTML={{ __html: t('orca_introduce') }}
						></div>
						<div className='orca-what-box-about'>{t('orca_about')}</div>
						<div className='orca-what-box-body'>{t('orca_what')}</div>
					</div>
				</div>
			</div>
			<div className='orca-goal'>
				<div className='orca-goal-box'>
					<div className='orca-goal-box-head'>{t('orca_goal_head')}</div>
					<div className='orca-goal-box-body1'>{t('orca_goal_body1')}</div>
					<div className='orca-goal-box-body2'>{t('orca_goal_body2')}</div>
				</div>
			</div>
			<div className='orca-benefits'>
				<div className='orca-benefits-box'>
					<div className='orca-benefits-box-head'>{t('orca_benefits')}</div>
					<div className='orca-benefits-box-body1'>
						<img
							className='orca-benefits-box-body1-square'
							src={images.picto3}
						></img>
						<div className='orca-benefits-box-body1-head'>
							{t('orca_benefit_goal1')}:
						</div>
						<div className='orca-benefits-box-body1-body'>
							{t('orca_benefit_goal1_contents')}
						</div>
					</div>
					<div className='orca-benefits-box-body2'>
						<img
							className='orca-benefits-box-body2-square'
							src={images.picto1}
						></img>
						<div className='orca-benefits-box-body2-head'>
							{t('orca_benefit_goal2')}:
						</div>
						<div className='orca-benefits-box-body2-body'>
							{t('orca_benefit_goal2_contents')}
						</div>
					</div>
					<div className='orca-benefits-box-body3'>
						<img
							className='orca-benefits-box-body3-square'
							src={images.picto2}
						></img>
						<div className='orca-benefits-box-body3-head'>
							{t('orca_benefit_goal3')}:
						</div>
						<div className='orca-benefits-box-body3-body'>
							{t('orca_benefit_goal3_contents')}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Orca;
