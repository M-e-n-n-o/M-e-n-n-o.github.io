import React from 'react';

const Link = ({ children, link, className }) => {
    return (
        <a className={`px-2 py-1 bg-call hover:bg-call-hover text-white rounded-md ${className}`} href={link}>
            {children}
        </a>
    );
};

export default Link;