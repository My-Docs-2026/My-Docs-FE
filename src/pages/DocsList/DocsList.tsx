import { Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { DocsListSearch } from './DocsListSearch';
import { DocsListGrid } from './DocsListGrid';
import { ConfirmDialog } from '../Components/Common/ConfirmDialog';
import { useDeleteDialog } from '../../stores/Docs/useDeleteDialog';
import { useDeleteDocMutation } from '../../hooks/useDeleteDocMutation';

export const DocsList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { open, targetId, closeDialog } = useDeleteDialog();
  const { mutate: deleteMutate } = useDeleteDocMutation();

  const handleConfirm = () => {
    if (targetId) deleteMutate(targetId);
    closeDialog();
  };

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

      <ConfirmDialog
        open={open}
        title="문서를 삭제하시겠습니까?"
        description="삭제된 문서는 복구할 수 없습니다."
        confirmLabel="삭제"
        onConfirm={handleConfirm}
        onCancel={closeDialog}
      />
    </Stack>
  );
};
