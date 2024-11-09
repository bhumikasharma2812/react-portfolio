import React from 'react'
import './Contact.css'
import email from '../../assets/email.png'
import location from '../../assets/location (1).png'
import call from '../../assets/telephone.png'

const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact-title">
                <h1>Get In Touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>Reach out with any questions or just to say hi! We’re ready to connect and assist in any way we can.

                    </p>

                </div>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={email} alt="" /><p>28bhumikasharma@gmail.com</p>

                    </div>
                    <div className="contact-detail">
                        <img src={location}alt="" /><p>New Delhi</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call} alt="" /><p>7392874657</p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Contact
