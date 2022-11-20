import { Link } from "react-router-dom"
import { NavItem } from "./NavItem"


export const MainNavigation = () => {

    return (
        <div className="container">
        <nav className="main-navigation">
            <ul className="main-navigation-ul">
                <Link to={'category/'} >
                    <NavItem img='auto' />
                </Link>
                <Link to={'category/'} >
                    <NavItem img='house' />
                </Link>
                <Link to={'category/'} >
                    <NavItem img='tool' />
                </Link>
                <Link to={'category/'} >
                    <NavItem img='sport' />
                </Link>
                <Link to={'category/'} >
                    <NavItem img='hobby' />
                </Link>
            </ul>
        </nav>
        </div>
    )
}