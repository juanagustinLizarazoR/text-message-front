import {AxiosRequestConfig} from "axios";

export type AjaxConfigWithoutUrl = Omit<AxiosRequestConfig, "url">;
