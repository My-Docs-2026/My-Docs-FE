import { Button, Dialog, Divider, Stack, TextField, Typography } from '@mui/material';
import { useLogin } from '../../../stores/Auth/useLogin';
import { LoginDialogForm } from './LoginDialogForm';
import { LoginDialogAlter } from './LoginDialogAlter';

export const LoginDialog: React.FC = () => {
  const { isLoginDialogOpen, setIsLoginDialogOpen } = useLogin();
  return (
    <Dialog open={isLoginDialogOpen} onClose={() => setIsLoginDialogOpen(false)}>
      <Stack
        sx={{
          width: '480px',
          height: '600px',
          padding: '20px 20px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '15px',
        }}
      >
        <Typography
          sx={{
            fontSize: '28px',
            fontWeight: 700,
            color: '#0F172A',
          }}
        >
          로그인
        </Typography>
        <Typography
          sx={{
            fontSize: '16px',
            color: '#475569',
          }}
        >
          서비스를 이용하시려면 로그인이 필요합니다.
        </Typography>
        <LoginDialogForm />
        <LoginDialogAlter />
      </Stack>
    </Dialog>
  );
};
