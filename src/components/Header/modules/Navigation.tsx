import { FC } from "react";
import { BigButton } from "../../../UI/Button";
import { NavItem } from "./NavItem";


export const Navigation: FC = () => {


    return (
        <nav className="navigation">
            <NavItem to="massage" name="Massage" />
            <NavItem to="user" name="User" />
            <NavItem to="liked" name="Liked" />
            <NavItem to="add_ad" name="add AD"/>
        </nav>
    )
}