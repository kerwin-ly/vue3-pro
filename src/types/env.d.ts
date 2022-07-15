/**
 * @description 环境变量类型声明
 */
declare namespace NodeJS {
  interface Process {
    env: {
      ENV: 'development' | 'production';
      BASE_URL: string;
      BASE_API_URL: string;
      NODE_ENV: 'development' | 'production';
      PORT?: string;
      PWD: string;
    };
  }
}
