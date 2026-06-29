import { useMutation } from '@tanstack/react-query';
import { uploadFile, uploadDocs } from '../api/docs';
import type { UploadDocsFormValues } from '../pages/UploadDocs/UploadDocsForm';

const uploadDocsFlow = async (data: UploadDocsFormValues) => {
  if (data.mode === 'FILE' && data.file) {
    const { file_url } = await uploadFile(data.file);
    return uploadDocs({ title: data.title || null, type: 'FILE', file_url, raw_text: null });
  }
  return uploadDocs({ title: data.title || null, type: 'TEXT', file_url: null, raw_text: data.text || null });
};

export const useUploadAnalyzeMutation = () =>
  useMutation({ mutationFn: uploadDocsFlow });
