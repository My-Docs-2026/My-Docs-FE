import { useState } from 'react';
import { Button, IconButton, Menu, Stack } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import { ProfileMenu } from './ProfileMenu';

export const Profile: React.FC = () => {
  const [historyAnchor, setHistoryAnchor] = useState<null | HTMLElement>(null);

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
      <ProfileMenu />
    </Stack>
  );
};
