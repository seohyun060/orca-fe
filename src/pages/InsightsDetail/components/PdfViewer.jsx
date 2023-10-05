import React, { useState, useEffect, useCallback } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import '../../InsightsDetail/styles/insightsdetail.styles.css';

const PdfViewer = ({ link }) => {
	pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

	const [numPages, setNumPages] = useState(null);
	const [pdfWidth, setPdfWidth] = useState(calculatePdfWidth);

	function calculatePdfWidth() {
		if (window.innerWidth > 1400) {
			return 1194;
		} else if (window.innerWidth > 1024) {
			return 898;
		} else if (window.innerWidth > 768) {
			return 698;
		} else {
			return 348;
		}
	}

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	const handleResize = useCallback(() => {
		setPdfWidth(calculatePdfWidth());
	}, []);

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [handleResize]);

	const renderPages = () => {
		const pages = [];
		for (let pageNumber = 1; pageNumber <= numPages; pageNumber++) {
			pages.push(
				<div key={pageNumber} className='pageContainer'>
					<Page
						key={pageNumber}
						pageNumber={pageNumber}
						width={pdfWidth}
						renderTextLayer={false}
						renderAnnotationLayer={false}
					/>
				</div>,
			);
		}
		return pages;
	};

	return (
		<Document
			file={link}
			onLoadSuccess={onDocumentLoadSuccess}
			className='document'
		>
			{numPages && renderPages()}
		</Document>
	);
};

export default PdfViewer;
