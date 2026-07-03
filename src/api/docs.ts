import axiosInstance from './axiosInstance';
import type {
  IFileUploadResponse,
  IUploadDocsRequest,
  IUploadDocsResponse,
  IDocsStatusResponse,
  IAnalyzeDocsResponse,
  IDocsListResponse,
} from '../types/IDocs';

export const uploadFile = (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  console.log('[uploadFile] request:', { fileName: file.name, fileSize: file.size, fileType: file.type });
  return axiosInstance
    .post<IFileUploadResponse>('/v1/docs/file', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((res) => {
      console.log('[uploadFile] response:', res.data);
      return res.data;
    });
};

export const uploadDocs = (request: IUploadDocsRequest) => {
  console.log('[uploadDocs] request:', request);
  return axiosInstance
    .post<IUploadDocsResponse>('/v1/docs/upload', request)
    .then((res) => {
      console.log('[uploadDocs] response:', res.data);
      return res.data;
    });
};

export const getDocsStatus = (id: string) =>
  axiosInstance.get<IDocsStatusResponse>(`/v1/docs/${id}/status`).then((res) => {
    console.log('[getDocsStatus] id:', id, '| response:', res.data);
    return res.data;
  });

export const getAnalysis = (id: string) =>
  axiosInstance.get<IAnalyzeDocsResponse>(`/v1/docs/${id}`).then((res) => res.data);

export const getDocsList = (pageNumber: number, pageSize: number, sort: string) =>
  axiosInstance
    .get<IDocsListResponse>('/v1/docs', { params: { pageNumber, pageSize, sort } })
    .then((res) => res.data);

export const deleteDoc = (id: string) =>
  axiosInstance.delete<{ message: string }>(`/${id}`).then((res) => res.data);
