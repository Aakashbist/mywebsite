import React from "react";
import { Route, Switch, Redirect, useLocation, Router } from "react-router-dom";
import { PATHS } from "../../constants/AppRoute";
import Home from "../Pages/Home";
import Education from "../Pages/education/Education";
import Experience from "../Pages/Experience";
import Skill from "../Pages/Skill";

const MainAuth = () => {
    let location = useLocation();
    // console.log("location: ", location);

    return (
        <Switch location={location}>
            <Route exact
                path='/' component={Home} />
            <Route
                path={PATHS.EDUCATION}
                component={Education}
            />
            <Route

                path={PATHS.EXPERIENCE}
                component={Experience}
            />
            <Route
                path={PATHS.SKILL}
                component={Skill}
            />
        </Switch>

    );
};

export default MainAuth;