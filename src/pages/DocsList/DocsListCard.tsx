import { Box, Chip, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface DocsListCardProps {
  id: string;
  title: string;
  type: string;
  status: string;
  createdAt: string;
}

const statusColor = (status: string) => {
  if (status === 'COMPLETED') return '#22C55E';
  if (status === 'PENDING') return '#F59E0B';
  return '#94A3B8';
};

export const DocsListCard: React.FC<DocsListCardProps> = ({ id, title, type, status, createdAt }) => {
  const navigate = useNavigate();

  return (
    <Box
      onClick={() => navigate(`/analyze/${id}`)}
      sx={{
        padding: '20px',
        borderRadius: '12px',
        border: '1px solid #E2E8F0',
        backgroundColor: '#FFFFFF',
        cursor: 'pointer',
        transition: 'box-shadow 0.2s, border-color 0.2s',
        '&:hover': {
          boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
          borderColor: '#2563EB',
        },
      }}
    >
      <Stack sx={{ gap: '12px', height: '100%' }}>
        <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Chip
            label={type === 'FILE' ? '파일' : '텍스트'}
            size="small"
            sx={{ backgroundColor: '#EFF6FF', color: '#2563EB', fontWeight: 600, fontSize: '12px' }}
          />
          <Chip
            label={status === 'COMPLETED' ? '분석 완료' : '분석 중'}
            size="small"
            sx={{ backgroundColor: `${statusColor(status)}20`, color: statusColor(status), fontWeight: 600, fontSize: '12px' }}
          />
        </Stack>

        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: 600,
            color: '#0F172A',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            lineHeight: 1.5,
            minHeight: '48px',
          }}
        >
          {title}
        </Typography>

        <Typography sx={{ fontSize: '13px', color: '#94A3B8', marginTop: 'auto' }}>
          {createdAt}
        </Typography>
      </Stack>
    </Box>
  );
};
