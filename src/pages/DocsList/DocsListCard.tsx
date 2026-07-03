import { Box, Chip, IconButton, Stack, Typography, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ReplayIcon from '@mui/icons-material/Replay';
import { useNavigate } from 'react-router-dom';
import { useDeleteDialog } from '../../stores/Docs/useDeleteDialog';

interface DocsListCardProps {
  id: string;
  title: string;
  status: string;
  createdAt: string;
  summary: string | null;
}

const statusLabel = (status: string) => {
  if (status === 'COMPLETED') return '분석 완료';
  if (status === 'FAILED') return '분석 실패';
  return '분석 중';
};

const statusColor = (status: string) => {
  if (status === 'COMPLETED') return '#22C55E';
  if (status === 'FAILED') return '#EF4444';
  return '#F59E0B';
};

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const hh = String(date.getHours()).padStart(2, '0');
  const min = String(date.getMinutes()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd} ${hh}:${min}`;
};

export const DocsListCard: React.FC<DocsListCardProps> = ({ id, title, status, createdAt, summary }) => {
  const navigate = useNavigate();
  const openDialog = useDeleteDialog((s) => s.openDialog);
  const isCompleted = status === 'COMPLETED';
  const isFailed = status === 'FAILED';

  const handleClick = () => {
    if (isCompleted) navigate(`/analyze/${id}`);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    openDialog(id);
  };

  const handleRetry = (e: React.MouseEvent) => {
    e.stopPropagation();
    // TODO: 재시도 API 연동
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        padding: '20px',
        borderRadius: '12px',
        border: '1px solid #E2E8F0',
        backgroundColor: '#FFFFFF',
        cursor: isCompleted ? 'pointer' : 'default',
        transition: isCompleted ? 'box-shadow 0.2s, border-color 0.2s' : 'none',
        ...(isCompleted && {
          '&:hover': {
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
            borderColor: '#2563EB',
          },
        }),
      }}
    >
      <Stack sx={{ gap: '12px', height: '100%' }}>
        <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Chip
            label={statusLabel(status)}
            size="small"
            sx={{
              backgroundColor: `${statusColor(status)}20`,
              color: statusColor(status),
              fontWeight: 600,
              fontSize: '12px',
            }}
          />
          <IconButton
            size="small"
            onClick={handleDelete}
            sx={{
              color: '#94A3B8',
              padding: '2px',
              '&:hover': { color: '#EF4444', backgroundColor: '#FEF2F2' },
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
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

        {summary && (
          <Typography
            sx={{
              fontSize: '13px',
              color: '#64748B',
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              lineHeight: 1.6,
            }}
          >
            {summary}
          </Typography>
        )}

        <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
          <Typography sx={{ fontSize: '13px', color: '#94A3B8' }}>
            {formatDate(createdAt)}
          </Typography>
          {isFailed && (
            <Button
              size="small"
              startIcon={<ReplayIcon fontSize="small" />}
              onClick={handleRetry}
              sx={{
                fontSize: '12px',
                color: '#EF4444',
                border: '1px solid #EF444440',
                borderRadius: '8px',
                px: '10px',
                py: '4px',
                minWidth: 0,
                '&:hover': { backgroundColor: '#FEF2F2', borderColor: '#EF4444' },
              }}
            >
              재시도
            </Button>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};
