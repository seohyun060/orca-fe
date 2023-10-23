import React, { useState, useEffect } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';

const PublicationCard = (props) => {
	const navigate = useNavigate();

	const { title, projDate, check } = props;

	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	console.log(check);
	const publicationDate = new Date(projDate);
	const publicationDateFormat =
		publicationDate.getDate() +
		'.' +
		monthNames[publicationDate.getMonth()] +
		'.' +
		publicationDate.getFullYear();
	console.log(title, projDate);
	return (
		<article className='PublicationCard' onClick={() => navigate('')}>
			<div className='PublicationCardTitle'>{title}</div>
			<div className='PublicationDate'>{check.pubYear}</div>
		</article>
	);
};

export default PublicationCard;

PublicationCard.defaultProps = {
	title: 'test',
	projDate: 'test',
};
