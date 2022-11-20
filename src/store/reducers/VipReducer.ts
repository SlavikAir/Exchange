import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGoods } from "../interface/IGoods";

// редюсер будет работать с таким интерфейсом 
interface VipState {  
    goods:IGoods[],     // принемает массив товаров
    isLoading: boolean,
    error:string
}
    
const initialState:VipState  = { // дефолтное состояние
    goods: [],
    isLoading: false,
    error: '',
}


export const vipSlice = createSlice ({
    name: 'vip',
    initialState,
    reducers: {
        vipFetching (state) {
            state.isLoading = true
        },
        vipFetchingSuccess (state, action: PayloadAction<IGoods[]>) {
            state.isLoading = false
            state.error = ""
            state.goods = action.payload

        },
        vipFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload

        },
    }
})

export default vipSlice.reducer;  