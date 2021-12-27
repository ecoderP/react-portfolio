import Header from "../../src/img/header.png";


const Intro = () => {
    return (
        <div className = "intro">
            <div className = "intro_left">
                <div className = "intro_left_wrapper">
                    <h2 className = "intro_left_welcome">PAUL ONYEBUCHI </h2>
                    <h3 className = "intro_left_name"> FRONTEND DEVELOPER</h3>
                    <div className = "intro_expertise">
                        <div className="intro_expertise_wrapper">
                           
                        </div>
                    </div>
                    <p className="intro_description">A Frontend Developer with a focus on responsive design 
                        and excellent UI experiences</p>
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