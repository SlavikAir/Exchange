import { PropsWithChildren } from "react"


export interface IBigButton extends PropsWithChildren {
    name:string
    onClick?: ()=> void
}

export interface IInput {
    className:string
    value?:string
}

export interface IOption extends PropsWithChildren{
    option:string | undefined
}

export interface ISelect {
    option:Array<string>
    className:string
}