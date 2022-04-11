import React from 'react';

const Period = ({ title, children, hide = false }) => {

    return (
        <>
            {(!hide && (children.length > 0 || children.type)) && <>
                <div className="text-[3rem] text-main mb-4">{title}</div>
                <>
                    {children}
                </>
            </>}
        </>
    );
};

export default Period;