import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGoods } from "../interface/IGoods";

// редюсер будет работать с таким интерфейсом 
interface GoodsState {  
    goods:IGoods[],     // принемает массив товаров
    isLoading: boolean,
    error:string
}
    
const initialState:GoodsState  = { // дефолтное состояние
    goods: [],
    isLoading: false,
    error: '',
}


export const goodsSlice = createSlice ({
    name: 'goods',
    initialState,
    reducers: {
        goodsFetching (state) {
            state.isLoading = true
        },
        goodsFetchingSuccess (state, action: PayloadAction<IGoods[]>) {
            state.isLoading = false
            state.error = ""
            state.goods = action.payload

        },
        goodsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload

        },
    }
})

export default goodsSlice.reducer;  