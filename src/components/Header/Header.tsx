import { FC } from "react";
import { Logo } from "./modules/Logo";
import { Navigation } from "./modules/Navigation";



export const Header: FC = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header-items">
                    <Logo />
                    <Navigation />
                </div>
            </div>
        </div>
    )
}