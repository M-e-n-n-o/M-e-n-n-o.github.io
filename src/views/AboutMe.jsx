import React from 'react';
import Header from "../components/Header";
import MennoImg from "../res/images/menno.webp";

const AboutMe = () => {
    return (
        <div className='flex flex-col items-center'>
            <Header>
                <h2 className="text-[4rem] text-white">About me</h2>
            </Header>
            <div className="p-8 flex flex-col items-center justify-center sm:gap-12 sm:flex-row">
                <div className="w-1/2 sm:w-1/3 md:w-1/4 2xl:w-1/4 wide:w-1/3 flex items-center justify-center">
                    <img src={MennoImg} className="flex-1 aspect-1 rounded-md" />
                </div>
                <div className="text-[1.5rem] w-full flex-1 flex items-center py-4 sm:max-w-fit">
                    Hi, I am Menno Bil and I'm a Dutch Computer Science and Engineering student at Avans University of Applied Sciences.
                    I am super enthusiastic about Graphics and hardware programming and love spending a lot of my free time there.
                    On this website, I publish all the side projects that I have worked on besides my work or school.
                </div>
            </div>
        </div>
    );
};

export default AboutMe;