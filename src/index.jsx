import { createRoot } from "react-dom/client";
import Front from "./views/Front";
import "./res/css/index.scss";
import Dots from "./views/Dots";

const container = document.getElementById("react-root");
const root = createRoot(container);
root.render(
    <div>
        <Front />
        <Dots />
    </div>
);