import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, CircularProgress, Stack, Typography } from '@mui/material';
import { useDocsStatusQuery } from '../../hooks/useDocsStatusQuery';

export const AnalyzingDocs: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data } = useDocsStatusQuery(id!);

  useEffect(() => {
    if (data?.status === 'SUCCESS') {
      navigate(`/analyze/${id}`);
    }
  }, [data?.status, id, navigate]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 80px)',
      }}
    >
      <Stack sx={{ alignItems: 'center', gap: '24px' }}>
        <CircularProgress size={64} thickness={4} sx={{ color: '#2563EB' }} />
        <Stack sx={{ alignItems: 'center', gap: '8px' }}>
          <Typography sx={{ fontSize: '24px', fontWeight: 700, color: '#0F172A' }}>
            문서를 분석하고 있습니다
          </Typography>
          <Typography sx={{ fontSize: '16px', color: '#64748B' }}>
            분석이 완료되면 자동으로 이동합니다
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
