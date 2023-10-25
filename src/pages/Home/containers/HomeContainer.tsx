import React, { useEffect, useState } from 'react';
import Home from '../Home';
import { getMainBanner } from 'src/api/BannerAPI';

type Props = {
	location: string;
};

const HomeContainer = ({ location }: Props) => {
	const route = location.split('/')[1];
	const [mainBanner, setMainBanner] = useState('');

	useEffect(() => {
		getMainBanner().then((data) => {
			console.log(data.data); // 나옴
			setMainBanner(data.data);
		});

		return () => {};
	}, []);
	return (
		<>
			<Home route={route} mainBanner={mainBanner} />
		</>
	);
};

export default HomeContainer;
