import { Box, Stack, } from '@mui/material';
import { HomeUpperBanner } from './HomeUpperBanner';
import { HomeLowerBanner } from './HomeLowerBanner';

export const Home: React.FC = () => {
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '100%',
        backgroundColor: '#EFF6FF',
      }}
    >
      <Stack
        sx={{
          width: '100%',
          maxWidth: '1920px', 
          padding: '30px 120px',
          boxSizing: 'border-box',
          gap: '40px',
        }}
      >
        <HomeUpperBanner />
        <HomeLowerBanner />
      </Stack>
    </Box>
  );
};
