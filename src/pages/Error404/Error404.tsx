import React from 'react';
import images from 'src/assets/images';
import './styles/error404.styles.css';
type Props = {};

const Error404 = (props: Props) => {
	return (
		<div
			className='error404'
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<div className='error404-image'>
				<img className='error404-image-number' src={images.error404} />
				<img className='error404-image-logo' src={images.logo_error} />
			</div>
			<div className='error404-text'>
				404. That's an error. <br />
				The requested URL was not found on this server. That's all we know.
			</div>
		</div>
	);
};

export default Error404;
