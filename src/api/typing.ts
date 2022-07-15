export type RequestMethod = 'get' | 'delete' | 'post' | 'put';

export interface RequestOptions {
  globalLoading?: boolean;
}

export type Response<T = SafeAny> = {
  code: number;
  message: string;
  data: T;
};

export type BaseResponse<T = SafeAny> = Promise<Response<T>>;
