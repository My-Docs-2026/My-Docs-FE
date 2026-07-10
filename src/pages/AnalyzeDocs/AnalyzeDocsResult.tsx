import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Chip, Divider, Stack, Typography } from '@mui/material';
import { useAnalysisQuery } from '../../hooks/useAnalysisQuery';
import { PdfViewer } from './PdfViewer';

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

export const AnalyzeDocsResult: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useAnalysisQuery(id!);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [highlightText, setHighlightText] = useState<string>('');

  if (isLoading || !data) return null;

  const { title, analysis, file_url } = data;

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
      {/* 왼쪽: PDF 뷰어 */}
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
        {file_url ? (
          <PdfViewer url={file_url} currentPage={currentPage} onPageChange={setCurrentPage} highlightText={highlightText} />
        ) : (
          <Stack
            sx={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}
          >
            <Typography sx={{ fontSize: '14px', color: '#94A3B8' }}>
              원본 파일이 없습니다.
            </Typography>
          </Stack>
        )}
      </Box>

      {/* 오른쪽: 분석 결과 */}
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
                {analysis.analysis_detail.map((item, index) => {
                  const { color, border, bg, divider } = riskConfig(item.risk_level);
                  return (
                    <Stack
                      key={index}
                      onClick={() => {
                        setCurrentPage(item.page_number);
                        setHighlightText(item.original_text);
                      }}
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
                })}
              </Stack>
            </>
          )}
        </Stack>
      </Box>
    </Box>
  );
};
