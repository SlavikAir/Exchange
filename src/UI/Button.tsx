import { IBigButton } from "../type/ui"

export const BigButton = (props:IBigButton) => {
    return (
        <button className="big-button" onClick={props.onClick}>{props.name}</button>
    )
}

export const SearchButton = (props:IBigButton) => {
    return (
        <button className="search-button" onClick={props.onClick}>{props.name}</button>
    )
}

