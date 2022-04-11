import React from 'react';

const AboutMe = () => {
    return (
        <div className="flex flex-col items-center">
            <header className="w-full bg-main text-center py-8">
                <h2 className="text-[4rem] text-white">Over mij</h2>
            </header>
            <div className="p-8 flex flex-wrap min-h-[50vh]">
                <div className="text-[1.5rem] w-full flex-1 flex items-center p-4 md:px-12">
                    Ik ben Menno Bil en ik studeer Technische Informatica op Avans Hogeschool te Breda.<br />
                    Op deze website publiceer ik al mijn eigen projecten waar ik aan heb gewerkt tijdens mijn studeertijd.
                </div>
                <div className="w-full md:max-w-[50%] md:w-fit flex items-center justify-center">
                    <img src="src/res/images/menno.webp" className="flex-1 aspect-1 max-w-[50%] md:max-w-[60%] lg:max-w-none max-h-[30rem] rounded-md" />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;