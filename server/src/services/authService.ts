class AuthService {
  constructor() {}

  authenticate() {
    return {
      accessToken: "accessToken",
      refreshToken: "refreshToken",
    };
  }

  reAuthenticate() {}

  logout() {}
}

export default AuthService;
