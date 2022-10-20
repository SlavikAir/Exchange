import { useState } from "react"
import { Input, Select,NumberInput } from "../../../UI/Input"
import { region } from "../../../variadle/search";


const LotInput = () => {

    const [lotName, setLotName] = useState("");
    const [lotPrise, setLotPrise] = useState("");
    
    return (
        <div className="">
            <div className="label-lot-item">
                <label className="label-lot" for="lot-name">Lot Name:</label>
                <Input      type={"text"}
                            className={"lot-input"}
                            value={lotName}
                            onChange={(e)=>setLotName(e.target.value)}/>
            </div>
            <div className="label-lot-item">
                <label className="label-lot" for="lot-name">Email:</label>
                <Input      type={"email"}
                            className={"lot-input"} />
            </div>

            <div className="label-lot-item">
                <label className="label-lot" for="lot-name">Region:</label>
                <Select     option={region}
                            className="lot-select" />
            </div>
            <div className="label-lot-item">
            <label className="label-lot" for="lot-name">Prise:</label>
            <NumberInput    value={lotPrise}
                            onChange={(e)=>setLotPrise(e.target.value)}/>
            </div>
        </div>
    )
}

export default LotInput