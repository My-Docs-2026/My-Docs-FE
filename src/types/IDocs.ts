export type DocumentType = 'FILE' | 'TEXT';

export interface IFileUploadResponse {
  fileName: string;
  fileSize: number;
  fileKey: string;
  fileUrl: string;
  mimeType: string;
}

export interface IUploadDocsRequest {
  title: string | null;
  type: DocumentType;
  file_url: string | null;
  raw_text: string | null;
}

export interface IUploadDocsResponse {
  title: string;
  status: string;
}
