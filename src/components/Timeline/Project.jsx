import React from 'react';
const Project = ({ title, text, image, timestamp, link, technologies = [], hide = false }) => {
    return (
        <>
            {!hide && <>
                <div className="w-full flex items-center justify-between gap-6 flex-col md:flex-row overflow-hidden">
                    <div className="flex flex-col gap-6 w-full md:flex-row">
                        <div className="w-full md:w-2/5 lg:w-1/4">
                            <div className="text-[2rem] text-main">{title}</div>
                            <div className="text-zinc-400 text-[1rem]">{timestamp}</div>
                        </div>

                        <div className="flex flex-col gap-2 flex-1">
                            <div className="text-[1.1rem] font-bold flex flex-col md:flex-row">
                                <div>{text}</div>
                                {image && <div className="w-full md:w-1/2 max-h-96 flex justify-center items-center overflow-hidden">
                                    <img
                                        className="object-contain w-1/2 md:w-fit max-h-full max-w-full rounded-md"
                                        src={image}
                                    />
                                </div>}
                            </div>
                            {technologies.length > 0 && <div
                                className="flex gap-2 flex-wrap"
                            >
                                {technologies}
                            </div>}
                        </div>
                    </div>
                </div>
                <div className="py-[0.05rem] w-11/12 my-6 bg-zinc-400"></div>
            </>}
        </>
    );
};

export default Project;