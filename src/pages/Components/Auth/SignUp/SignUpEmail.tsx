import { useState, useEffect, useRef } from 'react';
import { Button, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { useSendVerificationEmailMutation, useVerifyEmailMutation } from '../../../../hooks/useSignUpMutations';
import type { SignUpFormValues } from './SignUpDialogForm';

const VERIFY_TIMEOUT = 300;

const textFieldSx = {
  '& .MuiOutlinedInput-root': {
    height: '48px',
    borderRadius: '10px',
    borderColor: '#CBD5E1',
    backgroundColor: '#F8FAFC',
  },
};

const actionButtonSx = {
  height: '48px',
  minWidth: '80px',
  borderRadius: '10px',
  borderColor: '#CBD5E1',
  color: '#475569',
  flexShrink: 0,
};

const formatTime = (seconds: number) => {
  const m = String(Math.floor(seconds / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');
  return `${m}:${s}`;
};

interface Props {
  onVerified: () => void;
}

export const SignUpEmail: React.FC<Props> = ({ onVerified }) => {
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isCodeVerified, setIsCodeVerified] = useState(false);
  const [timeLeft, setTimeLeft] = useState(VERIFY_TIMEOUT);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const { register, trigger, getValues, formState: { errors } } = useFormContext<SignUpFormValues>();
  const { mutate: sendCode, isPending: isSending } = useSendVerificationEmailMutation();
  const { mutate: verifyCode, isPending: isVerifying } = useVerifyEmailMutation();

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setTimeLeft(VERIFY_TIMEOUT);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleSendCode = async () => {
    const isValid = await trigger('email');
    if (!isValid) return;
    setIsCodeSent(true);
    startTimer();
    sendCode({ email: getValues('email') });
  };

  const handleVerifyCode = async () => {
    const isValid = await trigger('verificationCode');
    if (!isValid) return;
    verifyCode(
      { email: getValues('email'), code: getValues('verificationCode') },
      {
        onSuccess: () => {
          if (timerRef.current) clearInterval(timerRef.current);
          setIsCodeVerified(true);
          onVerified();
        },
      },
    );
  };

  const isExpired = isCodeSent && timeLeft === 0 && !isCodeVerified;

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
            disabled={isCodeVerified}
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
            disabled={isSending || isCodeVerified}
            sx={actionButtonSx}
          >
            {isSending ? '전송 중...' : isCodeSent ? '재전송' : '인증'}
          </Button>
        </Stack>
      </Stack>

      {isCodeSent && (
        <Stack sx={{ gap: '6px', width: '100%' }}>
          <Typography sx={{ fontSize: '14px', fontWeight: 600, color: '#475569' }}>
            인증번호
          </Typography>
          <Stack direction="row" sx={{ gap: '8px' }}>
            <TextField
              variant="outlined"
              sx={{ ...textFieldSx, flex: 1 }}
              placeholder="인증번호 6자리 입력"
              disabled={isCodeVerified || isExpired}
              error={!!errors.verificationCode || isExpired}
              helperText={
                isCodeVerified
                  ? '인증이 완료되었습니다.'
                  : isExpired
                  ? '인증 시간이 만료되었습니다. 재전송해주세요.'
                  : errors.verificationCode?.message
              }
              slotProps={{
                input: {
                  endAdornment: !isCodeVerified ? (
                    <InputAdornment position="end">
                      <Typography
                        sx={{
                          fontSize: '13px',
                          color: timeLeft < 60 ? '#EF4444' : '#94A3B8',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {formatTime(timeLeft)}
                      </Typography>
                    </InputAdornment>
                  ) : undefined,
                },
              }}
              {...register('verificationCode', { required: '인증번호를 입력해주세요.' })}
            />
            <Button
              variant="outlined"
              onClick={handleVerifyCode}
              disabled={isVerifying || isCodeVerified || isExpired}
              sx={actionButtonSx}
            >
              {isVerifying ? '확인 중...' : isCodeVerified ? '완료' : '확인'}
            </Button>
          </Stack>
        </Stack>
      )}
    </>
  );
};
