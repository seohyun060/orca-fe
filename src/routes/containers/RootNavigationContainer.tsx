import RootNavigation from '@routes/RootNavigation';
import { EChange } from '@typedef/types';
import React, { useCallback, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
const RootNavigationContainer = () => {
	return (
		<Router>
			<RootNavigation />
		</Router>
	);
};

export default RootNavigationContainer;
