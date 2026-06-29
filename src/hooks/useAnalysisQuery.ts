import { useQuery } from '@tanstack/react-query';
import { getAnalysis } from '../api/docs';

export const useAnalysisQuery = (id: string) =>
  useQuery({
    queryKey: ['analysis', id],
    queryFn: () => getAnalysis(id),
  });
