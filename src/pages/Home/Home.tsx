import { Box, Button, Stack, Typography } from '@mui/material';

export const Home: React.FC = () => {
  const cookieSX = {
    color: '#1D4ED8',
    width: 'fit-content',
    height: 'fit-content',
    borderRadius: '100px',
    backgroundColor: '#DBEAFE',
    padding: '8px 24px',
    fontSize: '15px',
    fontWeight: 600,
  };

  const titleSX = {
    fontSize: '56px',
    fontWeight: 700,
    color: '#0F172A',
  };
  const subtitleSX = {
    fontSize: '20px',
    fontWeight: 400,
    color: '#475569',
  };
  return (
    <Stack
      sx={{
        height: '590px',
        padding: '50px 120px',
        backgroundColor: '#F8FAFC',
      }}
    >
      <Stack
        direction="row"
        sx={{
          height: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Stack
          sx={{
            gap: '12px',
            justifyContent: 'start',
            alignItems: 'start',
            width: '50%',
            height: '100%',
          }}
        >
          <Typography sx={cookieSX}>🚀 새로운 B2B 문서 분석 솔루션</Typography>
          <Typography sx={titleSX}>수백 장의 복잡한 문서,</Typography>
          <Typography sx={titleSX}>
            단 몇 초 만에{' '}
            <Box component="span" sx={{ color: '#2563EB' }}>
              핵심만 요약
            </Box>
          </Typography>
          <Typography sx={subtitleSX}>PDF, 계약서, 기술 문서 등 포맷에 구애받지 마세요.</Typography>
          <Typography sx={subtitleSX}>
            AI가 문맥을 깊이 있게 이해하고 필요한 데이터를 즉시 시각화합니다.
          </Typography>
          <Button
            variant="contained"
            sx={{
              width: '240px',
              height: '64px',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '10px',
              backgroundColor: '#2563EB',
              color: '#FFFFFF',
              fontSize: '20px',
              fontWeight: 600,
            }}
          >
            문서 분석하기
          </Button>
        </Stack>
        <Stack>
          <Box component="img" src="src\assets\Vector.png"></Box>
        </Stack>
      </Stack>
    </Stack>
  );
};
