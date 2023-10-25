import React, { useEffect, useState } from 'react';
import Orca from '../Orca';
import { getOrcaBanner } from 'src/api/BannerAPI';
type Props = {};

const OrcaContainer = (props: Props) => {
	const [orcaBanner, setOrcaBanner] = useState('');
	useEffect(() => {
		getOrcaBanner().then((data) => {
			console.log(data.data); // 나옴
			setOrcaBanner(data.data);
		});
		return () => {};
	}, []);

	return <Orca orcaBanner={orcaBanner} />;
};

export default OrcaContainer;
