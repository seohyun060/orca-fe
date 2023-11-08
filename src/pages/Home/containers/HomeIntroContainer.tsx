import React from 'react';
import HomeIntro from '../components/HomeIntro';
import { useState, useEffect, useCallback } from 'react';
import { EChange } from '@typedef/types';
import { postOrcaMembers } from 'src/api/OrcaMemberAPI';

type Props = {
	onConfirmOrca: () => void;
	onOrcaSubClick: () => void;
	email: string;
	onChangeEmail: (e: EChange) => void;
};
const emailList: string[] = [];
const HomeIntroContainer = ({
	onConfirmOrca,
	onOrcaSubClick,
	email,
	onChangeEmail,
}: Props) => {
	// const [email, setEmail] = useState('');

	// const onChangeEmail = useCallback(
	// 	(e: EChange) => {
	// 		setEmail(e.target.value);
	// 	},
	// 	[email],
	// );
	// const onConfirmClick = useCallback(() => {
	// 	setPopUp(false);
	// }, [popUp]);

	const onSubmitClicked = useCallback(
		(e: any) => {
			//emailList.push(email);
			e.preventDefault();
			postOrcaMembers(email);
			window.scrollTo(0, 0);
			onOrcaSubClick();

			//setEmail('');
		},
		[email],
	);

	return (
		<HomeIntro
			email={email}
			onChangeEmail={onChangeEmail}
			onSubmitClicked={onSubmitClicked}
		/>
	);
};

export default HomeIntroContainer;
