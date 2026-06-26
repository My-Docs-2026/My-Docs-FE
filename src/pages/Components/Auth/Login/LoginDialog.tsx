import { useState } from 'react';
import { Dialog, Stack, Typography } from '@mui/material';
import { useLogin } from '../../../../stores/Auth/useLogin';
import { LoginDialogAlter } from './LoginDialogAlter';
import { SignUpDialog } from '../SignUp/SignUpDialog';
import { LoginDialogForm } from './LoginDialogForm';

type DialogMode = 'login' | 'signup';

export const LoginDialog: React.FC = () => {
  const { isLoginDialogOpen, setIsLoginDialogOpen } = useLogin();
  const [mode, setMode] = useState<DialogMode>('login');

  const handleClose = () => {
    setIsLoginDialogOpen(false);
    setMode('login');
  };

  return (
    <Dialog open={isLoginDialogOpen} onClose={handleClose}>
      <Stack
        sx={{
          width: '480px',
          minHeight: '600px',
          padding: '20px 20px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '15px',
        }}
      >
        {mode === 'login' ? (
          <>
            <Typography sx={{ fontSize: '28px', fontWeight: 700, color: '#0F172A' }}>
              로그인
            </Typography>
            <Typography sx={{ fontSize: '16px', color: '#475569' }}>
              서비스를 이용하시려면 로그인이 필요합니다.
            </Typography>
            <LoginDialogForm />
            <LoginDialogAlter onSwitchToSignUp={() => setMode('signup')} />
          </>
        ) : (
          <>
            <Typography sx={{ fontSize: '28px', fontWeight: 700, color: '#0F172A' }}>
              회원가입
            </Typography>
            <Typography sx={{ fontSize: '16px', color: '#475569' }}>
              서비스 이용을 위해 회원가입을 해주세요.
            </Typography>
            <SignUpDialog onSwitchToLogin={() => setMode('login')} />
          </>
        )}
      </Stack>
    </Dialog>
  );
};
