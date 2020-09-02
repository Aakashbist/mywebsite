import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import paths from "../constants/AppRoute";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar__brand-title">
        <NavLink to={"/"}> Aakash Bista</NavLink>
      </div>

      <input type="checkbox" className="toggler" />
      <div className="hamburger">
        <div className="navicon"></div>
      </div>

      <div className="navbar__links ">
        <ul className="navbar__list">
          {/* {paths.map((path, index) => (
                        <NavLink key={index} className="navbar__link" activeClassName="navbar__current" to={path.link}>{path.text}</NavLink>
                    ))
                    } */}

          <Link
            className="navbar__link"
            activeClass="navbar__current"
            to="landingPage"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Home
          </Link>
          <Link
            className="navbar__link"
            activeClass="navbar__current"
            to="experience"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Experience
          </Link>
          <Link
            className="navbar__link"
            activeClass="navbar__current"
            to="education"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Education
          </Link>

          <Link
            className="navbar__link"
            activeClass="navbar__current"
            to="skill"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Skills
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
