import { useMutation } from '@tanstack/react-query';
import { uploadFile, uploadDocs } from '../api/docs';
import type { UploadDocsFormValues } from '../pages/UploadDocs/UploadDocsForm';

const uploadDocsFlow = async (data: UploadDocsFormValues) => {
  if (data.file) {
    const { fileUrl } = await uploadFile(data.file);
    return uploadDocs(data, fileUrl);
  }
  return uploadDocs(data);
};

export const useUploadAnalyzeMutation = () =>
  useMutation({ mutationFn: uploadDocsFlow });
