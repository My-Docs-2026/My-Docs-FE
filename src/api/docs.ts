import axiosInstance from './axiosInstance';
import type { UploadDocsFormValues } from '../pages/UploadDocs/UploadDocsForm';
import type { IUploadAnalyzeResponse } from '../types/IDocs';

export const uploadAnalyze = (data: UploadDocsFormValues) => {
  const formData = new FormData();
  formData.append('title', data.title);
  formData.append('model', data.model);
  if (data.file) {
    formData.append('file', data.file);
  }
  if (data.text) {
    formData.append('text', data.text);
  }

  return axiosInstance
    .post<IUploadAnalyzeResponse>('/v1/docs/upload-analyze', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((res) => res.data);
};
