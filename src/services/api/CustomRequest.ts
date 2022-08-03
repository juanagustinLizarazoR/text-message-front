
import axios,{AxiosRequestConfig, AxiosResponse} from "axios";
import {ConfigCreator} from "./ConfigCreator";
import {
    IConfigCreator,
    ParametersOptionsDelete,
    ParametersOptionsGet,
    ParametersOptionsPost,
    ParametersOptionsPut
} from "./IConfigCreator";
import {IRequest} from "./IRequest";

export class CustomRequest<OutDto,InDto> extends IRequest<OutDto,InDto,
    any> {
    public configCreator: IConfigCreator;

    constructor(baseUrl: string) {
        super(baseUrl);
        this.configCreator = new ConfigCreator(baseUrl);
    }

    async AjaxFetch<Dto>(
        ajaxConfig: AxiosRequestConfig
    ): Promise<AxiosResponse<Dto>> {
        return axios.request(ajaxConfig)
    }

    delete(
        [url]: ParametersOptionsDelete
    ): Promise<AxiosResponse<InDto>> {
        return this.AjaxFetch(this.configCreator.defineAjaxConfigOptionsDelete(url));
    }

    get(
        [url, customConfig]: ParametersOptionsGet
    ): Promise<AxiosResponse<InDto>> {
        return this.AjaxFetch(this.configCreator.defineAjaxConfigOptionsGet(url, customConfig));
    }


    post(
        [url, body]: ParametersOptionsPost<OutDto>
    ): Promise<AxiosResponse<InDto>> {
        return this.AjaxFetch(this.configCreator.defineAjaxConfigOptionsPost(url, body));
    }

    put(
        [url, body]: ParametersOptionsPut<OutDto>
    ): Promise<AxiosResponse<InDto>> {
        return this.AjaxFetch(this.configCreator.defineAjaxConfigOptionsPut(url, body));
    }
}
