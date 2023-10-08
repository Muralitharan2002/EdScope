import React from 'react'
import '../Body/Styles/contactus.css'

function Contactus() {
    return (
        <div id='Categories-section' className='contact-container'>
            <div className='contact'>
                <div className="contact-box">
                    <p className="contact-title">Subscribe for Get Update <br />
                        Every New Courses</p>
                    <p className="contact-text">
                        You will get the latest notifications about the latest school news
                    </p>
                    <div className="contact-input">
                        <input type="email" placeholder='Enter your email address' className='contact-mail' />
                        <button className="contact-btn" type='submit'>Subscribe</button>
                    </div>

                </div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>

            </div>
        </div>
    )
}

export default Contactus