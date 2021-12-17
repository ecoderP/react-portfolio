



const Projects2 = ({img, link, heading, desc, tech, link1, link2}) =>  {
    

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
                <button>See Live Project</button>
            </div>
            
            
            
        </div>
    )
}


export default Projects2