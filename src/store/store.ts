import { combineReducers, configureStore } from "@reduxjs/toolkit";
import LotReducer from "./reducers/LotReducer";
import GoodsReducer from './reducers/GoodsReducer'
import VipReducer from './reducers/VipReducer'

const rootReducer = combineReducers({
    LotReducer,
    GoodsReducer,
    VipReducer
})

export const setupStore = () => {
    return configureStore({
        reducer:rootReducer 
    })
}   







export type RootState = ReturnType< typeof  rootReducer> 
export type AppStore = ReturnType< typeof  setupStore>          
export type AppDispatch = AppStore["dispatch"]