import React from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

const PdfViewer = ({ link }) => {
	pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

	return (
		<div>
			<Document
				file={link}
				options={{ workerSrc: pdfjs.GlobalWorkerOptions.workerSrc }}
			>
				<Page pageNumber={1} />
			</Document>
		</div>
	);
};

export default PdfViewer;
