import { useMutation } from '@tanstack/react-query';
import { uploadAnalyze } from '../api/docs';

export const useUploadAnalyzeMutation = () => {
  return useMutation({
    mutationFn: uploadAnalyze,
  });
};
