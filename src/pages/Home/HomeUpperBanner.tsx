import { Box, Button, Card, Stack, Typography } from '@mui/material';
import { HomeUpperBannerText } from './HomeUpperBannerText';

export const HomeUpperBanner: React.FC = () => {
  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: 'space-between',
      }}
    >
      <HomeUpperBannerText />
      <Stack>
        <Box
          component="img"
          src="src\assets\Vector.png"
          sx={{
            width: 'auto',
            height: '450px', // 592px -> 450px로 축소
          }}
        ></Box>
      </Stack>
    </Stack>
  );
};
