import * as axios from 'axios';

declare module 'axios' {
  export interface AxiosTransformer {
    (data: any, headers?: any): any;
  }

  export interface AxiosAdapter {
    (config: AxiosRequestConfig): AxiosPromise<any>;
  }

  export interface AxiosBasicCredentials {
    username: string;
    password: string;
  }

  export interface AxiosProxyConfig {
    host: string;
    port: number;
    auth?: {
      username: string;
      password: string;
    };
  }

  export interface AxiosRequestConfig {
    url?: string;
    method?: string;
    baseURL?: string;
    transformRequest?: AxiosTransformer | AxiosTransformer[];
    transformResponse?: AxiosTransformer | AxiosTransformer[];
    headers?: any;
    params?: any;
    paramsSerializer?: (params: any) => string;
    data?: any;
    timeout?: number;
    withCredentials?: boolean;
    adapter?: AxiosAdapter;
    auth?: AxiosBasicCredentials;
    responseType?: string;
    xsrfCookieName?: string;
    xsrfHeaderName?: string;
    onUploadProgress?: (progressEvent: any) => void;
    onDownloadProgress?: (progressEvent: any) => void;
    maxContentLength?: number;
    validateStatus?: (status: number) => boolean;
    maxRedirects?: number;
    httpAgent?: any;
    httpsAgent?: any;
    proxy?: AxiosProxyConfig | false;
    cancelToken?: CancelToken;
    // custom config
    [someOtherConfig: string]: any;
  }
}
