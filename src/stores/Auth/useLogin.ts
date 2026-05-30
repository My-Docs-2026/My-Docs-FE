import { create } from 'zustand';
import type { IAuth } from '../../types/IAuth';

export const useLogin = create<IAuth>((set) => ({
  isLoginDialogOpen: true,
  setIsLoginDialogOpen: (isLoginDialogOpen: boolean) =>
    set({
      isLoginDialogOpen: isLoginDialogOpen,
    }),
}));
