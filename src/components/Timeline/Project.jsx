import React from 'react';
import LinkImg from "../../res/images/link.svg?component";
import Link from "../Link";

const Project = ({ title, text, image, timestamp, technologies = [], link, linkLabel }) => {
    return (
        <>
            <div className="w-full flex items-center justify-center gap-6 flex-col md:flex-row overflow-hidden">
                <div className="flex flex-col gap-6 w-full md:flex-row 2xl:w-4/5 wide:w-3/4 putin:w-2/3" >
                    <div className="w-full md:w-1/5 flex flex-col sm:flex-row md:flex-col justify-between items-center md:items-start gap-2">
                        <div>
                            <div className="text-[2rem] text-main md:break-words lg:break-normal">{title}</div>
                            <div className="text-zinc-400 text-[1rem]">{timestamp}</div>
                        </div>
                        {link && <Link link={link} className="flex justify-between items-center w-2/3 sm:w-fit md:w-full md:mt-4 gap-2" newTab>
                            <span className="text-center">{linkLabel ?? "Github page"}</span>
                            <LinkImg fill="currentColor" className="h-[1em]" />
                        </Link>}
                    </div>

                    <div className={`grid grid-cols-[1fr] ${image && "md:grid-cols-[2fr_1fr]"} gap-2 flex-1`}>
                        <div className="text-[1.1rem] font-bold h-fit ">{text}</div>
                        {image && <div className="max-h-96 md:row-span-2 flex justify-center items-center overflow-hidden pl-2">
                            <img
                                loading="lazy"
                                className="object-contain w-3/5 md:w-auto max-w-full max-h-80 md:max-h-full rounded-md"
                                src={image}
                            />
                        </div>}
                        {technologies.length > 0 && <div
                            className="flex gap-2 flex-wrap mt-auto pt-4"
                        >
                            {technologies}
                        </div>}
                    </div>
                </div>
            </div>
            <div className="py-[0.05rem] w-11/12 my-10 bg-zinc-400"></div>
        </>
    );
};

export default Project;