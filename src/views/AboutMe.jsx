import React from 'react';
import Header from "../components/Header";
import MennoImg from "../res/images/menno.webp";

const AboutMe = () => {
    return (
        <div className="flex flex-col items-center">
            <Header>
                <h2 className="text-[4rem] text-white">Over mij</h2>
            </Header>
            <div className="p-8 flex flex-wrap ">
                <div className="text-[1.5rem] w-full flex-1 flex items-center p-4 md:px-12">
                    Ik ben Menno Bil en ik studeer Technische Informatica op Avans Hogeschool te Breda.<br />
                    Op deze website publiceer ik al mijn eigen projecten waar ik aan heb gewerkt tijdens mijn studeertijd.
                </div>
                <div className="w-1/3 flex items-center justify-center">
                    <img src={MennoImg} className="flex-1 aspect-1 rounded-md" />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;