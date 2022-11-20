import { Link } from "react-router-dom"
import { NetworkItem } from "./modules/NetworkItem"
import { NetworkText } from "./modules/NetworkText"
import Logo from "./../../img/logo/logo.png"

let text = [
"За допомогою сервісу OLX ви зможете купити чи продати з рук у руки практично все, що завгодно."
]

export const Networks = () => {
    return (
        <section className="networks">
                <div className="networks-items">
                    <img className="networks-items-logo"src={Logo} alt="#" />
                    <div className="networks-text">
                        <p className="networks-text-item">Усі онлайн-оголошення України на OLX - тут ви знайдете те, що шукали! Натиснувши на кнопку
                            <Link to={"/add_lot"} target="_blank" className="decoration"> Подати оголошення, </Link> ви зможете розмістити оголошення на будь-яку тематику легко й швидко.</p>
                        <NetworkText children={text[0]} />
                    </div>  
                    <div className="networks-link">
                       <NetworkItem back="network-fb" link="https://www.facebook.com/"/>
                       <NetworkItem back="network-yt" link="https://www.youtube.com/"/>
                       <NetworkItem back="network-tw" link="https://twitter.com"/>
                    </div>
                    <NetworkText children="communities in social networks." />
                </div>
        </section>
    )
}