import {AxiosRequestConfig} from "axios";


export interface IConfigCreator<BodyType = Record<string,any>> {
    defineAjaxConfigOptionsGet(
        url: string,
        customConfig?: Partial<AxiosRequestConfig>
    ): AxiosRequestConfig;

    defineAjaxConfigOptionsPost(
        url: string,
        body: BodyType
    ): AxiosRequestConfig;

    defineAjaxConfigOptionsPut(
        url: string,
        body?: BodyType
    ): AxiosRequestConfig;

    defineAjaxConfigOptionsDelete(url: string): AxiosRequestConfig;

    getBaseSettings(): Partial<AxiosRequestConfig>;
}

export type ParametersOptionsGet = Parameters<IConfigCreator['defineAjaxConfigOptionsGet']>
export type ParametersOptionsPost<BodyType> = Parameters<IConfigCreator<BodyType>['defineAjaxConfigOptionsPost']>
export type ParametersOptionsPut<BodyType> = Parameters<IConfigCreator<BodyType>['defineAjaxConfigOptionsPut']>
export type ParametersOptionsDelete = Parameters<IConfigCreator['defineAjaxConfigOptionsDelete']>
