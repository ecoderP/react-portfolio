import Html from "../../src/img/html.png";
import Js from "../../src/img/js.png";
import Reactjs from "../../src/img/react.png";
import Sass from "../../src/img/sass.png";
import Bootstrap from "../../src/img/bootstrap.png";
import Figma from "../../src/img/figma.png";
import Photoshop from "../../src/img/photoshop.png";
import Wordpress from "../../src/img/wordpress.png";
import Analytics from "../../src/img/google-analytics.png";

const Skills = () => {
    return (
            <div className="skills">
                <h2 className="title">Skills</h2>
                <div className="title_headingLine"></div>
                <p>I have experience working with:</p>
                <div className="skills_block">
                    <h3>Tech. / Languages</h3>
                    <div className="skills_wrapper tech">
                        <div className="skills_holder">
                            <div className="skills_holder_item">
                                <img 
                                src={Html} 
                                alt="Html and CSS"
                                />
                            </div>
                        </div>
                        
                        <div className="skills_holder">
                            <div className="skills_holder_item">
                                <img 
                                src={Js} 
                                alt="Javascript"
                                />
                            </div>
                        </div>
                        
                        <div className="skills_holder">
                            <div className="skills_holder_item">
                                <img 
                                src={Reactjs} 
                                alt="React Js"
                                />
                            </div>
                        </div>
                        
                        <div className="skills_holder">
                            <div className="skills_holder_item">
                                <img 
                                src={Sass} 
                                alt="Sass"
                                />
                            </div>
                        </div>
                        
                        <div className="skills_holder">
                            <div className="skills_holder_item">
                                <img 
                                src={Bootstrap} 
                                alt="Boostrap v5"
                                />
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="skills_block">
                    <h3>Other tools:</h3>
                    <div className="skills_wrapper design">
                        <div className="skills_holder">
                            <div className="skills_holder_item">
                                <img 
                                src={Figma} 
                                alt="Figma"
                                />
                            </div>
                        </div>

                        <div className="skills_holder">
                            <div className="skills_holder_item">
                                <img 
                                src={Photoshop} 
                                alt="Photoshop"
                                />
                            </div>
                        </div>
                        
                        <div className="skills_holder">
                            <div className="skills_holder_item">
                                <img 
                                src={Wordpress} 
                                alt="Wordpress"
                                />
                            </div>
                        </div>
                        
                        <div className="skills_holder">
                            <div className="skills_holder_item">
                                <img 
                                src={Analytics} 
                                alt="Google Analytics"
                                />
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        
    )
}

export default Skills