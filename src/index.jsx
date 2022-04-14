import { createRoot } from "react-dom/client";
import Front from "./views/Front";
import ProjectsTimeline from "./views/ProjectsTimeline";
import "./res/css/index.scss";
import AboutMe from "./views/AboutMe";
import Footer from "./views/Footer";


const container = document.getElementById("react-root");
const root = createRoot(container);

const Root = () => {
    return <>
        <Front />
        <AboutMe />
        <ProjectsTimeline />
        <Footer />
    </>;
};

root.render(<Root />);