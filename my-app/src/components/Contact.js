import React from 'react';

const Contact = () => {
    return (
        <div id="contact" className='footer-container bg-gray-800 text-white py-8 px-4'>
            <h1 className='text-3xl font-bold text-center mb-6'>Contact Us</h1>
            <form className='contact-form max-w-lg mx-auto mb-8'>
                <input 
                    type='text' 
                    placeholder='Name' 
                    className='w-full mb-4 p-3 rounded bg-gray-700 text-white placeholder-gray-400' 
                />
                <input 
                    type='email' 
                    placeholder='Email' 
                    className='w-full mb-4 p-3 rounded bg-gray-700 text-white placeholder-gray-400' 
                />
                <textarea 
                    placeholder='Message' 
                    className='w-full mb-4 p-3 rounded bg-gray-700 text-white placeholder-gray-400' 
                />
                <button 
                    type='submit' 
                    className='w-full py-3 bg-blue-600 hover:bg-blue-700 rounded font-bold text-white'
                >
                    Submit
                </button>
            </form>
            <div className='contact-info text-center mb-8'>
                <h2 className='text-2xl font-semibold mb-2'>Address</h2>
                <p>Raila Odinga Ln, Nairobi, KE, 00100</p>
                <h2 className='text-2xl font-semibold mt-4 mb-2'>Phone Number</h2>
                <p>113-456-7890</p>
                <h2 className='text-2xl font-semibold mt-4 mb-2'>Email</h2>
                <p>info@urbanelegance.com</p>
            </div>
            
            <div className="social-icons flex justify-center space-x-4">
                <a href="https://www.facebook.com/yourpage" className="text-2xl hover:text-blue-500" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-square"></i>
                </a>
                <a href="https://twitter.com/yourprofile" className="text-2xl hover:text-blue-300" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/yourprofile" className="text-2xl hover:text-pink-500" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/yourprofile" className="text-2xl hover:text-blue-700" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://wa.me/yourwhatsapplink" className="text-2xl hover:text-green-500" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-whatsapp"></i>
                </a>
            </div>
            <p className="p-4 flex justify-center text-gray-500">Copyright 2024. All Rights Reserved</p>
        </div>
    );
}

export default Contact;
