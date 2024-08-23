import React from "react";
import SocialLinks from './SocialLinks';

function Footer() {
    return (
        <div>
            <div className='contact-info text-center mb-8'>
                <h2 className='text-2xl font-semibold mb-2'>Address</h2>
                <p>Raila Odinga Ln, Nairobi, KE, 00100</p>
                <h2 className='text-2xl font-semibold mt-4 mb-2'>Phone Number</h2>
                <p>(+254) 707 825 189</p>
                <h2 className='text-2xl font-semibold mt-4 mb-2'>Email</h2>
                <p>info@urbanelegance.com</p>
            </div>
            
         <SocialLinks />
            <p className="p-4 flex justify-center text-gray-500">Copyright 2024. All Rights Reserved</p>
        </div>
    );
}

export default Footer;


