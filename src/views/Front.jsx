import React from 'react';
import LinkedinImg from "../res/images/linkedin.svg?component";
import GithubImg from "../res/images/github.svg?component";
import ProjectsImg from "../res/images/projects.svg?component";

const Front = () => {
    return (
        <>
            <div className="title">
                <span className="title-pretext">Hallo, ik ben</span>
                <div className="title-text-container" >
                    <a className="title-text" href="/src/res/files/CV.pdf" target="_blank" >
                        Menno
                    </a>
                </div>
            </div>

            <div className="icon-bar" >
                <a href="https://www.linkedin.com/in/menno-bil-055100201/" target="_blank">
                    <LinkedinImg fill="currentColor" className="h-[1em] inline" />
                    LinkedIn
                </a>
                <a href="https://github.com/CodingWithMenno" target="_blank">
                    <GithubImg fill="currentColor" className="h-[1em] inline" />
                    Github
                </a>
                <a href="https://coding-with-menno.jimdosite.com/my-projects/" target="_blank">
                    <ProjectsImg fill="currentColor" className="h-[1em] inline" />
                    Projects
                </a>
            </div>
        </>
    );
};

export default Front;