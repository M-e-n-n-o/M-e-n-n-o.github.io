import React, { Suspense } from "react";

import { createRoot } from "react-dom/client";
import "./res/css/index.scss";

import Front from "./views/Front";
import AboutMe from "./views/AboutMe";
import Contact from "./views/Contact"

const container = document.getElementById("react-root");
const root = createRoot(container);

const ProjectsTimeline = React.lazy(() => import("./views/ProjectsTimeline"));
const Footer = React.lazy(() => import("./views/Footer"));

const Root = () => {
    return <>
        <Front />
        <AboutMe />
        <Suspense fallback={<></>}>
            <ProjectsTimeline />
        </Suspense>
        <Contact />
        <Suspense fallback={<></>}>
            <Footer />
        </Suspense>
    </>;
};

root.render(<Root />);