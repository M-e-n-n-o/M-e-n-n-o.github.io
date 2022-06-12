import React from 'react';
import Header from "../components/Header";

const Contact = () => {
    return (
        <div className='flex flex-col items-center'>
            <Header>
                <h2 className="text-[4rem] text-white">Contact</h2>
            </Header>
            <div className="text-[1.5rem] w-3/4 flex-1 flex items-center py-4 sm:max-w-fit">
                <br />
                Let's have a talk!<br /><br />

                ✉  : mennobil02@gmail.com<br />
                ☏  : +31 6 47 27 65 69
                <br /><br />
            </div>
        </div>
    );
};

export default Contact;