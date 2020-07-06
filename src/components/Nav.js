import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import paths from "../constants/AppRoute";

function Nav() {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        //alert(!toggle)

    }
    useEffect(() => {

    }, [])
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

                    {paths.map((path, index) => (
                        <NavLink key={index} className="navbar__link" activeClassName="navbar__current" to={path.link}>{path.text}</NavLink>
                    ))
                    }
                </ul>
            </div>
        </nav >

    );
}

export default Nav;
