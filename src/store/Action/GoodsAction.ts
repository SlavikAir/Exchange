import axios from "axios";
import { IGoods } from "../interface/IGoods";
import { goodsSlice } from "../reducers/GoodsReducer";
import { AppDispatch } from "../store";

// асинхронный акшен для получения товаров с сервера

export const goodsFetch = (category:string) => async (dispatch: AppDispatch) => {
    try {
        console.log(" загрузка началась")
        dispatch(goodsSlice.actions.goodsFetching())
        const response = await axios.get<IGoods[]>(`http://localhost:3001/${category}`)
        dispatch(goodsSlice.actions.goodsFetchingSuccess(response.data))
        console.log(" загрузка удачно завершилась")
    } catch (e){
        if (typeof e === "string") {
            dispatch(goodsSlice.actions.goodsFetchingError(e))
        }
        dispatch(goodsSlice.actions.goodsFetchingSuccess([]))
        console.log(" ошибка при загрузки")
    }
}