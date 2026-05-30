import { Button, Dialog, Divider, Stack, TextField, Typography } from '@mui/material';

export const LoginDialogForm: React.FC = () => {
  const textFieldSx = {
    width: '100%',
    height: '52px',
    '& .MuiOutlinedInput-root': {
      height: '52px',
      borderRadius: '10px',
      borderColor: '#CBD5E1',
      backgroundColor: '#F8FAFC',
    },
  };
  return (
    <form
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <Stack
        sx={{
          width: '100%',
          height: '81px',
          gap: '8px',
          marginBottom: '24px',
        }}
      >
        <Typography
          sx={{
            fontsize: '14px',
            fontWeight: 600,
            color: '#475569',
          }}
        >
          이메일(ID)
        </Typography>
        <TextField variant="outlined" sx={textFieldSx} placeholder="example@email.com" />
      </Stack>

      <Stack
        sx={{
          width: '100%',
          gap: '8px',
          height: '81px',
          marginBottom: '24px',
        }}
      >
        <Typography
          sx={{
            fontsize: '14px',
            fontWeight: 600,
            color: '#475569',
          }}
        >
          비밀번호
        </Typography>
        <TextField type="password" variant="outlined" sx={textFieldSx} />
      </Stack>
      <Button variant="contained">로그인</Button>
    </form>
  );
};
