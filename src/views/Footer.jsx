import React from 'react';
import Link from "../components/Link";
import CvPDF from "../res/static/CV.pdf";

const FooterLinks = [
    { name: "Github", link: "https://github.com/M-e-n-n-o" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/menno-bil-055100201/" },
    { name: "CV", link: CvPDF }
];

const Footer = () => {
    return (
        <footer className="bg-main p-4 text-white flex flex-col lg:flex-row lg:items-center md:justify-between">
            <div className="flex items-center gap-4 flex-wrap">
                {FooterLinks.map((link, i) =>
                    <Link
                        key={i}
                        className="text-white py-0 px-0 hover:text-gray-300 bg-transparent hover:bg-transparent"
                        link={link.link}
                    >
                        {link.name}
                    </Link>
                )}
            </div>
            <div className="mt-4 lg:mt-0">
                ©2022 Menno Bil
            </div>
        </footer>
    );
};

export default Footer;