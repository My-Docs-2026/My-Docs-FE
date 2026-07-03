import { Box, CircularProgress, Pagination, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { useState } from 'react';
import { DocsListCard } from './DocsListCard';
import { useDocsListQuery } from '../../hooks/useDocsListQuery';

const PAGE_SIZE = 12;

type SortType = 'latest' | 'title';

interface DocsListGridProps {
  searchQuery: string;
}

export const DocsListGrid: React.FC<DocsListGridProps> = ({ searchQuery }) => {
  const [sort, setSort] = useState<SortType>('latest');
  const [page, setPage] = useState(0);

  const { data, isLoading } = useDocsListQuery(page, PAGE_SIZE, sort);

  const filtered = (data?.content ?? []).filter((doc) =>
    doc.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <Stack sx={{ gap: '20px' }}>
      <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography sx={{ fontSize: '15px', color: '#64748B' }}>
          총 {data?.total_elements ?? 0}개
        </Typography>
        <ToggleButtonGroup
          value={sort}
          exclusive
          onChange={(_, value) => {
            if (value) {
              setSort(value);
              setPage(0);
            }
          }}
          size="small"
        >
          <ToggleButton
            value="latest"
            sx={{
              fontSize: '13px',
              fontWeight: 500,
              px: '16px',
              border: '1px solid #E2E8F0',
              '&.Mui-selected': { backgroundColor: '#EFF6FF', color: '#2563EB', borderColor: '#2563EB' },
            }}
          >
            최신순
          </ToggleButton>
          <ToggleButton
            value="title"
            sx={{
              fontSize: '13px',
              fontWeight: 500,
              px: '16px',
              border: '1px solid #E2E8F0',
              '&.Mui-selected': { backgroundColor: '#EFF6FF', color: '#2563EB', borderColor: '#2563EB' },
            }}
          >
            가나다순
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: '60px' }}>
          <CircularProgress sx={{ color: '#2563EB' }} />
        </Box>
      ) : filtered.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: '60px' }}>
          <Typography sx={{ color: '#94A3B8', fontSize: '15px' }}>문서가 없습니다</Typography>
        </Box>
      ) : (
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {filtered.map((doc) => (
            <DocsListCard
              key={doc.document_id}
              id={doc.document_id}
              title={doc.title}
              status={doc.status}
              createdAt={doc.created_at}
              summary={doc.summary}
            />
          ))}
        </Box>
      )}

      {(data?.total_pages ?? 0) > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', pt: '8px' }}>
          <Pagination
            count={data?.total_pages ?? 1}
            page={page + 1}
            onChange={(_, value) => setPage(value - 1)}
            sx={{
              '& .MuiPaginationItem-root.Mui-selected': {
                backgroundColor: '#2563EB',
                color: '#fff',
              },
            }}
          />
        </Box>
      )}
    </Stack>
  );
};
