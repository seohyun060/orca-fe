import React from 'react';
import Footer from '../Footer';
import { useState, useEffect, useCallback } from 'react';
import { EChange } from '@typedef/types';
import { postNewsletters } from 'src/api/NewsletterAPI';
import useSubscribeStore from '@store/zustand/subscribeZustand';
const emailList: string[] = [];
type Props = {
	location: string;
};

const FooterContainer = ({ location }: Props) => {
	const { newsEmail, onChangeNewsEmail, onNewsSubClick } = useSubscribeStore();
	const onSubmitClicked = useCallback(
		(e: any) => {
			e.preventDefault();
			postNewsletters(newsEmail);
			onNewsSubClick();
		},
		[newsEmail],
	);
	useEffect(() => {
		return () => {};
	}, [location]);
	return location !== '/error404' ? (
		<Footer
			email={newsEmail}
			onChangeEmail={onChangeNewsEmail}
			onSubmitClicked={onSubmitClicked}
		/>
	) : (
		<></>
	);
};

export default FooterContainer;
