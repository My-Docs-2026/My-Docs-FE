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


