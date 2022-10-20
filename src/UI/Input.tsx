import { FC} from "react"
import { IInput, IOption, ISelect } from "../type/ui"


export const Input:FC<IInput>= ({className,value,type,onChange}) => {
    return (
        <input className={className}
                value={value}
                type={type}
                onChange={onChange}
                />
    )
}

export const option:FC <IOption> = ({option}) => {
    return (
        <option value={option}>{option}</option>
    )
}

export const Select:FC<ISelect> = ({option,className })=> {
    return (
        <select className={className}>
            {option.map( el => <option key={Math.floor(Math.random()*1000)} value={el}>{el}</option>)}
        </select>
    )
}

export const NumberInput:FC = () => {
    return (
        <input type={'number'} className="number-input" />
    )
}

