import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './styles/researcherdetail.styles.css';
import images from 'src/assets/images';
import PublicationCard from '../Projects/components/PublicationCard';
type Props = {
	name: string;
	profile: string;
	department: string;
	project: string;
	publist: number[];
	navigate: (e: string) => void;
};

const ResearcherDetail = ({
	name,
	profile,
	department,
	project,
	publist,
	navigate,
}: Props) => {
	const { t } = useTranslation();
	return (
		<div className='researcherdetail'>
			<div
				className='researcherdetail-back'
				onClick={() => {
					navigate('/researcher');
				}}
			>
				<img src={images.back_arrow} />
				<div>{t('back')}</div>
			</div>
			<div className='researcherdetail-individual'>
				{t('individual_esearcher')}
			</div>
			<div className='researcherdetail-profile'>
				<img src={profile} />
				<div className='researcherdetail-profile-name'>{name}</div>
				<div className='researcherdetail-profile-department'>{department}</div>
				<div className='researcherdetail-profile-project'>{project}</div>
				<div className='researcherdetail-profile-icon'>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
			<div className='researcherdetail-biography'>
				<div className='researcherdetail-biography-head'>{t('biography')}</div>
				<div className='researcherdetail-biography-body'>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
					nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
					volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
					ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
					Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
					molestie consequat, vel illum dolore eu feugiat nulla facilisis at
					vero eros et accumsan et iusto odio dignissim qui blandit praesent
					luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
					Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam
					nonummy nibh euismod tincidunt ut laoree
				</div>
			</div>
			<div className='researcherdetail-line'>
				<div></div>
			</div>
			<div className='researcherdetail-publication'>
				<div className='head'>{t('publications')}</div>
				{publist.map((index) => (
					<PublicationCard />
				))}
			</div>
		</div>
	);
};

export default ResearcherDetail;
