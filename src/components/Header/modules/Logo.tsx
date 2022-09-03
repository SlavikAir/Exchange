import { FC } from "react";
import logo from "../../../img/logo/logo.png"


export const Logo: FC = () => {
    return (
        <div className="logo">
            <img  className="logo-img" src={logo} alt="logo"/>
        </div>
    )
}