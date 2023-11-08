import React from 'react';
import Footer from '../Footer';
import { useState, useEffect, useCallback } from 'react';
import { EChange } from '@typedef/types';
import { postNewsletters } from 'src/api/NewsletterAPI';
const emailList: string[] = [];
type Props = {
	location: string;
};

const FooterContainer = ({ location }: Props) => {
	const [email, setEmail] = useState('');
	const onChangeEmail = useCallback(
		(e: EChange) => {
			setEmail(e.target.value);
		},
		[email],
	);
	const onSubmitClicked = useCallback(() => {
		//emailList.push(email);
		postNewsletters(email);
		setEmail('');
	}, [email]);
	useEffect(() => {
		setEmail('');

		return () => {};
	}, [location]);
	return location !== '/error404' ? (
		<Footer
			email={email}
			onChangeEmail={onChangeEmail}
			onSubmitClicked={onSubmitClicked}
		/>
	) : (
		<></>
	);
};

export default FooterContainer;
