import { createBrowserRouter } from 'react-router-dom';
import { AppRouter } from './AppRouter';
import { Home } from '../pages/Home/Home';
import { UploadDocs } from '../pages/UploadDocs/UploadDocs';
import { AnalyzingDocs } from '../pages/AnalyzeDocs/AnalyzingDocs';
import { AnalyzeDocsResult } from '../pages/AnalyzeDocs/AnalyzeDocsResult';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppRouter />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'upload',
        element: <UploadDocs />,
      },
      {
        path: 'analyzing/:id',
        element: <AnalyzingDocs />,
      },
      {
        path: 'analyze/:id',
        element: <AnalyzeDocsResult />,
      },
    ],
  },
]);
