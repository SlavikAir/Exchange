import { PropsWithChildren } from "react"


export interface INavItem extends PropsWithChildren{
    name?:string
    to:string
}