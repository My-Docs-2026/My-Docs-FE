import { create } from 'zustand';
import type { IAuth } from '../../types/IAuth';

export const useLogin = create<IAuth>((set) => ({
  isLoginDialogOpen: false,
  setIsLoginDialogOpen: (isLoginDialogOpen: boolean) => set({ isLoginDialogOpen }),
  isLoggedIn: !!localStorage.getItem('accessToken'),
  setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
}));
