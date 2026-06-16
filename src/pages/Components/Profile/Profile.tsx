import { useState } from 'react';
import { Avatar, Button, Divider, IconButton, ListItemIcon, Menu, MenuItem, Stack } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../../stores/Auth/useLogin';

export const Profile: React.FC = () => {
  const navigate = useNavigate();
  const setIsLoggedIn = useLogin((state) => state.setIsLoggedIn);

  const [historyAnchor, setHistoryAnchor] = useState<null | HTMLElement>(null);
  const [profileAnchor, setProfileAnchor] = useState<null | HTMLElement>(null);

  const handleLogout = () => {
    sessionStorage.removeItem('accessToken');
    setIsLoggedIn(false);
    setProfileAnchor(null);
    navigate('/');
  };

  return (
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

      <IconButton onClick={(e) => setProfileAnchor(e.currentTarget)}>
        <Avatar sx={{ width: 36, height: 36, bgcolor: '#2563EB' }} />
      </IconButton>
      <Menu
        anchorEl={profileAnchor}
        open={!!profileAnchor}
        onClose={() => setProfileAnchor(null)}
      >
        <MenuItem onClick={() => { navigate('/profile'); setProfileAnchor(null); }}>
          <ListItemIcon><PersonIcon fontSize="small" /></ListItemIcon>
          프로필
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon><LogoutIcon fontSize="small" /></ListItemIcon>
          로그아웃
        </MenuItem>
      </Menu>
    </Stack>
  );
};
