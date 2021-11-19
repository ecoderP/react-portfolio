

const Projdescription_module = ({heading, desc, tech, link1, link2}) => {
    return (
        <div className="desc">
            <h5 className="desc_heading">{heading}</h5>
            <p className="desc_text">{desc}</p>
            <p className="desc_tech">{tech}</p>
            <div className="btn-els">
                <a href={link1} target="_blank" rel="noreferrer">Live page</a>
                <a href={link2} target="_blank" rel="noreferrer">Github</a>    
            </div>            
        </div>
    )
}


export default Projdescription_module