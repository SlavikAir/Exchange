import { FC } from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import logo from "../../../img/logo/logo.png"


export const Logo: FC = () => {
    return (
        <div className="logo">
            <Link to='/'>
            <img  className="logo-img" src={logo} alt="logo"/>
            </Link>
        </div>
    )
}