import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteDoc } from '../api/docs';

export const useDeleteDocMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteDoc(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['docsList'] });
    },
  });
};
