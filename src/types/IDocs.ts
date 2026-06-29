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
  document_id: string;
  title: string;
  type: string;
  file_url: string | null;
  status: string;
  created_at: string;
}

export interface IDocsStatusResponse {
  document_id: string;
  status: string;
}

export interface IAnalysisDetailItem {
  risk_level: string;
  clause_title: string;
  original_text: string;
  warning: string;
}

export interface IAnalysisResult {
  summary: string;
  pros_summary: string;
  analysis_detail: IAnalysisDetailItem[];
  analyzed_at: string;
}

export interface IAnalyzeDocsResponse {
  document_id: string;
  title: string;
  type: string;
  file_url: string | null;
  status: string;
  created_at: string;
  analysis: IAnalysisResult | null;
}
