import { PropsWithChildren } from "react"


export interface IBigButton extends PropsWithChildren {
    name:string
    onClick?: ()=> void
    style?:string
}

export interface IInput {
    className:string
    value?:string
    type?:string
    onChange?: any
}

export interface IOption extends PropsWithChildren{
    option:string | undefined
}

export interface ISelect {
    option:Array<string>
    className:string
}
