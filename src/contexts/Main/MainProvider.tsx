import React, {PropsWithChildren} from "react";


import {CustomRequest} from "../../services";
import {TextInDto, TextOutDto} from "../../services/dto";
import {MainModelContext} from "./MainContext";

export const MainProvider: React.FC<PropsWithChildren> = ({
                                                              children,
                                                              ...props
                                                          }) => {

    const ajaxRequest = new CustomRequest<TextOutDto, TextInDto>("http://localhost:4000")

    const {Provider} = MainModelContext;
    return <Provider value={{request: ajaxRequest}}>{children}</Provider>;
};
