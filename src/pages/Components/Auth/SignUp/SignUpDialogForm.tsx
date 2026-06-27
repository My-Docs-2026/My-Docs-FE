import { useState } from 'react';
import { Button } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { useRegisterMutation } from '../../../../hooks/useSignUpMutations';
import { SignUpEmail } from './SignUpEmail';
import { SignUpPassword } from './SignUpPassword';

export interface SignUpFormValues {
  email: string;
  verificationCode: string;
  password: string;
  passwordConfirm: string;
}

interface Props {
  onSwitchToLogin: () => void;
}

export const SignUpDialogForm: React.FC<Props> = ({ onSwitchToLogin }) => {
  const [isVerified, setIsVerified] = useState(false);
  const methods = useForm<SignUpFormValues>();
  const { mutate: registerMutate, isPending } = useRegisterMutation();

  const onSubmit = ({ email, password }: SignUpFormValues) => {
    registerMutate(
      { email, password },
      { onSuccess: onSwitchToLogin },
    );
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }}
      >
        <SignUpEmail onVerified={() => setIsVerified(true)} />
        <SignUpPassword />
        <Button
          type="submit"
          variant="contained"
          disabled={!isVerified || isPending}
          sx={{ height: '48px', borderRadius: '10px', marginTop: '4px' }}
        >
          {isPending ? '가입 중...' : '회원가입'}
        </Button>
      </form>
    </FormProvider>
  );
};
