import RootNavigationContainer from '@routes/containers/RootNavigationContainer';
import rootReducer from '@store/rootReducer';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactGA from 'react-ga';
import '../styles/core.css';
const gaTrackingId = process.env.REACT_APP_GA_TRACKING_ID; // 환경 변수에 저장된 추적ID 가져오기

// 환경 변수가 정의되어 있을 때만 Google Analytics 초기화
if (gaTrackingId) {
	ReactGA.initialize(gaTrackingId, { debug: true }); // react-ga 초기화 및 debug 사용
	ReactGA.pageview(window.location.pathname); // 추적하려는 page 설정
}

const store = createStore(rootReducer, composeWithDevTools());

function App() {
	return (
		<Provider store={store}>
			<RootNavigationContainer />
		</Provider>
	);
}

export default App;
