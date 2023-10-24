import React, { useCallback, useEffect, useState } from 'react';
import ResearcherDetail from '../ResearcherDetail';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getResearcherDetail } from 'src/api/ResearcherAPI';
import { ResearcherList, Researchers, Publication } from '@typedef/types';
import images from 'src/assets/images';
type Props = {};

const ResearcherDetailContainer = ({}: Props) => {
	const publist = [1, 2, 3, 4, 5, 6, 7];
	const location = useLocation();
	const navigate = useNavigate();
	// const name = location.state.Name;
	// const profile = location.state.Profile;
	// const department = location.state.Department;
	// const project = location.state.Project;
	const [name, setName] = useState('');
	const [profile, setProfile] = useState('');
	const [department, setDepartment] = useState('');
	const [project, setProject] = useState('');
	const [biography, setBiography] = useState('');
	const [linkedIn, setLinkedIn] = useState('');
	const [twitter, setTwitter] = useState('');
	const [publication, setPublication] = useState<Publication[]>([]);
	let index = 0;
	if (location.state) {
		index = location.state.Index;
	}

	const params = useParams();
	const onBackClick = useCallback(() => {
		let scrollPosition = localStorage.getItem('scrollPosition');
		localStorage.removeItem('scrollPosition');
		if (!scrollPosition) {
			scrollPosition = '0';
		}
		// Get the maximum scroll height of the document
		let targetScrollPosition = parseFloat(scrollPosition) || 0;

		// If the target scroll position is beyond the maximum scroll height, set it to the maximum scroll height
		navigate('/researcher', {
			state: {
				Index: index,
			},
		});

		setTimeout(() => {
			window.scrollTo({ top: targetScrollPosition });
		}, 150);

		console.log(targetScrollPosition);
	}, [location.pathname]);

	useEffect(() => {
		getResearcherDetail(params.id).then((data) => {
			console.log(data.data); // 나옴
			setName(data.data.name);
			if (data.data.image) {
				setProfile(data.data.image);
			} else {
				setProfile(images.logo_b);
			}
			//setProfile(data.data.image);
			setDepartment(data.data.affiliation);
			setProject(data.data.projectType);
			setPublication(data.data.publications);
			setBiography(data.data.biography);
			setTwitter(data.data.twitter);
			setLinkedIn(data.data.linkedIn);
			console.log(data);
		});
		return () => {};
	}, []);
	return (
		<>
			{profile ? (
				<ResearcherDetail
					name={name}
					profile={profile}
					department={department}
					project={project}
					publist={publist}
					navigate={navigate}
					onBackClick={onBackClick}
					publication={publication}
					linkedIn={linkedIn}
					twitter={twitter}
					biography={biography}
				/>
			) : (
				''
			)}
		</>
	);
};

export default ResearcherDetailContainer;
