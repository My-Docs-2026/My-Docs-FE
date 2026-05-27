import { Box, Button, Stack } from '@mui/material';

export const Header: React.FC = () => {
  return (
    <Stack
      direction="row"
      sx={{
        width: '100%',
        height: '80px',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        padding: '0 40px',
        boxSizing: 'border-box',
      }}
    >
      <Box sx={{ fontWeight: 'bold', fontSize: '24px', color: '#000' }}>Logo</Box>
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#64748B',
          color: '#ffffff',
        }}
      >
        시작하기
      </Button>
    </Stack>
  );
};
