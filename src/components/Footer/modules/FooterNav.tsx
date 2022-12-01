import { FC } from "react";
import { FooterNavItem } from "./FooterNavItem";
import {propsNav} from "./propsNav"


export const FooterNav:FC = () => {
    return(
        <ul className="footer-nav">
            {propsNav ? 
                propsNav.map( e => <FooterNavItem  link={e.link} name={e.name}/>)
            : "links not finds"}
        </ul>
    )
}