import React from 'react';

const Contact = () => {
    return (
        <div id="contact" className="bg-gray-800 text-white py-8 px-4 min-h-screen">
            <h1 className="text-4xl text-center font-bold text-gray-100 mb-4 underline">
                Contact
            </h1>
            <div className="mt-10 max-w-6xl mx-auto flex flex-col md:flex-row items-start">
                {/* Address Information and Map */}
                <div className='w-full md:w-1/2 text-left p-6'>
                    <h2 className='text-3xl font-bold mb-4'>Urban Elegance Designs</h2>
                    <p className='text-lg mb-2'><i className="fas fa-map-marker-alt"></i> Raila Odinga Way, Nairobi, Kenya</p>
                    <p>P.O Box GPO 00100</p>
                    <h2 className='text-2xl font-semibold mt-4 mb-2'>Phone Number</h2>
                    <p>(+254) 707 825 189</p>
                    <h2 className='text-2xl font-semibold mt-4 mb-2'>Email</h2>
                    <p>info@urbanelegance.com</p>

                    {/* Embedded Google Map */}
                    <div className="mt-6">
                        <iframe
                            title="Urban Elegance Designs Headquarters"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.302179831168!2d36.8129434073525!3d-1.292065641351342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a9c8e3f747f%3A0xb10f56c9a8b07b3e!2sRaila%20Odinga%20Way%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1692806930463!5m2!1sen!2ske"
                            width="100%"
                            height="300"
                            frameBorder="0"
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        ></iframe>
                    </div>
                </div>

                <div className="w-full md:w-1/2 bg-gray-800 text-white p-8 rounded-md shadow-lg md:ml-10">
                    <h2 className="text-3xl font-bold mb-6 text-center">Email Us</h2>
                    <p className="py-6 text-left md:text-left text-xl mb-4">
                        Submit the form below to get in touch with us
                    </p>
                    <form 
                        action="https://getform.io/f/zbxdrvzb"
                        method="POST"
                        className='space-y-4'
                    >
                        <div className="flex space-x-4">
                            <input 
                                type='text' 
                                name='first-name'
                                placeholder='First Name' 
                                className='w-1/2 p-3 rounded bg-gray-700 text-white placeholder-gray-400' 
                            />
                            <input 
                                type='text' 
                                name='last-name'
                                placeholder='Last Name' 
                                className='w-1/2 p-3 rounded bg-gray-700 text-white placeholder-gray-400' 
                            />
                        </div>
                        <div className="flex space-x-4">
                            <input 
                                type='email'
                                name='email' 
                                placeholder='Email' 
                                className='w-1/2 p-3 rounded bg-gray-700 text-white placeholder-gray-400' 
                            />
                            <input 
                                type='text'
                                name='phone' 
                                placeholder='Phone' 
                                className='w-1/2 p-3 rounded bg-gray-700 text-white placeholder-gray-400' 
                            />
                        </div>
                        <textarea 
                            name='message'
                            placeholder='Message' 
                            rows='4'
                            className='w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 py-9' 
                        />
                        <button 
                            type='submit' 
                            className="w-full py-3 bg-gradient-to-b from-cyan-500 
                            to-blue-700 text-white font-bold rounded hover:scale-110 transition duration-300">
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>
            <p className="p-4 flex justify-center text-gray-500">Copyright 2024. All Rights Reserved</p>
        </div>
    );
}

export default Contact;


