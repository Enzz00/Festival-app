import { useState } from "react"
import { NavLink } from "react-router-dom"

export const NavBar =() => {

    const [showNav, setShowNav] = useState(false)
    const handleShowNav  = () => {
        setShowNav(!showNav)
    }

    return (
        <nav className={`navbar ${showNav ? "show-nav" : "hidden-nav" }` }>
            <div className="NavBar">
                <div id="icons" onClick={handleShowNav}><p>&#9776;</p></div>
                <NavLink 
                        to={"/"}>
                        <img className="LogoSite" src='../img/LogoSite.png' alt="LogoSite"></img>
                </NavLink>
            </div>
            <ul>
                <li>
                    <NavLink
                    to={"/"}
                    >General
                    </NavLink>
                </li>
                <li>
                <NavLink
                    to={"Carte"}
                    >Carte
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}