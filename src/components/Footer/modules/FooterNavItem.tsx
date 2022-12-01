import { FC } from "react";
import { Link } from "react-router-dom";

export interface IFooterNavItem{
    name:string,
    link:string
}


export const FooterNavItem: FC<IFooterNavItem>= ({link,name}) => {
    return (
        <li className="footer-nav-item">
            <Link to={`/info/${link}`}>{name}</Link>
        </li>
    )
}