import { useState } from 'react';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import type { SignUpFormValues } from './SignUpDialogForm';

const textFieldSx = {
  '& .MuiOutlinedInput-root': {
    height: '48px',
    borderRadius: '10px',
    borderColor: '#CBD5E1',
    backgroundColor: '#F8FAFC',
  },
};

export const SignUpEmail: React.FC = () => {
  const [isCodeSent, setIsCodeSent] = useState(false);
  const { register, formState: { errors } } = useFormContext<SignUpFormValues>();

  const handleSendCode = () => {
    // TODO: 이메일 인증 API 연동
    setIsCodeSent(true);
  };

  return (
    <>
      <Stack sx={{ gap: '6px', width: '100%' }}>
        <Typography sx={{ fontSize: '14px', fontWeight: 600, color: '#475569' }}>
          이메일(ID)
        </Typography>
        <Stack direction="row" sx={{ gap: '8px' }}>
          <TextField
            variant="outlined"
            sx={{ ...textFieldSx, flex: 1 }}
            placeholder="example@email.com"
            error={!!errors.email}
            helperText={errors.email?.message}
            {...register('email', {
              required: '이메일을 입력해주세요.',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: '올바른 이메일 형식이 아닙니다.' },
            })}
          />
          <Button
            variant="outlined"
            onClick={handleSendCode}
            sx={{
              height: '48px',
              minWidth: '80px',
              borderRadius: '10px',
              borderColor: '#CBD5E1',
              color: '#475569',
              flexShrink: 0,
            }}
          >
            {isCodeSent ? '재전송' : '인증'}
          </Button>
        </Stack>
      </Stack>

      {isCodeSent && (
        <Stack sx={{ gap: '6px', width: '100%' }}>
          <Typography sx={{ fontSize: '14px', fontWeight: 600, color: '#475569' }}>
            인증번호
          </Typography>
          <TextField
            variant="outlined"
            sx={{ ...textFieldSx, width: '100%' }}
            placeholder="인증번호 6자리 입력"
            error={!!errors.verificationCode}
            helperText={errors.verificationCode?.message}
            {...register('verificationCode', { required: '인증번호를 입력해주세요.' })}
          />
        </Stack>
      )}
    </>
  );
};
