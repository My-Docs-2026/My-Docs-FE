import { RouterProvider } from 'react-router-dom';

import { router } from './router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// QueryClient는 컴포넌트 외부에서 한 번만 생성하거나 useMemo를 사용해야 합니다.
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
