import { useState, useEffect } from 'react';

import Projects2 from './projects2';
import { WebPages } from './data_module';
import { WebApps } from './data_module';
import { PortfolioPages } from './data_module';




function ProjectsPage() {
    //const [activeClass, setActiveClass] = useState("");
    
    useEffect(() => {
        //update document title
        document.title = 'Paul Onyebuchi: Projects';
    }, []);


    return (
        <div className="projectsPage">
            <h2 className="title">Projects</h2>
            <div className="title_headingLine"></div>
            <p>Most of the projects I've built so far are projects 
                I embark on to try out a new tech I'm learning, with a bunch of freelance projects</p>
            <div className={"projectsPage_wrapper"}>
                <h3>Webpages</h3>
                < div className="projectsPage_webpages">
                    {WebPages.map((item) =>
                    <Projects2 
                        key={item.id} img={item.img} link={item.link} 
                        heading={item.heading}
                        desc={item.desc}
                        tech={item.tech}
                 />)}
                </div>
            </div>
            <div className="projectsPage_wrapper">
                <h3>Web Apps</h3>
                <div className="projectsPage_webpapps">
                    
                </div>
            </div>
            <div className="projectsPage_wrapper">
                <h3>Portfolios</h3>
                <div className="projectsPage_portfolios">
                    
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage
