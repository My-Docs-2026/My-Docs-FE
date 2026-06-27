import { useQuery } from '@tanstack/react-query';
import { getDocsStatus } from '../api/docs';

export const useDocsStatusQuery = (id: string) =>
  useQuery({
    queryKey: ['docsStatus', id],
    queryFn: () => getDocsStatus(id),
    refetchInterval: (query) =>
      query.state.data?.status === 'SUCCESS' ? false : 3000,
  });
