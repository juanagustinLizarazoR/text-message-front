import { AxiosResponse} from "axios";

import {ConfigCreator} from "./ConfigCreator";
import {
    ParametersOptionsDelete,
    ParametersOptionsGet,
    ParametersOptionsPost,
    ParametersOptionsPut
} from "./IConfigCreator";

import {AjaxConfigWithoutUrl} from "./types";

export abstract class IRequest<OutDto,InDto, BodyType extends Record<string, unknown>> {
    baseUrl: string;
    ajaxConfigCreator: ConfigCreator<BodyType>;

    protected constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
        this.ajaxConfigCreator = new ConfigCreator<BodyType>(baseUrl);
    }

    abstract AjaxFetch<Dto>(
        ajaxConfig: AjaxConfigWithoutUrl
    ): Promise<AxiosResponse<Dto>>;

    abstract get(
        [url, customConfig]: ParametersOptionsGet
    ): Promise<AxiosResponse<InDto>>;

    abstract post(
        [url, body]: ParametersOptionsPost<OutDto>
    ): Promise<AxiosResponse<InDto>>;

    abstract put(
        [url, body]: ParametersOptionsPut<OutDto>
    ): Promise<AxiosResponse<InDto>>;

    abstract delete(
        [url]: ParametersOptionsDelete
    ): Promise<AxiosResponse<InDto>>;
}
