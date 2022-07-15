import request from '../axios';
import { BaseResponse } from '../typing';

export function loginApi(data: API.LoginParams) {
  return request<BaseResponse<API.LoginResponse>>({
    url: 'login',
    method: 'post',
    data
  });
}

export function getImageCaptchaApi(data?: API.CaptchaParams) {
  return request<API.CaptchaResponse>({
    url: 'captcha/img',
    method: 'get',
    data
  });
}
