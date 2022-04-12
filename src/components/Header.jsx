import React from 'react';

const Header = ({ children }) => {
    return (
        <header className="w-full bg-main text-center py-4">
            {children}
        </header>
    );
};

export default Header;