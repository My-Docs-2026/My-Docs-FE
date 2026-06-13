import { useState } from 'react';
import { Avatar, Box, Button, IconButton, Menu, Stack } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../stores/Auth/useLogin';
import { LoginDialog } from '../Components/Auth/LoginDialog';

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
          <Stack direction="row" sx={{ alignItems: 'center', gap: '8px' }}>
            <Button
              variant="text"
              disableRipple
              sx={{ fontSize: '15px', fontWeight: 500, color: '#475569' }}
            >
              문서 목록
            </Button>

            <IconButton onClick={(e) => setHistoryAnchor(e.currentTarget)}>
              <HistoryIcon sx={{ color: '#475569' }} />
            </IconButton>
            <Menu
              anchorEl={historyAnchor}
              open={!!historyAnchor}
              onClose={() => setHistoryAnchor(null)}
            />

            <IconButton onClick={() => navigate('/profile')}>
              <Avatar sx={{ width: 36, height: 36, bgcolor: '#2563EB' }} />
            </IconButton>
          </Stack>
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
