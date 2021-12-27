import Me from "../../src/img/me-3.png";


const About = () => {
    

    return (
        <div className="about">
            <div className="about_wrapper">
                <div className="about_left">
                    <div className="about_card bg"></div>
                    <div className="about_card img">
                        <img 
                          src={Me} 
                          alt="Paul Onyebuchi"  
                          className="about_img"
                        />
                    </div>
                </div>
                <div className="about_right">
                    <h1 className="title">About Me</h1>
                    <div className="title_headingLine"></div>
                    <p>I'm a Frontend Developer looking for exciting new opportunities and new challenges. I value simple content structure. I like to code things from scratch and enjoy bringing ideas 
                        to live on the browser. When coding, I focus on writing accessible HTML and clean Javascript, using modern CSS practices. Also, I find I'm able to communicate complex ideas to non-tecnical audiences.
                    </p>
                    <p>When I'm not working, you'll probably catch me seeing a new movie.</p>
                </div>
            </div>
        </div>
        
    )
}

export default About