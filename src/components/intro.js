import Header from "../../src/img/header.png";


const Intro = () => {
    return (
        <div className = "intro">
            <div className = "intro_left">
                <div className = "intro_left_wrapper">
                    <h2 className = "intro_left_welcome">Hi, I'm 
                        <span className = "intro_left_name"> Paul</span>
                    </h2>
                    <div className = "intro_expertise">
                        <div className="intro_expertise_wrapper">
                            <div className="intro_expertise_item">Frontend Developer</div>
                            <div className="intro_expertise_item">Digital Marketer</div>
                            <div className="intro_expertise_item">Digital Marketer</div>
                        </div>
                    </div>
                    <p className="intro_description">CSS || Javascript || React</p>
                </div> 
            </div>
            <div className = "intro_right">
                <div className = "intro_right_wrapper">
                    <img src={Header} alt="ecoderP" className="intro_right_img" />
                </div>
            </div>
        </div>
    )
}

export default Intro