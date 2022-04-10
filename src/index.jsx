import { createRoot } from "react-dom/client";
import Router, { Route } from "./components/Router/index";
import Front from "./views/Front";
import ProjectsTimeline from "./views/ProjectsTimeline";
import "./res/css/index.scss";
import Project from "./views/Project";


const container = document.getElementById("react-root");
const root = createRoot(container);

const Root = () => {
    const frontPage = <>
        <Front />
        <ProjectsTimeline />
    </>;

    return <>
        <Router notFound={frontPage} >
            <Route path="/">
                {frontPage}
            </Route>
            <Route path="/Projects/:item">
                <Project />
            </Route>
        </Router>

    </>;
};

root.render(<Root />);