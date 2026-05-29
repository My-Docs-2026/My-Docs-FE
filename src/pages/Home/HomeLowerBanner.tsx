import { Box, Button, Card, Stack, Typography } from '@mui/material';

export const HomeLowerBanner: React.FC = () => {
  const cardData = [
    {
      id: '01',
      title: '쉬운 문서 업로드',
      description: '드래그 앤 드롭으로 문서를 한 번에 업로드하세요.',
    },
    {
      id: '02',
      title: '초정밀 AI 분석',
      description: '자연어 처리 모델이 문맥을 파악해 요약본을 추출합니다..',
    },
    {
      id: '03',
      title: '인사이트 대시보드',
      description: '직관적인 차트와 그래프로 즉각적인 통찰을 제공합니다.',
    },
  ];

  return (
    <Stack direction="row" sx={{ gap: '40px', marginTop: '30px' }}>
      {cardData.map((o) => (
        <Stack
          sx={{
            direction: 'column',
            gap: '20px',
            width: '530px',
            height: '180px',
            padding: '30px 40px',
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'start',
            boxSizing: 'border-box',
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
          }}
        >
          <Box
            sx={{
              width: '48px',
              height: '48px',
              fontSize: '20px',
              fontWeight: 600,
              color: '#2563EB',
              borderRadius: '10px',
              backgroundColor: '#EFF6FF',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {o.id}
          </Box>
          <Stack
            sx={{
              alignItems: 'start',
            }}
          >
            <Typography sx={{ fontSize: '20px', fontWeight: 600, color: '#0F172A' }}>
              {o.title}
            </Typography>
            <Typography sx={{ fontSize: '16px', fontWeight: 400, color: '#475569' }}>
              {o.description}
            </Typography>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};
