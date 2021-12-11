 import React, {useState } from 'react';
 import { BiMenuAltRight } from 'react-icons/bi';
 import { AiOutlineClose } from 'react-icons/ai';

 import { Link } from 'react-router-dom';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileNav = () => setClick(false);


    return (
        <>
            <div className="nav">
                <div className="nav_logo">
                    <Link to="/">
                        <h1 className="nav_logo_img">Logo</h1>
                    </Link>
                </div>
                <div className="navlinks">
                    <ul className="navlinks_list">
                    <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/skills">Skills</Link>
                        </li>
                        <li>
                            <Link to="/projects_page">Projects</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="mobileMenu_toggle" onClick={handleClick}>
                    {click ? (
                        <AiOutlineClose className="nav_mobileMenu_toggle_close" />
                    ) : (
                        <BiMenuAltRight className=".mobileMenu_toggle_open" />
                    )}
                </div>
            </div>
            <div className={click ? "mobile_nav active" : "mobile_nav"}>
            <ul className="mobile_navlinks_list">
                        <li onClick={closeMobileNav}>
                            <Link to="/">Home</Link>
                        </li>
                        <li onClick={closeMobileNav}>
                            <Link to="/about">About</Link>
                        </li>
                        <li onClick={closeMobileNav}>
                            <Link to="/skills">Skills</Link>
                        </li>
                        <li onClick={closeMobileNav}>
                            <Link to="/portfolio">Portfolio</Link>
                        </li>
                        <li onClick={closeMobileNav}>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
            </div>
        </>
    )
}



export default Navbar