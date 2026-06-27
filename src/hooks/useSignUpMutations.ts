import { useMutation } from '@tanstack/react-query';
import { sendVerificationEmail, verifyEmail, register } from '../api/auth';

export const useSendVerificationEmailMutation = () =>
  useMutation({ mutationFn: sendVerificationEmail });

export const useVerifyEmailMutation = () =>
  useMutation({ mutationFn: verifyEmail });

export const useRegisterMutation = () =>
  useMutation({ mutationFn: register });
