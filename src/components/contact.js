import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
 
const Contact = () => {
    const formSub = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm("5pjvlTppcIEH5wgji", "template_mosd3kh", formSub.current, "service_qcla1oa")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    }

    return (
        <div className="contact">
            <div className="contact_sideLine"></div>
            <div className="contact_wrapper">
                <div className="contact_left">
                    <h2>Let's Discuss Your Project!</h2>
                    <div className="contact_left_icons">
                        <a href="https://github.com/ecoderP" target="_blank" rel="noreferrer">
                            <AiOutlineGithub className="github-icon" />
                        </a>
                        <a href="https://linkedin.com/in/paulonyebuchi" target="_blank" rel="noreferrer">
                            <AiOutlineLinkedin className="linkedin-icon" />
                        </a>
                    </div>
                </div>
                <div className="contact_right">
                    <p><span>What's Your Story?</span> Get in touch. I am available for a fulltime role or freelancing if the right opportunity comes.</p>
                    <p>If you love my work, you may send a message to say 'Hi' or find me on social media, let's connect.</p>
                    <form ref={formSub} onSubmit={ handleSubmit }>
                        <input type="text" name="sender_name" placeholder="Enter your name" />
                        <input type="email" name="sender_email" placeholder="Email address" />
                        <input type="text" name="sender_subject" placeholder="Email subject" />
                        <textarea rows="8" name="message" placeholder="Type message here..." />
                        <button>Send</button> 
                    </form>
                </div>  
            </div>
        </div>
    )
}


export default Contact
