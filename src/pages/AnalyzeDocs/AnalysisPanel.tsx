import { Box, Stack, Typography } from '@mui/material';
import type { IAnalysisResult } from '../../types/IDocs';
import { AnalysisDetailCard } from './AnalysisDetailCard';

interface AnalysisPanelProps {
  title: string;
  analysis: IAnalysisResult | null;
  onCardClick: (page: number, text: string) => void;
}

export const AnalysisPanel: React.FC<AnalysisPanelProps> = ({ title, analysis, onCardClick }) => {
  return (
    <Box
      sx={{
        flex: 1,
        height: '100%',
        overflowY: 'auto',
        borderRadius: '12px',
        border: '1px solid #E2E8F0',
        backgroundColor: '#FFFFFF',
      }}
    >
      <Stack sx={{ padding: '32px', gap: '28px' }}>
        <Typography sx={{ fontSize: '22px', fontWeight: 700, color: '#0F172A' }}>
          {title}
        </Typography>

        {analysis && (
          <>
            <Stack sx={{ gap: '8px' }}>
              <Typography sx={{ fontSize: '16px', fontWeight: 600, color: '#0F172A' }}>
                요약
              </Typography>
              <Typography sx={{ fontSize: '14px', color: '#475569', lineHeight: 1.8 }}>
                {analysis.summary}
              </Typography>
            </Stack>

            <Stack sx={{ gap: '8px' }}>
              <Typography sx={{ fontSize: '16px', fontWeight: 600, color: '#0F172A' }}>
                긍정적 조항
              </Typography>
              <Typography sx={{ fontSize: '14px', color: '#475569', lineHeight: 1.8 }}>
                {analysis.pros_summary}
              </Typography>
            </Stack>

            <Stack sx={{ gap: '12px' }}>
              <Typography sx={{ fontSize: '16px', fontWeight: 600, color: '#0F172A' }}>
                상세 분석
              </Typography>
              {analysis.analysis_detail.map((item, index) => (
                <AnalysisDetailCard
                  key={index}
                  item={item}
                  onClick={() => onCardClick(item.page_number, item.original_text)}
                />
              ))}
            </Stack>
          </>
        )}
      </Stack>
    </Box>
  );
};
