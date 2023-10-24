import React, { useState, useEffect, useCallback } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import '../../InsightsDetail/styles/insightsdetail.styles.css';

const PdfThumbnail = ({ link }) => {
	pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

	const [numPages, setNumPages] = useState(null);
	const [pdfHeight, setPdfHeight] = useState(calculatePdfWidth);

	function calculatePdfWidth() {
		if (window.innerWidth > 1400) {
			return 190;
		} else if (window.innerWidth > 1024) {
			return 141;
		} else if (window.innerWidth > 768) {
			return 114;
		} else {
			return 128;
		}
	}

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	const handleResize = useCallback(() => {
		setPdfHeight(calculatePdfWidth());
	}, []);

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [handleResize]);

	const renderThumbnail = () => {
		if (numPages >= 1) {
			return (
				<div className='pageContainer'>
					<Page
						key={1}
						pageNumber={1}
						className='page'
						//width={'fit-content'}
						width={pdfHeight}
						//height={200}
						//width={180}
						//height={pdfHeight}
						renderTextLayer={false}
						renderAnnotationLayer={false}
					/>
				</div>
			);
		}
		return null;
	};

	return (
		<Document
			file={link}
			onLoadSuccess={onDocumentLoadSuccess}
			className='document'
		>
			{numPages && renderThumbnail()}
		</Document>
	);
};

export default PdfThumbnail;
