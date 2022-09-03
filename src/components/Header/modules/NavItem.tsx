import { FC } from "react";
import { Link } from "react-router-dom";
import { INavItem } from "../../../type/navigation";


export const NavItem: FC<INavItem> = (props:INavItem)=> {
    return (
        <div className={`${props.name == "add AD" ? "nav-button" : "nav-item "}`}>
            <Link to={props.to}>{props.name}</Link>
        </div>
    )
}