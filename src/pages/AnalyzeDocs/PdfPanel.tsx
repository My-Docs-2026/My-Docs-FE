import { Box, Stack, Typography } from '@mui/material';
import { PdfViewer } from './PdfViewer';

interface PdfPanelProps {
  fileUrl: string | null;
  currentPage: number;
  onPageChange: (page: number) => void;
  highlightText: string;
}

export const PdfPanel: React.FC<PdfPanelProps> = ({ fileUrl, currentPage, onPageChange, highlightText }) => {
  return (
    <Box
      sx={{
        width: '50%',
        height: '100%',
        borderRadius: '12px',
        border: '1px solid #E2E8F0',
        backgroundColor: '#F8FAFC',
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      {fileUrl ? (
        <PdfViewer
          url={fileUrl}
          currentPage={currentPage}
          onPageChange={onPageChange}
          highlightText={highlightText}
        />
      ) : (
        <Stack sx={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
          <Typography sx={{ fontSize: '14px', color: '#94A3B8' }}>
            원본 파일이 없습니다.
          </Typography>
        </Stack>
      )}
    </Box>
  );
};
