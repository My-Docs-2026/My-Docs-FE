export type DocumentType = 'FILE' | 'TEXT';

export interface IFileUploadResponse {
  file_name: string;
  file_size: number;
  file_key: string;
  file_url: string;
  mime_type: string;
}

export interface IUploadDocsRequest {
  title: string | null;
  type: DocumentType;
  file_url: string | null;
  raw_text: string | null;
}

export interface IUploadDocsResponse {
  documentId: string;
  title: string;
  type: string;
  fileUrl: string | null;
  status: string;
  createdAt: string;
}

export interface IDocsStatusResponse {
  documentId: string;
  status: string;
}

export interface IAnalysisDetailItem {
  riskLevel: string;
  clauseTitle: string;
  originalText: string;
  warning: string;
}

export interface IAnalysisResult {
  summary: string;
  prosSummary: string;
  analysisDetail: IAnalysisDetailItem[];
  analyzedAt: string;
}

export interface IAnalyzeDocsResponse {
  documentId: string;
  title: string;
  type: string;
  fileUrl: string | null;
  status: string;
  createdAt: string;
  analysis: IAnalysisResult | null;
}
