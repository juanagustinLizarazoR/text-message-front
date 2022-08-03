import {useContext} from "react";
import {MainModelContext} from "../../contexts";

export const useMain = () => {
    const request = useContext(MainModelContext);
    if (request) {

        return request
    } else {
        throw new Error(
            "useMain() must be used by descendants of MainProvider"
        );
    }
}
