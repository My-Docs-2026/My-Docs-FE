import { useCallback, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { Box, CircularProgress, IconButton, Stack, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

interface PdfViewerProps {
  url: string;
  currentPage: number;
  onPageChange: (page: number) => void;
  highlightText?: string;
}

export const PdfViewer: React.FC<PdfViewerProps> = ({ url, currentPage, onPageChange, highlightText }) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  const containerRef = useCallback((node: HTMLDivElement | null) => {
    if (node) setContainerWidth(node.clientWidth);
  }, []);

  return (
    <Stack sx={{ height: '100%' }}>
      {/* 상단 네비게이션 */}
      <Stack
        direction="row"
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          padding: '8px 16px',
          borderBottom: '1px solid #E2E8F0',
          flexShrink: 0,
        }}
      >
        <IconButton
          size="small"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage <= 1}
        >
          <ChevronLeftIcon fontSize="small" />
        </IconButton>
        <Typography sx={{ fontSize: '13px', color: '#475569', minWidth: '80px', textAlign: 'center' }}>
          {currentPage} / {numPages || '-'}
        </Typography>
        <IconButton
          size="small"
          onClick={() => onPageChange(Math.min(numPages, currentPage + 1))}
          disabled={currentPage >= numPages}
        >
          <ChevronRightIcon fontSize="small" />
        </IconButton>
      </Stack>

      {/* PDF 렌더링 영역 */}
      <Box
        ref={containerRef}
        sx={{ flex: 1, overflow: 'auto', display: 'flex', justifyContent: 'center' }}
      >
        <Document
          file={url}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          loading={
            <Stack sx={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
              <CircularProgress size={32} />
            </Stack>
          }
        >
          {containerWidth > 0 && (
            <Page
              pageNumber={currentPage}
              width={containerWidth}
              renderTextLayer
              renderAnnotationLayer
              customTextRenderer={({ str }) => {
                if (!highlightText || str.trim().length < 2) return str;
                const normalizedStr = str.trim().toLowerCase();
                const normalizedTarget = highlightText.toLowerCase();
                if (normalizedTarget.includes(normalizedStr)) {
                  return `<mark style="background: rgba(255, 200, 0, 0.5); border-radius: 2px; padding: 0 1px;">${str}</mark>`;
                }
                return str;
              }}
            />
          )}
        </Document>
      </Box>
    </Stack>
  );
};
