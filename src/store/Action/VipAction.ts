import axios from "axios";
import { IGoods } from "../interface/IGoods";
import { vipSlice } from "../reducers/VipReducer";
import { AppDispatch } from "../store";

// асинхронный акшен для получения Vip товаров с сервера

export const vipFetch = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(vipSlice.actions.vipFetching())
        const response = await axios.get<IGoods[]>(`http://localhost:3001/vip`)
        dispatch(vipSlice.actions.vipFetchingSuccess(response.data))
    } catch (e) {
        if (typeof e === "string") {
            dispatch(vipSlice.actions.vipFetchingError(e))
        }
    }
}