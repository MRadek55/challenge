export interface LoginResponse {
  loginWithEmail: {
    __typename: string;
    accessToken: string;
    refreshToken: string;
    user: {
      __typename: string;
      appleId: null;
      email: string;
      facebookId: null;
      googleId: null;
      id: string;
      name: string;
    };
  };
}
