import Projects from './projects';
import {SampleProjects} from './data_module';

import { Link } from 'react-router-dom';


const Portfolio = () => {

    return (
            <div className="portfolio">
                <h2 className="title">Portfolio</h2>
                <div className="title_headingLine"></div>
                <p>You'll find some of my completed or ongoing projects below. Click on the 'see more pprojects' button to view more.</p>
                <div className="portfolio_wrapper">
                    {SampleProjects.map((item) => (
                    <Projects key={item.id} img={item.img} link={item.link} 
                        heading={item.heading}
                        desc={item.desc}
                        tech={item.tech}
                        link1={item.link1}
                     />
                    ))}
                    
                </div>
                <Link 
                    className="btn"
                    to="/projects_page"
                    role="button"
                    >See more projects</Link>
                <div className="horizontalLine"></div>
            </div>
        
    )
}

export default Portfolio