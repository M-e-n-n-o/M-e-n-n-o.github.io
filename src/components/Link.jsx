import React from 'react';

const Link = ({ children, link, newTab, className }) => {
    return (
        <a className={`px-2 py-1 bg-call hover:bg-call-hover text-white rounded-md ${className}`} href={link} target={newTab && "_blank"}>
            {children}
        </a>
    );
};

export default Link;