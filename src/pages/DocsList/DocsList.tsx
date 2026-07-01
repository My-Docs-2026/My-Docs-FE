import { Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { DocsListSearch } from './DocsListSearch';
import { DocsListGrid } from './DocsListGrid';

export const DocsList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Stack
      sx={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px',
        gap: '28px',
        boxSizing: 'border-box',
      }}
    >
      <Typography sx={{ fontSize: '28px', fontWeight: 700, color: '#0F172A' }}>
        문서 목록
      </Typography>
      <DocsListSearch value={searchQuery} onChange={setSearchQuery} />
      <DocsListGrid searchQuery={searchQuery} />
    </Stack>
  );
};
