import React from 'react';
import Dots from "../components/Dots";
import LinkedinImg from "../res/images/linkedin.svg?component";
import GithubImg from "../res/images/github.svg?component";
import IdCardImg from "../res/images/id-card.svg?component";
import MennoImg from "../res/images/menno.webp";
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
        <div className="relative overflow-hidden">
            <div className="min-h-screen flex flex-col justify-between items-center front-container gap-8">
                <div className="z-10 py-3 text-white flex-1 flex flex-col justify-center items-center md:w-3/4 lg:flex-row xl:w-4/6">
                    <div className="flex-1 flex justify-center">
                        <div>
                            <div className="text-[1.8rem]">Hallo, ik ben</div>
                            <a className="hover:text-main-hover pl-4 block text-[7rem] sm:text-[9rem] xl:text-[10rem]" href="/src/res/files/CV.pdf" target="_blank" >
                                Menno
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="flex items-center justify-center w-1/2 py-4 md:p-0 md:max-w-[50%] md:w-fit md:max-h-[60vh]">
                            <img
                                className="rounded-full aspect-square object-contain"
                                src={MennoImg}
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                <div className="z-10 text-[1.8rem] text-white hover:children:text-main-hover py-4 w-full flex items-center gap-2 flex-col sm:flex-row sm:justify-around " >
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
            </div>
            <Dots className="absolute top-0 z-0" />
        </div>
    );
};

export default Front;