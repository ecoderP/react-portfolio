import { useRef } from "react";
import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';

const Contact = () => {
    const formSub = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    return (
        <div className="contact">
            <div className="contact_sideLine"></div>
            <div className="contact_wrapper">
                <div className="contact_left">
                    <h2>Let's Discuss Your Project!</h2>
                    <div className="contact_left_icons">
                        <AiOutlineGithub className="github-icon" />
                        <AiOutlineLinkedin className="linkedin-icon" />
                    </div>
                </div>
                <div className="contact_right">
                    <p><span>What's Your Story?</span> Get in touch. Always available for freelancing if the right opportunity comes.</p>
                    <form ref={formSub} onSubmit={ handleSubmit }>
                        <input type="text" name="sender_name" placeholder="Enter your name" />
                        <input type="email" name="sender_email" placeholder="Email address" />
                        <input type="text" name="subject" placeholder="Email subject" />
                        <textarea rows="8" name="message" placeholder="Type message here..." />
                        <button>Send</button> 
                    </form>
                </div>  
            </div>
        </div>
    )
}


export default Contact
