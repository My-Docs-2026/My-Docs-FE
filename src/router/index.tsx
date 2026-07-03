import { createBrowserRouter } from 'react-router-dom';
import { AppRouter } from './AppRouter';
import { Home } from '../pages/Home/Home';
import { UploadDocs } from '../pages/UploadDocs/UploadDocs';
import { AnalyzingDocs } from '../pages/AnalyzeDocs/AnalyzingDocs';
import { AnalyzeDocsResult } from '../pages/AnalyzeDocs/AnalyzeDocsResult';
import { DocsList } from '../pages/DocsList/DocsList';

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
      {
        path: 'list',
        element: <DocsList />,
      },
    ],
  },
]);
