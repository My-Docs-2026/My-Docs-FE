import { Button } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { SignUpEmail } from './SignUpEmail';
import { SignUpPassword } from './SignUpPassword';

export interface SignUpFormValues {
  email: string;
  verificationCode: string;
  password: string;
  passwordConfirm: string;
}

export const SignUpDialogForm: React.FC = () => {
  const methods = useForm<SignUpFormValues>();

  const onSubmit = (data: SignUpFormValues) => {
    // TODO: 회원가입 API 연동
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }}
      >
        <SignUpEmail />
        <SignUpPassword />
        <Button
          type="submit"
          variant="contained"
          sx={{ height: '48px', borderRadius: '10px', marginTop: '4px' }}
        >
          회원가입
        </Button>
      </form>
    </FormProvider>
  );
};
