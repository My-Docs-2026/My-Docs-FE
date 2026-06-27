export interface IAuth {
  isLoginDialogOpen: boolean;
  setIsLoginDialogOpen: (isLoginDialogOpen: boolean) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  accessToken: string;
}

export interface ISendVerificationEmailRequest {
  email: string;
}

export interface IVerifyEmailRequest {
  email: string;
  code: string;
}

export interface ISignUpRequest {
  email: string;
  password: string;
}

export interface IMessageResponse {
  message: string;
}


