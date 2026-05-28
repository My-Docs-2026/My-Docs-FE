import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from '../pages/Common/Header';

export const AppRouter: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#EFF6FF',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Outlet />
      </Box>
    </Box>
  );
};
