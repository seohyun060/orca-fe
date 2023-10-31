import React, { useEffect, useState } from 'react';
import Orca from '../Orca';
import { getOrcaBanner } from 'src/api/BannerAPI';
type Props = {};

const OrcaContainer = (props: Props) => {
	const [orcaBanner, setOrcaBanner] = useState('');
	const [mobileWidth, setMobileWidth] = useState(768);
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
	}, [window.innerWidth]);

	useEffect(() => {
		getOrcaBanner().then((data) => {
			console.log(data.data); // 나옴
			setOrcaBanner(data.data);
		});
		return () => {};
	}, []);

	return <Orca orcaBanner={orcaBanner} mobileWidth={mobileWidth} />;
};

export default OrcaContainer;
