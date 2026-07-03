import { create } from 'zustand';

interface IDeleteDialog {
  open: boolean;
  targetId: string | null;
  openDialog: (id: string) => void;
  closeDialog: () => void;
}

export const useDeleteDialog = create<IDeleteDialog>((set) => ({
  open: false,
  targetId: null,
  openDialog: (id) => set({ open: true, targetId: id }),
  closeDialog: () => set({ open: false, targetId: null }),
}));
