import { FC } from "react"

interface IProps {
    children: React.ReactNode
}

export const NetworkText: FC <IProps> = (props)=> {
    return (
        <p className="network-text">{props.children}</p>
    )
}