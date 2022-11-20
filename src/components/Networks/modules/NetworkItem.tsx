import { FC } from "react"

interface IProps {
    back:string,
    link:string,
}


export const NetworkItem: FC<IProps>= (props)=> {
    return (
        <a className="network-center" href={props.link} target={'_blank'}>
            <div className={`network-item ${props.back}`}></div>
        </a>
    )
}