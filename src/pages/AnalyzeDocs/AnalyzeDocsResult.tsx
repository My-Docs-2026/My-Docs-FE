import { useParams } from 'react-router-dom';
import { Box, Chip, Divider, Stack, Typography } from '@mui/material';
import { useAnalysisQuery } from '../../hooks/useAnalysisQuery';

const riskColor = (level: string) => {
  if (level === 'HIGH') return '#EF4444';
  if (level === 'MEDIUM') return '#F59E0B';
  return '#22C55E';
};

export const AnalyzeDocsResult: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useAnalysisQuery(id!);

  if (isLoading || !data) return null;

  const { title, analysis } = data;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', padding: '40px 20px' }}>
      <Stack sx={{ width: '100%', maxWidth: '900px', gap: '32px' }}>

        <Typography sx={{ fontSize: '28px', fontWeight: 700, color: '#0F172A' }}>
          {title}
        </Typography>

        {analysis && (
          <>
            <Stack sx={{ gap: '12px' }}>
              <Typography sx={{ fontSize: '18px', fontWeight: 600, color: '#0F172A' }}>
                요약
              </Typography>
              <Typography sx={{ fontSize: '15px', color: '#475569', lineHeight: 1.8 }}>
                {analysis.summary}
              </Typography>
            </Stack>

            <Stack sx={{ gap: '12px' }}>
              <Typography sx={{ fontSize: '18px', fontWeight: 600, color: '#0F172A' }}>
                긍정적 조항
              </Typography>
              <Typography sx={{ fontSize: '15px', color: '#475569', lineHeight: 1.8 }}>
                {analysis.prosSummary}
              </Typography>
            </Stack>

            <Stack sx={{ gap: '16px' }}>
              <Typography sx={{ fontSize: '18px', fontWeight: 600, color: '#0F172A' }}>
                상세 분석
              </Typography>
              {analysis.analysisDetail.map((item, index) => (
                <Stack
                  key={index}
                  sx={{
                    gap: '12px',
                    padding: '20px',
                    borderRadius: '12px',
                    border: '1px solid #E2E8F0',
                    backgroundColor: '#FFFFFF',
                  }}
                >
                  <Stack direction="row" sx={{ alignItems: 'center', gap: '10px' }}>
                    <Chip
                      label={item.riskLevel}
                      size="small"
                      sx={{
                        backgroundColor: riskColor(item.riskLevel),
                        color: '#FFFFFF',
                        fontWeight: 600,
                        fontSize: '12px',
                      }}
                    />
                    <Typography sx={{ fontSize: '16px', fontWeight: 600, color: '#0F172A' }}>
                      {item.clauseTitle}
                    </Typography>
                  </Stack>

                  <Divider />

                  <Stack sx={{ gap: '6px' }}>
                    <Typography sx={{ fontSize: '12px', fontWeight: 600, color: '#94A3B8' }}>
                      원문
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '14px',
                        color: '#475569',
                        backgroundColor: '#F8FAFC',
                        padding: '12px',
                        borderRadius: '8px',
                        lineHeight: 1.7,
                      }}
                    >
                      {item.originalText}
                    </Typography>
                  </Stack>

                  <Stack sx={{ gap: '6px' }}>
                    <Typography sx={{ fontSize: '12px', fontWeight: 600, color: '#94A3B8' }}>
                      주의사항
                    </Typography>
                    <Typography sx={{ fontSize: '14px', color: '#475569', lineHeight: 1.7 }}>
                      {item.warning}
                    </Typography>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </>
        )}
      </Stack>
    </Box>
  );
};
