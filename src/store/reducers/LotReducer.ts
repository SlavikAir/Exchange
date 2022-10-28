import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface LotState {                  
    name:string
    price: number
    region:string
    description: string
    img:string
    category:string                                          
 } 

 const initialState: LotState = {
    name:"",
    price: 0,
    region:"",
    description: "",
    img:"",
    category: ""
}


export const LotSlice = createSlice ( {
    name: "CreateLot",
    initialState,
    reducers: {
        addImg(state,action: PayloadAction<string>) {
            state.img = action.payload;
        },
        addName(state, action: PayloadAction<string>) {
            state.name = action.payload;
        },
        addPrice(state, action: PayloadAction<number>) {
            state.price = action.payload;
        },
        addDescription(state, action: PayloadAction<string>) {
            state.description = action.payload;
        },
        addCategory(state, action: PayloadAction<string>) {
            state.category = action.payload;
        },

    }
})

export default LotSlice.reducer;