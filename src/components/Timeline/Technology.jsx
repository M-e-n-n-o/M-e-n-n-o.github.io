import React from 'react';
import Link from "../Link";

const Technology = ({ name, link }) => {
    return (
        <>
            {link ? <Link className="text-[0.8rem] h-8 flex items-center justify-center">{name}</Link> : <span className="px-2 py-1 h-8 bg-call text-white rounded-md text-[0.8rem] flex items-center justify-center">
                {name}
            </span>}
        </>

    );
};

export default Technology;