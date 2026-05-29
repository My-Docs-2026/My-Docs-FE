import { Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import { UploadDocsForm } from './UploadDocsForm';

export const UploadDocs: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Stack
      sx={{
        gap: '10px',
        flex: 1,
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#EFF6FF',
        padding: '20px 120px',
        boxSizing: 'border-box',
      }}
    >
      <Typography
        sx={{
          width: '1000px',
          maxWidth: '1920px',
          boxSizing: 'border-box',
          fontSize: '22px',
          fontWeight: 600,
          color: '#0F172A',
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
          gap: '8px',
          '&:hover': {
            cursor: 'pointer',
            color: '#64748B',
          },
        }}
        onClick={() => {
          navigate('/');
        }}
      >
        <ArrowBack /> 새 문서 분석
      </Typography>
      <UploadDocsForm />
    </Stack>
  );
};
