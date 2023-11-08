import React, { useCallback, useEffect, useState } from 'react';
import Home from '../Home';
import { getMainBanner } from 'src/api/BannerAPI';
import { EChange } from '@typedef/types';

type Props = {
	location: string;
};

const HomeContainer = ({ location }: Props) => {
	const route = location.split('/')[1];
	const [mainBanner, setMainBanner] = useState('');
	const [orcaPop, setOrcaPop] = useState(false);
	const [orcaEmail, setOrcaEmail] = useState('');
	const onChangeOrcaEmail = useCallback(
		(e: EChange) => {
			setOrcaEmail(e.target.value);
		},
		[orcaEmail],
	);
	const onConfirmOrca = useCallback(() => {
		setOrcaPop(false);
		setOrcaEmail('');
	}, [orcaPop]);
	const onOrcaSubClick = useCallback(() => {
		setOrcaPop(true);
	}, [orcaPop]);

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
