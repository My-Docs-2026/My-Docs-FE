import { useMutation } from '@tanstack/react-query';
import { login } from '../api/auth';
import { useLogin } from '../stores/Auth/useLogin';

export const useLoginMutation = () => {
  const setIsLoginDialogOpen = useLogin((state) => state.setIsLoginDialogOpen);

  return useMutation({
    mutationFn: login,
    onSuccess: ({ accessToken }) => {
      localStorage.setItem('accessToken', accessToken);
      setIsLoginDialogOpen(false);
    },
  });
};
