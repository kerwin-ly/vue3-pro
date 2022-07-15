import axios, { AxiosRequestConfig } from 'axios';
import { message as $message } from 'ant-design-vue';
import { storage } from '@/utils/storage';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { useI18n } from '@/hooks/useI18n';
import { useRouter } from 'vue-router';
import { RequestMethod, RequestOptions } from './typing';
import { HttpStatusCode, TIMEOUT } from './config';

axios.defaults.baseURL = process.env.BASE_API_URL;
axios.defaults.timeout = TIMEOUT;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';

const { t } = useI18n();
const router = useRouter();

// Request interceptor
axios.interceptors.request.use(
  (config: SafeAny) => {
    const token = storage.get(ACCESS_TOKEN_KEY);
    if (token) {
      config.headers['Authorization'] = token;
    }
    return config;
  },
  (error) => {
    if (error.message.includes('timeout')) {
      $message.warn(t('api.timeout'));
    }

    return Promise.reject(error);
  }
);

// Response interceptor
axios.interceptors.response.use(
  (data) => {
    if (data.status && data.status == HttpStatusCode.Success) {
      return data;
    } else {
      return Promise.reject(data);
    }
  },
  (error) => {
    if (error.response) {
      const status = error.response.status;

      switch (status) {
        case HttpStatusCode.LoginTimeout:
          $message.warn(t('api.loginTimeout'));
          localStorage.clear();
          router.replace({ name: 'news' });
          break;
        case HttpStatusCode.ServerError:
        case HttpStatusCode.UnknownError:
          $message.warn(t('api.serverError'));
          break;
        default:
          $message.warn(t('api.unknownError'));
          break;
      }
    } else {
      if (String(error).includes('timeout')) {
        $message.warn(t('api.timeout'));
      }
    }
    return Promise.reject(error);
  }
);

// TODO: support optional params. (eg. globalLoading: boolean)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function request<T = SafeAny>(config: AxiosRequestConfig, options: RequestOptions = {}): Promise<T> {
  return new Promise((resolve, reject) => {
    let requestUrl = '';
    let requestParams = {};
    requestUrl = config.url as string;
    if (config.method === 'get' || config.method === 'delete') {
      requestParams = {
        params: config.data
      };
    } else if (config.method === 'post' || config.method === 'put') {
      requestParams = config.data;
    }

    axios[config.method as RequestMethod](requestUrl, requestParams)
      .then((res) => {
        if (res.data && res.status === HttpStatusCode.Success) {
          resolve(res.data);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}
