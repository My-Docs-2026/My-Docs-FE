import { Box, Button, Stack } from '@mui/material';

export const Header: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Stack
        direction="row"
        sx={{
          width: '100%',
          maxWidth: '1920px',
          height: '80px',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 120px',
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
    </Box>
  );
};
