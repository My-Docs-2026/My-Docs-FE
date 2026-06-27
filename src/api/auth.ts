import axiosInstance from './axiosInstance';
import type {
  ILoginRequest,
  ILoginResponse,
  ISendVerificationEmailRequest,
  IVerifyEmailRequest,
  ISignUpRequest,
  IMessageResponse,
} from '../types/IAuth';

export const login = (body: ILoginRequest) =>
  axiosInstance.post<ILoginResponse>('/v1/auth/login', body).then((res) => res.data);

export const sendVerificationEmail = (body: ISendVerificationEmailRequest) =>
  axiosInstance.post<IMessageResponse>('/v1/users/register', body).then((res) => res.data);

export const verifyEmail = (body: IVerifyEmailRequest) =>
  axiosInstance.post<IMessageResponse>('/v1/users/verify-email', body).then((res) => res.data);

export const register = (body: ISignUpRequest) =>
  axiosInstance.post<IMessageResponse>('/v1/users/signup', body).then((res) => res.data);
