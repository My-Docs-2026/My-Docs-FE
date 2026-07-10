import { Chip, Divider, Stack, Typography } from '@mui/material';
import type { IAnalysisDetailItem } from '../../types/IDocs';

const riskConfig = (level: string) => {
  if (level === 'High')
    return {
      color: '#EF4444',
      border: 'rgba(239, 68, 68, 0.4)',
      bg: 'rgba(239, 68, 68, 0.08)',
      divider: 'rgba(239, 68, 68, 0.2)',
    };
  if (level === 'Medium')
    return {
      color: '#F59E0B',
      border: 'rgba(245, 158, 11, 0.4)',
      bg: 'rgba(245, 158, 11, 0.08)',
      divider: 'rgba(245, 158, 11, 0.2)',
    };
  return {
    color: '#22C55E',
    border: 'rgba(34, 197, 94, 0.4)',
    bg: 'rgba(34, 197, 94, 0.08)',
    divider: 'rgba(34, 197, 94, 0.2)',
  };
};

interface AnalysisDetailCardProps {
  item: IAnalysisDetailItem;
  onClick: () => void;
}

export const AnalysisDetailCard: React.FC<AnalysisDetailCardProps> = ({ item, onClick }) => {
  const { color, border, bg, divider } = riskConfig(item.risk_level);

  return (
    <Stack
      onClick={onClick}
      sx={{
        gap: '12px',
        padding: '16px',
        borderRadius: '12px',
        border: `1px solid ${border}`,
        backgroundColor: bg,
        cursor: 'pointer',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        '&:hover': { filter: 'brightness(0.97)' },
      }}
    >
      <Stack direction="row" sx={{ alignItems: 'center', gap: '10px' }}>
        <Chip
          label={item.risk_level}
          size="small"
          style={{ backgroundColor: color, color: '#FFFFFF' }}
          sx={{ fontWeight: 600, fontSize: '11px' }}
        />
        <Typography sx={{ fontSize: '15px', fontWeight: 600, color: '#0F172A' }}>
          {item.clause_title}
        </Typography>
      </Stack>

      <Divider sx={{ borderColor: divider }} />

      <Stack sx={{ gap: '6px' }}>
        <Typography sx={{ fontSize: '11px', fontWeight: 600, color: '#94A3B8' }}>
          원문
        </Typography>
        <Typography
          sx={{
            fontSize: '13px',
            color: '#475569',
            backgroundColor: '#F8FAFC',
            padding: '12px',
            borderRadius: '8px',
            lineHeight: 1.7,
          }}
        >
          {item.original_text}
        </Typography>
      </Stack>

      <Stack sx={{ gap: '6px' }}>
        <Typography sx={{ fontSize: '11px', fontWeight: 600, color: '#94A3B8' }}>
          주의사항
        </Typography>
        <Typography sx={{ fontSize: '13px', color: '#475569', lineHeight: 1.7 }}>
          {item.warning}
        </Typography>
      </Stack>
    </Stack>
  );
};
