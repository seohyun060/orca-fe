import React, { useEffect, useState } from 'react';
import ResearcherMap from '../components/ResearcherMap';
import { ResearcherList, Researchers } from '@typedef/types';
import images from 'src/assets/images';
type Props = { route: string };
const globalLists: ResearcherList[] = [];

for (let i = 0; i < 32; i++) {
	const tempList: Researchers[] = [];
	for (let j = 0; j < 18; j++) {
		tempList.push({
			profile: images.profile,
			name: `${j}longname researcher`,
			department: 'Radiology Department',
			project: 'CadAI-B projects',
		});
	}
	globalLists.push(tempList);
}
const ResearcherMapContainer = ({ route }: Props) => {
	const [black, setBlack] = useState('');
	useEffect(() => {
		if (route === 'researcher') {
			setBlack('-black');
		} else {
			setBlack('');
		}
	}, [black, route]);
	const [selectedBoxList, setSelectedBoxList] = useState<boolean[]>(
		Array(32).fill(false),
	);
	const [activeList, setActiveList] = useState<boolean[]>(
		Array(32).fill(false),
	);
	const [isSelected, setIsSelected] = useState<boolean>(false);
	return (
		<ResearcherMap
			globalLists={globalLists}
			isSelected={isSelected}
			setIsSelected={setIsSelected}
			black={black}
			selectedBoxList={selectedBoxList}
			setSelectedBoxList={setSelectedBoxList}
			activeList={activeList}
			setActiveList={setActiveList}
		/>
	);
};

export default ResearcherMapContainer;
