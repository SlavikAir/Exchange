import { combineReducers, configureStore } from "@reduxjs/toolkit";
import LotReducer from "./reducers/LotReducer";

const rootReducer = combineReducers({
    LotReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer:rootReducer 
    })
}   

export type RootState = ReturnType< typeof  rootReducer> 
export type AppStore = ReturnType< typeof  setupStore>          
export type AppDispatch = AppStore["dispatch"]