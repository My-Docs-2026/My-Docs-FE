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
            height: '450px',
          }}
        ></Box>
      </Stack>
    </Stack>
  );
};
