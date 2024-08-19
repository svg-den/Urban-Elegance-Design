import React from 'react';


const Footer = () => {
     return (
        <div className='footer-container'>
            <h1>Contact Us</h1>
        <form className='contact-form'>
            <input type='text' placeholder='Name' />
            <input type='email' placeholder='Email' />
            <textarea placeholder='Message' />
            <button type='submit'>Submit</button>
        </form>
        <div className='contact-info'>
            <h2>Address</h2>
            <p>123 Main St, City, State, ZIP</p>
            <h2>Phone Number</h2>
            <p>123-456-7890</p>
            <h2>Email</h2>
            <p>info@example.com</p>
        </div>
            
            <div className="social-icons">  
            <a href="#"><i className="fab fa-facebook-square"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
        </div>
    );
}


export default Footer;