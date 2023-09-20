import React from 'react';
import ResearcherBoxContainer from '../containers/ResearcherBoxContainer';
import { ResearcherList } from '@typedef/types';
import '../styles/researchermap.styles.css';
import Map from '../components/Map';
type Props = {
	globalLists: ResearcherList[];

	isSelected: boolean;
	setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
	black: string;
};

const ResearcherMap = ({
	globalLists,
	isSelected,
	setIsSelected,
	black,
}: Props) => {
	return (
		<div className='map-container'>
			<div className={`researcher-map${black}`}>
				<Map />
				<div className='research-box-container'>
					{globalLists.map((researcherList, index) => (
						<ResearcherBoxContainer
							researcherList={researcherList}
							index={index}
							isSelected={isSelected}
							setIsSelected={setIsSelected}
							black={black}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ResearcherMap;
