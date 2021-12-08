import { descData } from "./prodDescData_module";
import ProjdescriptionModule from "./projdescription_module";

const Projects = ({img, link}) =>  {
    return (
        <div className="projects">
            <div className="projects_header">
                <div className="projects_header_circle"></div>
                <div className="projects_header_circle"></div>
                <div className="projects_header_circle"></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt=" " className="projects_image" />
            </a>
            {descData.map((props) => (
                <ProjdescriptionModule key={props.id} heading="props.heading" desc="props.desc" tech="props.tech" link1="props.link1" link2="props.link2" />
            ))}
            
        </div>
    )
}


export default Projects