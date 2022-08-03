import {AxiosRequestConfig} from "axios";

import {ApplicationKey, headersTypeConstant} from "../../constants";
import {IConfigCreator} from "./IConfigCreator";

export class ConfigCreator<BodyType extends Record<string, unknown>> implements IConfigCreator {
    private readonly baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    defineAjaxConfigOptionsGet(
        url: string,
        customConfig?: Partial<AxiosRequestConfig>
    ): AxiosRequestConfig {
        return {
            ...this.getBaseSettings(),
            url:    this.baseUrl + url,
            method: "GET",
            ...customConfig,
        };
    }

    defineAjaxConfigOptionsPost(url: string, body: BodyType): AxiosRequestConfig {
        return {
            ...this.getBaseSettings(body),
            data:body,
            url:    this.baseUrl + url,
            method: "POST",
        };
    }

    defineAjaxConfigOptionsPut(url: string, body?: BodyType): AxiosRequestConfig {
        return {
            ...this.getBaseSettings(body),
            data:body,
            url:    this.baseUrl + url,
            method: "PUT",
        };
    }

    defineAjaxConfigOptionsDelete(url: string): AxiosRequestConfig {
        return {
            ...this.getBaseSettings(),
            url:    this.baseUrl + url,
            method: "DELETE",
        };
    }

    getBaseSettings(body?: BodyType): Partial<AxiosRequestConfig> {
        let contentType: ApplicationKey = "json";
        if (body) {
            if (body instanceof FormData) {
                contentType = "formData";
            }
        }
        return headersTypeConstant[contentType];
    }
}
