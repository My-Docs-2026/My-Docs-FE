import { useMutation } from '@tanstack/react-query';
import { login } from '../api/auth';
import { useLogin } from '../stores/Auth/useLogin';

export const useLoginMutation = () => {
  const setIsLoginDialogOpen = useLogin((state) => state.setIsLoginDialogOpen);
  const setIsLoggedIn = useLogin((state) => state.setIsLoggedIn);

  return useMutation({
    mutationFn: login,
    onSuccess: ({ accessToken }) => {
      localStorage.setItem('accessToken', accessToken);
      setIsLoggedIn(true);
      setIsLoginDialogOpen(false);
    },
  });
};
