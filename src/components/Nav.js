import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PATHS } from "../constants/AppRoute";

function Nav() {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        //alert(!toggle)

    }
    return (
        <nav className="navbar">
            <div className="navbar__brand-title">
                Aakash Bista
            </div>

            <input type="checkbox" className="toggler" />
            <div className="hamburger"><div className="navicon"></div>
            </div>

            <div className="navbar__links " >
                <ul className="navbar__list">

                    <NavLink className="navbar__link" activeClassName="navbar__current" to={PATHS.HOME}>Home</NavLink>
                    <NavLink className="navbar__link" activeClassName="navbar__current" to={PATHS.EDUCATION}>Education</NavLink>
                    <NavLink className="navbar__link" activeClassName="navbar__current" to={PATHS.EXPERIENCE}>Experience</NavLink>
                    <NavLink className="navbar__link" activeClassName="navbar__current" to={PATHS.SKILL}>Skill</NavLink>
                </ul>
            </div>
        </nav >

    );
}

export default Nav;
