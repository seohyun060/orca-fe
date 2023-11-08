import RootNavigation from '@routes/RootNavigation';
import { EChange } from '@typedef/types';
import React, { useCallback, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
const RootNavigationContainer = () => {
	const [newsPop, setNewsPop] = useState(false);
	const [newsEmail, setNewsEmail] = useState('');
	const onChangeNewsEmail = useCallback(
		(e: EChange) => {
			setNewsEmail(e.target.value);
		},
		[newsEmail],
	);
	const onConfirmNews = useCallback(() => {
		setNewsPop(false);
		setNewsEmail('');
	}, [newsPop]);
	const onNewsSubClick = useCallback(() => {
		setNewsPop(true);
		window.scrollTo(0, 0);
	}, [newsPop]);

	return (
		<Router>
			<RootNavigation
				newsPop={newsPop}
				newsEmail={newsEmail}
				onChangeNewsEmail={onChangeNewsEmail}
				onConfirmNews={onConfirmNews}
				onNewsSubClick={onNewsSubClick}
			/>
		</Router>
	);
};

export default RootNavigationContainer;
