import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { UploadDocsFormTitle } from './UploadDocsFormTitle';
import { UploadDocsFormFile } from './UploadDocsFormFile';
import { UploadDocsFormModel } from './UploadDocsFormModel';

export const UploadDocsForm: React.FC = () => {
  const navigate = useNavigate();
  const stackSx = {
    width: '100%',
    gap: '10px',
    alignItems: 'start',
  };
  return (
    <Stack
      sx={{
        gap: '40px',
        width: '1000px',
        maxWidth: '1920px',
        height: '720px',
        justifyContent: 'space-between',
        alignItems: 'start',
        backgroundColor: '#FFFFFF',
        padding: '22px 60px',
        boxSizing: 'border-box',
        borderRadius: '20px',
        border: '2px solid #CBD5E1',
      }}
    >
      <Stack
        sx={{
          gap: '40px',
          width: '100%',
          alignItems: 'start',
          boxSizing: 'border-box',
        }}
      >
        <UploadDocsFormTitle />
        <UploadDocsFormFile />
        <UploadDocsFormModel />
      </Stack>

      <Stack sx={stackSx}>
        <Button
          sx={{
            width: '100%',
            height: '64px',
            backgroundColor: '#2563EB',
            color: '#FFFFFF',
            fontSize: '20px',
            fontWeight: 600,
            borderRadius: '10px',
            '&:hover': {
              backgroundColor: '#1D4ED8',
            },
          }}
          onClick={() => {
            navigate('/');
          }}
        >
          분석 시작하기
        </Button>
      </Stack>
    </Stack>
  );
};
