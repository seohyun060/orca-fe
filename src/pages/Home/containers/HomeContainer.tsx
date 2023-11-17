import React, { useCallback, useEffect, useState } from 'react';
import Home from '../Home';
import { getMainBanner } from 'src/api/BannerAPI';
import { EChange } from '@typedef/types';
import useSubscribeStore from '@store/zustand/subscribeZustand';

type Props = {
	location: string;
};

const HomeContainer = ({ location }: Props) => {
	const route = location.split('/')[1];
	const [mainBanner, setMainBanner] = useState('');
	const {
		orcaPop,
		orcaEmail,
		onChangeOrcaEmail,
		onConfirmOrca,
		onOrcaSubClick,
	} = useSubscribeStore();

	useEffect(() => {
		getMainBanner().then((data) => {
			console.log(data.data); // 나옴
			setMainBanner(data.data);
		});

		return () => {};
	}, []);
	return (
		<>
			{mainBanner ? (
				<Home
					route={route}
					mainBanner={mainBanner}
					orcaPop={orcaPop}
					onConfirmOrca={onConfirmOrca}
					onOrcaSubClick={onOrcaSubClick}
					orcaEmail={orcaEmail}
					onChangeOrcaEmail={onChangeOrcaEmail}
				/>
			) : (
				''
			)}
		</>
	);
};

export default HomeContainer;
