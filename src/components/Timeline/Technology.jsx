import React from 'react';

const Technology = ({ name, link }) => {
    return (
        <>
            {link ? <a className="px-2 py-1 bg-call hover:bg-call-hover text-white rounded-md text-[0.8rem]" href={link}>
                {name}
            </a> : <span className="px-2 py-1 bg-call text-white rounded-md text-[0.8rem]">
                {name}
            </span>}
        </>

    );
};

export default Technology;