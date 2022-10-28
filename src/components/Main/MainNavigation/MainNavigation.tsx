import { Link } from "react-router-dom"
import { NavItem } from "./NavItem"


export const MainNavigation = () => {
    return (
        <nav className="main-navigation">
            <ul className="main-navigation-ul">
                <Link to={'category/auto'} >
                    <NavItem img='auto-img'/>
                </Link>
                <Link to={'category/house'} >
                    <NavItem img='house-img'/>
                </Link>
                <Link to={'category/tools'} >
                    <NavItem img='tools-img'/>
                </Link>
                <Link to={'category/sport'} >
                    <NavItem img='sport-img'/>
                </Link>
                <Link to={'category/hobby'} >
                    <NavItem img='hobby-img'/>
                </Link>
            </ul>
        </nav>
    )
}