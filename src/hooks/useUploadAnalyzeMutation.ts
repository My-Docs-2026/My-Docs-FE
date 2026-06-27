import { useMutation } from '@tanstack/react-query';
import { uploadFile, uploadAnalyze } from '../api/docs';
import type { UploadDocsFormValues } from '../pages/UploadDocs/UploadDocsForm';

const uploadAnalyzeFlow = async (data: UploadDocsFormValues) => {
  if (data.file) {
    const { fileUrl } = await uploadFile(data.file);
    return uploadAnalyze(data, fileUrl);
  }
  return uploadAnalyze(data);
};

export const useUploadAnalyzeMutation = () =>
  useMutation({ mutationFn: uploadAnalyzeFlow });
