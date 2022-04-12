import React from 'react';
import Link from "../Link";

const Technology = ({ name, link }) => {
    return (
        <>
            {link ? <Link className="text-[0.8rem]">{name}</Link> : <span className="px-2 py-1 bg-call text-white rounded-md text-[0.8rem]">
                {name}
            </span>}
        </>

    );
};

export default Technology;