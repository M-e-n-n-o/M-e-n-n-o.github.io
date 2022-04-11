import React from 'react';

const styleList = {
    1: "flex flex-col gap-6 w-full md:flex-row",
    2: "w-full",
    3: "w-full"
};

const headStyleList = {
    1: "",
    2: "",
    3: "flex items-center gap-6"
};

const Project = ({ title, text, timestamp, link, technologies = [], style = 1, hide = false }) => {
    return (
        <>
            {!hide && <>
                <div className="w-full flex items-center justify-between gap-6 flex-col md:flex-row">
                    <div className={styleList[style] ?? styleList[1]}>
                        <div className={headStyleList[style] ?? headStyleList[1]}>
                            <div className="text-[2rem] text-main">{title}</div>
                            <div className="text-zinc-400 text-[1rem]">{timestamp}</div>
                        </div>

                        <div className="flex flex-col gap-2 flex-1">
                            <div className="text-[1.1rem] font-bold">{text}</div>
                            {technologies.length > 0 && <div
                                className="flex gap-2 flex-wrap"
                            >
                                {technologies}
                            </div>}
                        </div>
                    </div>
                    <div>

                        <a href={link} className="text-white bg-call hover:bg-call-hover flex items-center px-2 py-1 rounded-md font-mono text-bold text-[1.1rem] gap-2 w-max">
                            Meer details
                            <span>{"=>"}</span>
                        </a>
                    </div>
                </div>
                <div className="h-[0.05rem] w-11/12 mt-6 mb-6 bg-zinc-400"></div>
            </>}
        </>
    );
};

export default Project;