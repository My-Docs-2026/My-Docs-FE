import { useMutation } from '@tanstack/react-query';
import { login } from '../api/auth';
import { useLogin } from '../stores/Auth/useLogin';

export const useLoginMutation = () => {
  const setIsLoginDialogOpen = useLogin((state) => state.setIsLoginDialogOpen);
  const setIsLoggedIn = useLogin((state) => state.setIsLoggedIn);

  return useMutation({
    mutationFn: login,
    onSuccess: ({ access_token }) => {
      sessionStorage.setItem('accessToken', access_token);
      setIsLoggedIn(true);
      setIsLoginDialogOpen(false);
    },
  });
};
