import React from "react";

import {CustomRequest} from "../../services";

export const MainModelContext = React.createContext<{request?: CustomRequest<any,any> }>(
    {}
);
