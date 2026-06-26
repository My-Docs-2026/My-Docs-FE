import { Button, Stack, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useLoginMutation } from '../../../../hooks/useLoginMutation';

interface LoginFormValues {
  email: string;
  password: string;
}

export const LoginDialogForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();
  const { mutate: loginMutate, isPending, error } = useLoginMutation();

  const onSubmit = (data: LoginFormValues) => {
    loginMutate(data);
  };

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
      onSubmit={handleSubmit(onSubmit)}
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <Stack sx={{ width: '100%', height: '81px', gap: '8px', marginBottom: '24px' }}>
        <Typography sx={{ fontSize: '14px', fontWeight: 600, color: '#475569' }}>
          이메일(ID)
        </Typography>
        <TextField
          variant="outlined"
          sx={textFieldSx}
          placeholder="example@email.com"
          error={!!errors.email}
          helperText={errors.email?.message}
          {...register('email', {
            required: '이메일을 입력해주세요.',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: '올바른 이메일 형식이 아닙니다.',
            },
          })}
        />
      </Stack>

      <Stack sx={{ width: '100%', gap: '8px', height: '81px', marginBottom: '24px' }}>
        <Typography sx={{ fontSize: '14px', fontWeight: 600, color: '#475569' }}>
          비밀번호
        </Typography>
        <TextField
          type="password"
          variant="outlined"
          sx={textFieldSx}
          error={!!errors.password}
          helperText={errors.password?.message}
          {...register('password', { required: '비밀번호를 입력해주세요.' })}
        />
      </Stack>

      {error && (
        <Typography sx={{ fontSize: '13px', color: '#EF4444', textAlign: 'center' }}>
          이메일 또는 비밀번호가 올바르지 않습니다.
        </Typography>
      )}

      <Button type="submit" variant="contained" disabled={isPending}>
        {isPending ? '로그인 중...' : '로그인'}
      </Button>
    </form>
  );
};
