import React from 'react';
import LinkImg from "../../res/images/link.svg?component";
import Link from "../Link";

const Project = ({ title, text, image, timestamp, technologies = [], link, linkLabel, hide = false }) => {
    return (
        <>
            {!hide && <>
                <div className="w-full flex items-center justify-between gap-6 flex-col md:flex-row overflow-hidden">
                    <div className="flex flex-col gap-6 w-full md:flex-row">
                        <div className="w-full md:w-1/5 flex flex-col sm:flex-row md:flex-col justify-between items-center md:items-start gap-2">
                            <div>
                                <div className="text-[2rem] text-main">{title}</div>
                                <div className="text-zinc-400 text-[1rem]">{timestamp}</div>
                            </div>
                            {link && <Link link={link} className="flex justify-between items-center max-h-10 w-2/3 sm:w-fit md:w-full">
                                <span>{linkLabel ?? "Github page"}</span>
                                <LinkImg fill="currentColor" className="h-[1em]" />
                            </Link>}
                        </div>

                        <div className="flex flex-col gap-2 flex-1">
                            <div className="text-[1.1rem] font-bold flex flex-col md:flex-row">
                                <div className="w-full md:w-2/3">{text}</div>
                                {image && <div className="md:w-1/3 max-h-96 flex justify-center items-center overflow-hidden p-2">
                                    <img
                                        loading="lazy"
                                        className="object-contain w-1/3 md:w-auto max-w-full max-h-80 md:max-h-full rounded-md"
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