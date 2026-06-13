export interface IAuth {
  isLoginDialogOpen: boolean;
  setIsLoginDialogOpen: (isLoginDialogOpen: boolean) => void;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  accessToken: string;
}


