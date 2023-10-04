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
	selectedBoxList: boolean[];
	setSelectedBoxList: React.Dispatch<React.SetStateAction<boolean[]>>;
	activeList: boolean[];
	setActiveList: React.Dispatch<React.SetStateAction<boolean[]>>;
};

const ResearcherMap = ({
	globalLists,
	isSelected,
	setIsSelected,
	black,
	selectedBoxList,
	setSelectedBoxList,
	activeList,
	setActiveList,
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
							selectedBoxList={selectedBoxList}
							setSelectedBoxList={setSelectedBoxList}
							activeList={activeList}
							setActiveList={setActiveList}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ResearcherMap;
