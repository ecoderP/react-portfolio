


const Projects = ({img, link, heading, desc, tech, link1, link2}) =>  {
    
    const handleClick = () => {
        window.open(link1);
    }

    return (
        <div className="projects homePageComponent">
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
                <button onClick={handleClick}>See Live Project</button>
            </div>
            
            
            
        </div>
    )
}


export default Projects