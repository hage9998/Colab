import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export default class HTTPAdapter {
  private readonly instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL: baseURL,
    });
  }

  async get<R, T = object>(
    path: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<R>> {
    return this.instance.get(path, {
      ...config,
      params: { data },
      headers: { ...config?.headers },
    });
  }
}
