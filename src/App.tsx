import { RouterProvider } from 'react-router-dom';

import { router } from './router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const App: React.FC = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
