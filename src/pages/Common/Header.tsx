import { useState } from 'react';
import { Avatar, Box, Button, IconButton, Menu, Stack } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../stores/Auth/useLogin';
import { LoginDialog } from '../Components/Auth/Login/LoginDialog';
import { Profile } from '../Components/Profile/Profile';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const isLoggedIn = useLogin((state) => state.isLoggedIn);
  const setIsLoginDialogOpen = useLogin((state) => state.setIsLoginDialogOpen);

  const [historyAnchor, setHistoryAnchor] = useState<null | HTMLElement>(null);

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

        {isLoggedIn ? (
          <Profile />
        ) : (
          <Button
            variant="contained"
            sx={{ backgroundColor: '#64748B', color: '#ffffff' }}
            onClick={() => setIsLoginDialogOpen(true)}
          >
            시작하기
          </Button>
        )}
      </Stack>

      <LoginDialog />
    </Box>
  );
};
