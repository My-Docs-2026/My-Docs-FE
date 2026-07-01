import { Box, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { useState } from 'react';
import { DocsListCard } from './DocsListCard';

const MOCK_DOCS = Array.from({ length: 12 }, (_, i) => ({
  id: `doc-${i + 1}`,
  title: `문서 제목 ${i + 1} - 근로계약서 검토 요청`,
  type: i % 3 === 0 ? 'TEXT' : 'FILE',
  status: i % 4 === 3 ? 'PENDING' : 'COMPLETED',
  createdAt: `2026-06-${String(30 - i).padStart(2, '0')}`,
}));

interface DocsListGridProps {
  searchQuery: string;
}

type SortType = 'latest' | 'alpha';

export const DocsListGrid: React.FC<DocsListGridProps> = ({ searchQuery }) => {
  const [sort, setSort] = useState<SortType>('latest');

  const filtered = MOCK_DOCS.filter((doc) =>
    doc.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sort === 'alpha') return a.title.localeCompare(b.title, 'ko');
    return b.createdAt.localeCompare(a.createdAt);
  });

  return (
    <Stack sx={{ gap: '20px' }}>
      <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography sx={{ fontSize: '15px', color: '#64748B' }}>
          총 {filtered.length}개
        </Typography>
        <ToggleButtonGroup
          value={sort}
          exclusive
          onChange={(_, value) => value && setSort(value)}
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
            value="alpha"
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

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
        }}
      >
        {sorted.map((doc) => (
          <DocsListCard key={doc.id} {...doc} />
        ))}
      </Box>
    </Stack>
  );
};
