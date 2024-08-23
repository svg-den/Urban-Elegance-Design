import React from 'react';

const Contact = () => {
    return (
        <div id="contact" className='footer-container bg-gray-800 text-white py-8 px-4'>
            <h1 className='text-3xl font-bold text-center mb-6'>Contact Us</h1>
            <p className="py-6">Submit the form below to get in touch with us</p>

            <form 
                action="https://getform.io/f/zbxdrvzb"
                method="POST" 
                className='contact-form max-w-lg mx-auto mb-8'
            >
                <input 
                    type='text' 
                    name='name'
                    placeholder='Enter your name' 
                    className='w-full mb-4 p-3 rounded bg-gray-700 text-white placeholder-gray-400' 
                />
                <input 
                    type='email'
                    name='email' 
                    placeholder='Enter your email' 
                    className='w-full mb-4 p-3 rounded bg-gray-700 text-white placeholder-gray-400' 
                />
                <textarea 
                    name='message'
                    placeholder='Enter your message' 
                    rows='8'
                    className='w-full mb-4 p-3 rounded bg-gray-700 text-white placeholder-gray-400' 
                />
                <button 
                    type='submit' 
                    className="my-4 text-white bg-gradient-to-b from-cyan-500 
                    to-blue-700 px-6 py-3 mx-auto flex
                    items-center rounded-md hover:scale-110 duration-300">
                
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Contact;
