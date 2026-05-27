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
        borderBottom: '1px solid #fd0303',
        padding: '0 40px',
        boxSizing: 'border-box',
      }}
    >
      <Box sx={{ fontWeight: 'bold', fontSize: '24px', color: '#000' }}>Logo</Box>
      <Button
        variant="outlined"
        sx={{
          color: '#000000',
          borderColor: '#000000',
        }}
      >
        Login
      </Button>
    </Stack>
  );
};
