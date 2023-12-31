import React, { useEffect, useState } from 'react';
import Orca from '../Orca';
import { getOrcaBanner } from 'src/api/BannerAPI';
import { useLocation } from 'react-router-dom';
type Props = {};

const OrcaContainer = (props: Props) => {
	const [orcaBanner, setOrcaBanner] = useState('');
	const [mobileWidth, setMobileWidth] = useState(768);
	const location = useLocation();
	const handleResize = () => {
		setMobileWidth(window.innerWidth);
		console.log(mobileWidth);
	};
	useEffect(() => {
		window.addEventListener('resize', handleResize);

		// 컴포넌트가 언마운트될 때 이벤트 리스너를 제거 (클린업)
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [window.innerWidth, location]);

	useEffect(() => {
		setMobileWidth(window.innerWidth);
		getOrcaBanner().then((data) => {
			console.log(data.data); // 나옴
			setOrcaBanner(data.data);
		});
		return () => {};
	}, []);
	console.log(mobileWidth);
	return <Orca orcaBanner={orcaBanner} mobileWidth={mobileWidth} />;
};

export default OrcaContainer;
