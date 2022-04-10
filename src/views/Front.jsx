import React from 'react';
import Dots from "../components/Dots";
import LinkedinImg from "../res/images/linkedin.svg?component";
import GithubImg from "../res/images/github.svg?component";
import IdCardImg from "../res/images/Id-card.svg?component";
import "../res/css/views/Front.scss";

const FrontIcon = ({ text, href, ...props }) => {
    return <a
        href={href}
        target="_blank"
        className="flex items-center gap-2"
    >
        <props.icon fill="currentColor" className="h-[1em] inline" />
        {text}
    </a>;
};

const Front = () => {
    return (
        <div className="h-screen relative front-container">
            <div className="title">
                <span className="title-pretext">Hallo, ik ben</span>
                <div className="title-text-container" >
                    <a className="title-text" href="/src/res/files/CV.pdf" target="_blank" >
                        Menno
                    </a>
                </div>
            </div>

            <div className="absolute bottom-0 text-[1.8rem] w-full flex items-center gap-2  flex-col sm:flex-row sm:justify-around" >
                <FrontIcon
                    href="https://www.linkedin.com/in/menno-bil-055100201/"
                    icon={LinkedinImg}
                    text="LinkedIn"
                />
                <FrontIcon
                    href="https://github.com/CodingWithMenno"
                    icon={GithubImg}
                    text="Github"
                />
                <FrontIcon
                    href="/src/res/files/CV.pdf"
                    icon={IdCardImg}
                    text="CV"
                />
            </div>
            <Dots />
        </div>
    );
};

export default Front;