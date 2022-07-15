export enum HttpStatusCode {
  Success = 200,
  Fail = 400,
  Forbidden = 403,
  NotFound = 404,
  ServerError = 500,
  LoginTimeout = 401,
  UnknownError = 504
}

export const TIMEOUT = 30000;
