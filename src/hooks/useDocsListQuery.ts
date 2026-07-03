import { useQuery } from '@tanstack/react-query';
import { getDocsList } from '../api/docs';

export const useDocsListQuery = (pageNumber: number, pageSize: number, sort: string) =>
  useQuery({
    queryKey: ['docsList', pageNumber, pageSize, sort],
    queryFn: () => getDocsList(pageNumber, pageSize, sort),
  });
