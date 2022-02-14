import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_wrapper">
                <div className="footer_logo">
                    <Link to="/"> <h3>Paul</h3> </Link>
                </div>
                <div className="footer_links">
                    <Link to="/about">About Me</Link>
                    <Link to="/projects_page">Projects</Link>
                    <Link to="/contact">Contact Me</Link>
                </div>
                <div className="footer_socials">
                    <a href="https://github.com/ecoderP" target="_blank" rel='noreferrer'>
                        <AiOutlineGithub className="github-icon" />
                    </a>
                    <a href="https://linkedin.com/in/paulonyebuchi" target="_blank" rel='noreferrer'>
                        <AiOutlineLinkedin className="linkedin-icon" />
                    </a>
                </div>   
            </div>
        </div>
    )
}


export default Footer;
