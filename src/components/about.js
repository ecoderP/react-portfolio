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
                    <p>Hi, welcome to my portfolio website. I'm Paul Onyebuchi, a self-taught Junior Front-End Developer with a focus on responsive design and excellent UI experiences.
                    </p>
                    <p>I started learning to code because I wanted to be able to implement custom styles to the wordpress websites I was building for small and medium sized businesses, but soon discovered the more I learnt, the more I wanted to know. 
                    </p>
                    <p>Since making the decision to learn to code
                         in 2020, I have achieved high-level skills in HTML, CSS & SASS, with intermidiate-level skills in Javascript and React. Other tools I use include Git, Photoshop, Figma, npm  and some others you'll find in the skills section below.
                    </p>
                    <p>When I'm not coding, you'll probably find me in class teaching computer science and coding fundamentals to a bunch of college students, or just out with friends relaxing or seeing a movie.</p>
                </div>
            </div>
        </div>
        
    )
}

export default About