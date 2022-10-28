import { useState } from "react"
import LotReducer, { LotSlice } from "../../../store/reducers/LotReducer";
import { useAppDispatch, useAppSelector } from "../../../store/redux";
import { Input, Select, NumberInput } from "../../../UI/Input"
import { region } from "../../../variadle/search";


const LotInput = () => {


    const { name, price,category } = useAppSelector(state => state.LotReducer)
    const { addName, addPrice , addCategory} = LotSlice.actions
    const dispatch = useAppDispatch()

    return (
        <div className="">
            <div className="label-lot-item">
                <label className="label-lot" for="lot-name">Category Name:</label>
                <Input type={"text"}
                    className={"lot-input"}
                    value={category}
                    onChange={(e) => dispatch(addCategory(e.target.value))} />
            </div>

            <div className="label-lot-item">
                <label className="label-lot" for="lot-name">Lot Name:</label>
                <Input type={"text"}
                    className={"lot-input"}
                    value={name}
                    onChange={(e) => dispatch(addName(e.target.value))} />
            </div>
            <div className="label-lot-item">
                <label className="label-lot" for="lot-name">Email:</label>
                <Input type={"email"}
                    className={"lot-input"} />
            </div>

            <div className="label-lot-item">
                <label className="label-lot" for="lot-name">Region:</label>
                <Select option={region}
                    className="lot-select" />
            </div>
            <div className="label-lot-item">
                <label className="label-lot" for="lot-name">Prise:</label>
                <NumberInput value={price}
                    onChange={(e) => dispatch(addPrice(e.target.value))} />
            </div>
        </div>
    )
}

export default LotInput