import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from '../pages/Common/Header';

export const AppRouter: React.FC = () => {
  return (
    <Box>
      <Header />
      <Outlet></Outlet>
    </Box>
  );
};
