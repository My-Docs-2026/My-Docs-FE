import axiosInstance from './axiosInstance';
import type { UploadDocsFormValues } from '../pages/UploadDocs/UploadDocsForm';
import type {
  IFileUploadResponse,
  IUploadDocsRequest,
  IUploadDocsResponse,
  IDocsStatusResponse,
  IAnalyzeDocsResponse,
} from '../types/IDocs';

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
    return { title: data.title || null, type: 'FILE', file_url: fileUrl, raw_text: null };
  }
  return { title: data.title || null, type: 'TEXT', file_url: null, raw_text: data.text || null };
};

export const uploadDocs = (data: UploadDocsFormValues, fileUrl?: string) =>
  axiosInstance
    .post<IUploadDocsResponse>('/v1/docs/upload', toUploadDocsRequest(data, fileUrl))
    .then((res) => res.data);

export const getDocsStatus = (id: string) =>
  axiosInstance.get<IDocsStatusResponse>(`/v1/docs/${id}/status`).then((res) => res.data);

export const getAnalysis = (id: string) =>
  axiosInstance.get<IAnalyzeDocsResponse>(`/v1/docs/${id}`).then((res) => res.data);
