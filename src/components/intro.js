import Header from "../../src/img/header.png";


const Intro = () => {
    return (
        <div className = "intro">
            <div className = "intro_left">
                <div className = "intro_left_wrapper">
                    <h2 className = "intro_left_name">PAUL ONYEBUCHI </h2>
                    <h3 className = "intro_left_skill"> FRONTEND DEVELOPER</h3>
                    
                    <p className="intro_description">With a focus on responsive design 
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