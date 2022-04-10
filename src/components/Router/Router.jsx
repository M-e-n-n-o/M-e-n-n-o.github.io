import React, { createContext, useEffect, useRef, useState } from 'react';
import Route from "./Route";
import matchPath from "./matchPath";

export const RouterContext = createContext();

const Router = ({ children = [], notFound = <>Not found</> }) => {
    const [displayPath, setDisplayPath] = useState({
        component: null,
        params: null
    });

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const routeParam = params.get("r");

        const pathToDisplay = {
            component: null,
            params: null
        };

        if (!routeParam) {
            pathToDisplay.component = notFound;
            pathToDisplay.params = {
                path: routeParam
            };
            return setDisplayPath(pathToDisplay);
        }

        const match = children.some((route) => {
            if (route.type !== Route) {
                return console.error("One route is not of type Route");
            }

            const routeProps = route.props;
            const routePath = routeProps.path;
            if (!routeProps.path) {
                return console.error("Path was null");
            }

            const pathMatch = matchPath(routePath, routeParam);
            if (pathMatch) {
                pathToDisplay.component = route;
                pathToDisplay.params = pathMatch.params;
                return true;
            }
        });

        if (!match) {
            pathToDisplay.component = notFound;
            pathToDisplay.params = {
                path: routeParam
            };
        }

        setDisplayPath(
            pathToDisplay
        );
    }, []);

    return (
        <RouterContext.Provider value={displayPath.params}>{displayPath.component}</RouterContext.Provider>
    );
};

export default Router;