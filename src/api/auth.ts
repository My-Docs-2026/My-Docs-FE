import axiosInstance from './axiosInstance';
import type { ILoginRequest, ILoginResponse } from '../types/IAuth';

export const login = (body: ILoginRequest) =>
  axiosInstance.post<ILoginResponse>('/v1/auth/login', body).then((res) => res.data);
