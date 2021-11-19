 import { BiMenuAltRight } from 'react-icons/bi';
 import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    return (
        <div className="nav">
            <div className="nav_logo">
                <a href="/">
                    <h1 className="nav_logo_img">Logo</h1>
                </a>
            </div>
            <div className="navlinks">
                <ul className="navlinks_list">
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Skills</a>
                    </li>
                    <li>
                        <a href="/">Portfolio</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
            </div>
            <div>
                <BiMenuAltRight />
                <AiOutlineClose />
            </div>
        </div>
    )
}



export default Navbar