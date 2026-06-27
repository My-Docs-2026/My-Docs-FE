import { create } from 'zustand';
import type { IAuth } from '../../types/IAuth';

export const useSignUp = create<IAuth>((set) => ({
  isLoginDialogOpen: false,
  setIsLoginDialogOpen: (isLoginDialogOpen: boolean) => set({ isLoginDialogOpen }),
  isLoggedIn: !!sessionStorage.getItem('accessToken'),
  setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
}));
