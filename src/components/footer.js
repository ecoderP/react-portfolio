import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_wrapper">
                <div className="footer_logo">
                    <h3>Paul</h3>
                </div>
                <div className="footer_links">
                    <Link to="/about">About Me</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/contact">Contact Me</Link>
                </div>
                <div className="footer_socials">
                    <AiOutlineGithub className="github-icon" />
                    <AiOutlineLinkedin className="linkedin-icon" />
                </div>   
            </div>
        </div>
    )
}


export default Footer;
