import { createRoot } from "react-dom/client";
import Front from "./views/Front";
import ProjectsTimeline from "./views/ProjectsTimeline";
import "./res/css/index.scss";
import AboutMe from "./views/AboutMe";


const container = document.getElementById("react-root");
const root = createRoot(container);

const Root = () => {
    return <>
        <Front />
        <AboutMe />
        <ProjectsTimeline />
    </>;
};

root.render(<Root />);