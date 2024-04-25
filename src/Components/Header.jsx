import react from "react"
import { NavLink } from "react-router-dom"
import logo from "../images/lh.svg"
import nav from "../images/nav.png"
import React from "react"
export default function Header(){

    const [navState, setnavState] = React.useState(false)

    function btnClick(){
        setnavState(prev => {
            return !prev
        })
    }


    return (
        <nav className="navbar">
            <div className="nav-header">
                <div className="nav-center">
                    <NavLink to="/">
                        <img src={logo} alt="" />
                    </NavLink>
                    <button type="button" className="nav-btn" onClick={btnClick}>
                        <img src={nav} alt="" />
                    </button>

                </div>
                
                <ul className={`nav-links ${navState ? "show-nav":" "}`}>
                        <li>
                            <NavLink 
                                to = "/"
                                end
                                className={({isActive}) => isActive ? "nav-active" : ""}
                                >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to = "/rooms"
                                end
                                className={({isActive}) => isActive ? "nav-active" : ""}
                                >
                                Rooms
                            </NavLink>
                        </li>
                    </ul>
            </div>        
        </nav>
    )
}