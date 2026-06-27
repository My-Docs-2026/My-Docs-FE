import axiosInstance from './axiosInstance';
import type { UploadDocsFormValues } from '../pages/UploadDocs/UploadDocsForm';
import type { IFileUploadResponse, IUploadDocsRequest, IUploadDocsResponse } from '../types/IDocs';

export const uploadFile = (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  return axiosInstance
    .post<IFileUploadResponse>('/v1/docs/file', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((res) => res.data);
};

const toUploadDocsRequest = (data: UploadDocsFormValues, fileUrl?: string): IUploadDocsRequest => {
  if (fileUrl) {
    return {
      title: data.title || null,
      type: 'FILE',
      file_url: fileUrl,
      raw_text: null,
    };
  }
  return {
    title: data.title || null,
    type: 'TEXT',
    file_url: null,
    raw_text: data.text || null,
  };
};

export const uploadAnalyze = (data: UploadDocsFormValues, fileUrl?: string) =>
  axiosInstance
    .post<IUploadDocsResponse>('/v1/docs/upload-analyze', toUploadDocsRequest(data, fileUrl))
    .then((res) => res.data);
