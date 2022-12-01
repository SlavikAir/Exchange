import { FC } from "react";
import { FooterNav } from "./modules/FooterNav";
import { propsNav } from "./modules/propsNav";



export const Footer: FC = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-items">
                    <FooterNav />
                </div>
            </div>
        </div>
    )
}