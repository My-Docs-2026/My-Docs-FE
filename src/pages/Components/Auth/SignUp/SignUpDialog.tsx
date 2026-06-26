import { Button, Stack, Typography } from '@mui/material';
import { SignUpDialogForm } from './SignUpDialogForm';

interface Props {
  onSwitchToLogin: () => void;
}

export const SignUpDialog: React.FC<Props> = ({ onSwitchToLogin }) => {
  return (
    <Stack sx={{ width: '100%', alignItems: 'center', gap: '15px' }}>
      <SignUpDialogForm />
      <Button
        variant="text"
        disableRipple
        sx={{ fontSize: '14px', color: '#475569' }}
        onClick={onSwitchToLogin}
      >
        이미 계정이 있으신가요? 로그인
      </Button>
    </Stack>
  );
};
