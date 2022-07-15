declare namespace API {
  interface LoginParams {
    captchaId: string;
    password: string;
    username: string;
    verifyCode: string;
  }

  interface LoginResponse {
    token: string;
  }

  interface CaptchaParams {
    width?: number;
    height?: number;
  }

  interface CaptchaResponse {
    img: string;
    id: string;
  }
}
