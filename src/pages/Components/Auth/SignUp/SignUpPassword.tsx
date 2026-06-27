import { Stack, TextField, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import type { SignUpFormValues } from './SignUpDialogForm';

const PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

const textFieldSx = {
  width: '100%',
  '& .MuiOutlinedInput-root': {
    height: '48px',
    borderRadius: '10px',
    borderColor: '#CBD5E1',
    backgroundColor: '#F8FAFC',
  },
};

export const SignUpPassword: React.FC = () => {
  const { register, watch, formState: { errors } } = useFormContext<SignUpFormValues>();

  return (
    <>
      <Stack sx={{ gap: '6px', width: '100%' }}>
        <Typography sx={{ fontSize: '14px', fontWeight: 600, color: '#475569' }}>
          비밀번호
        </Typography>
        <TextField
          type="password"
          variant="outlined"
          sx={textFieldSx}
          error={!!errors.password}
          helperText={errors.password?.message ?? '대문자, 소문자, 숫자, 특수기호를 모두 포함해주세요.'}
          {...register('password', {
            required: '비밀번호를 입력해주세요.',
            pattern: { value: PASSWORD_PATTERN, message: '대문자, 소문자, 숫자, 특수기호를 모두 포함해야 합니다.' },
          })}
        />
      </Stack>

      <Stack sx={{ gap: '6px', width: '100%' }}>
        <Typography sx={{ fontSize: '14px', fontWeight: 600, color: '#475569' }}>
          비밀번호 확인
        </Typography>
        <TextField
          type="password"
          variant="outlined"
          sx={textFieldSx}
          error={!!errors.passwordConfirm}
          helperText={errors.passwordConfirm?.message}
          {...register('passwordConfirm', {
            required: '비밀번호 확인을 입력해주세요.',
            validate: (value) => value === watch('password') || '비밀번호가 일치하지 않습니다.',
          })}
        />
      </Stack>
    </>
  );
};
