import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';

interface ConfirmDialogProps {
  open: boolean;
  title: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  confirmColor?: 'error' | 'primary';
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  open,
  title,
  description,
  confirmLabel = '확인',
  cancelLabel = '취소',
  confirmColor = 'error',
  onConfirm,
  onCancel,
}) => {
  return (
    <Dialog open={open} onClose={onCancel} slotProps={{ paper: { sx: { borderRadius: '16px', padding: '8px', minWidth: '360px' } } }}>
      <DialogTitle sx={{ fontSize: '18px', fontWeight: 700, color: '#0F172A', pb: '8px' }}>
        {title}
      </DialogTitle>
      {description && (
        <DialogContent sx={{ pt: 0, '&.MuiDialogContent-root': { paddingTop: 0 } }}>
          <Typography sx={{ fontSize: '14px', color: '#64748B' }}>{description}</Typography>
        </DialogContent>
      )}
      <DialogActions sx={{ gap: '8px', px: '24px', pb: '16px' }}>
        <Button
          onClick={onCancel}
          sx={{ color: '#64748B', border: '1px solid #E2E8F0', borderRadius: '8px', px: '20px' }}
        >
          {cancelLabel}
        </Button>
        <Button
          onClick={onConfirm}
          variant="contained"
          color={confirmColor}
          sx={{ borderRadius: '8px', px: '20px', boxShadow: 'none' }}
        >
          {confirmLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
