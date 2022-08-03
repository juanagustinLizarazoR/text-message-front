import {useCallback, useEffect, useState} from "react";
import {ListProps} from "../../components";
import {TextItem} from "../../services/dto";
import {transformListItem} from "../../utils";
import {useMain} from "../main";

export const useForm = () => {
    const {request} = useMain()
    const [currentActiveItem, setCurrentActiveItem] = useState("")
    const [textValues, setTextValues] = useState<ListProps>({listItems: [], currentActiveItem, setCurrentActiveItem})
    const requestData = useCallback(async () => {
        const response = (await request?.get(["/text/"]))?.data;

        if (response && response.textArray) {
            const transformedValues = transformListItem(response.textArray, editHandler, deleteHandler, "editar", "borrar", currentActiveItem, setCurrentActiveItem)
            setTextValues(transformedValues)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    async function editHandler(id: string, textItem: TextItem) {
        await request?.put([`/text/${id}`, textItem])
        await requestData()

    }

    async function deleteHandler(id: string) {
        await request?.delete([`/text/${id}`])
        await requestData()
    }

    useEffect(() => {
        const initialRequest = async () => {
            await requestData()
        }
        initialRequest()
// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function onSubmit(textValue: string) {
        await request?.post(["/text/", {value: textValue}])
        await requestData()
    }

    return {onSubmit, currentActiveItem, setCurrentActiveItem, textValues}
}
