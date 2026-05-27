import { createBrowserRouter } from 'react-router-dom';
import { AppRouter } from './AppRouter';
import { Home } from '../pages/Home/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppRouter />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
