import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { useAnalysisQuery } from '../../hooks/useAnalysisQuery';
import { PdfPanel } from './PdfPanel';
import { AnalysisPanel } from './AnalysisPanel';

export const AnalyzeDocsResult: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useAnalysisQuery(id!);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [highlightText, setHighlightText] = useState<string>('');

  if (isLoading || !data) return null;

  const { title, analysis, file_url } = data;

  const handleCardClick = (page: number, text: string) => {
    setCurrentPage(page);
    setHighlightText(text);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        height: 'calc(100vh - 80px)',
        overflow: 'hidden',
        padding: '20px',
        gap: '20px',
        boxSizing: 'border-box',
      }}
    >
      <PdfPanel
        fileUrl={file_url}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        highlightText={highlightText}
      />
      <AnalysisPanel
        title={title}
        analysis={analysis}
        onCardClick={handleCardClick}
      />
    </Box>
  );
};
