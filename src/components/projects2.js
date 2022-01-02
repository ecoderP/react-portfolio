



const Projects2 = ({img, link, heading, desc, tech, link1, link2}) =>  {
    
    const handleClick = () => {
        window.open(link1);
    };
    const handleClick2 = () => {
        window.open(link2);
    }

    return (
        <div className="projects projectsPageComponent">
            <div className="projects_header">
                <div className="projects_header_circle"></div>
                <div className="projects_header_circle"></div>
                <div className="projects_header_circle"></div>
            </div>
            <div className="img_wrapper" href={link} target="_blank" rel="noreferrer">
                <img src={img} alt=" " className="projects_image" />
            </div>
            <div className="projects_Desc">
                <h5>{heading}</h5>
                <p>{desc}</p>
                <h6 className="tech">{tech}</h6>
                <div>
                <button onClick={handleClick}>See Site</button>
                <button onClick={handleClick2}>Source Code</button>
                </div>
                
            </div>
            
            
            
        </div>
    )
}


export default Projects2