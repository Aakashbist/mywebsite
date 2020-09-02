import React from "react";
import { Route, Switch, Redirect, useLocation, Router } from "react-router-dom";
import paths from "../../constants/AppRoute";
import Home from "../Pages/Home";


const MainAuth = () => {
    let location = useLocation();
    // console.log("location: ", location);

    return (
        <Switch location={location}>
            {/* {paths.map((path, index) => (
                <Route
                    key={index}
                    path={path.link}
                    exact={path.exact}
                    component={path.component}
                />
            ))} */}

            <Route component={Home} />
        </Switch>

    );
};

export default MainAuth;