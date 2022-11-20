import { BigButton } from "../../UI/Button"
import img from "./../../img/2fbd23c39bff0aee6c0c84aaf60e66347d.svg"


export const Business = () => {
    return (
        <div className="business">
            <div className="container">
                <div className="business-container">
                    <div className="business-items">
                        <img src={img} className="business-img" />
                        <div className="business-info">
                            <p className="business-info-p">Stand out as a company!</p>
                            <h3 className="business-info-title">Check out OLX's offer for business</h3>
                        </div>
                        <BigButton name="more details" style="business-button" />
                    </div>
                </div>
            </div>
        </div>
    )
} 