import {AxiosRequestConfig} from "axios";

export type ApplicationKey = "json" | "formData";
export const headersTypeConstant: Record<ApplicationKey,
    Partial<AxiosRequestConfig>> = {
    json:     {
        responseType: "json",

        headers: {
            "Content-Type": "application/json",
        },
    },
    formData: {
        headers: {},
    },
};
