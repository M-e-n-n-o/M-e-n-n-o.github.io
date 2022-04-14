import React from 'react';
import Header from "../components/Header";
import MennoImg from "../res/images/menno.webp";

const AboutMe = () => {
    return (
        <div className="flex flex-col items-center">
            <Header>
                <h2 className="text-[4rem] text-white">Over mij</h2>
            </Header>
            <div className="p-8 flex flex-col items-center justify-center sm:gap-12 sm:flex-row">
                <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 2xl:w-1/2 flex items-center justify-center">
                    <img src={MennoImg} className="flex-1 aspect-1 rounded-md" />
                </div>
                <div className="text-[1.5rem] w-full flex-1 flex items-center py-4 sm:max-w-fit">
                    Ik ben Menno Bil en ik studeer Technische Informatica op Avans Hogeschool te Breda.<br />
                    Op deze website publiceer ik al mijn eigen projecten waar ik aan heb gewerkt tijdens mijn studeertijd.
                </div>
            </div>
        </div >
    );
};

export default AboutMe;