import { Button, Divider, Stack } from '@mui/material';

interface Props {
  onSwitchToSignUp: () => void;
}

export const LoginDialogAlter: React.FC<Props> = ({ onSwitchToSignUp }) => {
  const textButtonSx = {
    fontSize: '14px',
    color: '#475569',
  };

  return (
    <Stack
      sx={{
        width: '100%',
        gap: '15px',
      }}
    >
      <Stack
        direction="row"
        sx={{
          width: '100%',
          height: '20px',
          alignItems: 'center',
          color: '#475569',
        }}
      >
        <Divider
          sx={{
            width: '100%',
            color: '#E2E8F0',
          }}
        >
          <span
            style={{
              fontSize: '14px',
              color: '#94A3B8',
            }}
          >
            또는
          </span>
        </Divider>
      </Stack>
      <Button
        sx={{
          width: '100%',
          height: '56px',
          borderRadius: '10px',
          border: '2px solid #CBD5E1',
          color: '#475569',
        }}
      >
        구글 계정으로 로그인
      </Button>
      <Stack
        direction="row"
        sx={{
          justifyContent: 'center',
          width: '100%',
          height: '20px',
          gap: '20px',
        }}
      >
        <Button variant="text" disableRipple sx={textButtonSx}>
          비밀번호 찾기
        </Button>
        <Divider orientation="vertical" />
        <Button variant="text" disableRipple sx={textButtonSx} onClick={onSwitchToSignUp}>
          회원가입
        </Button>
      </Stack>
    </Stack>
  );
};
