import { useEffect } from 'react';

import Projects2 from './projects2';
import { WebPages } from './data_module';
import { WebApps } from './data_module';
import { PortfolioPages } from './data_module';




function ProjectsPage() {
       

    useEffect(() => {
        //update document title
        document.title = `Paul Onyebuchi: Skills`;
    }, []);


    return (
        <div className="projectsPage">
            <h2 className="title">Projects</h2>
            <div className="title_headingLine"></div>
            <p>Here's a list of exciting projects I've completed or currently working on.</p>
            <div className={"projectsPage_wrapper"}>
                <h3>Webpages ({WebPages.length})</h3>
                < div className="projectsPage_items webpages">
                    {WebPages.map((item) =>
                    <Projects2 
                        key={item.id} img={item.img} link={item.link} 
                        heading={item.heading}
                        desc={item.desc}
                        tech={item.tech}
                        link1={item.link1}
                        link2={item.link2}
                 />)}
                </div>
            </div>
            <div className="projectsPage_wrapper">
                <h3>Web Apps ({WebApps.length})</h3>
                <div className="projectsPage_items webapps">
                {WebApps.map((item) =>
                    <Projects2 
                        key={item.id} img={item.img} link={item.link} 
                        heading={item.heading}
                        desc={item.desc}
                        tech={item.tech}
                        link1={item.link1}
                        link2={item.link2}
                 />)}
                </div>
            </div>
            <div className="projectsPage_wrapper">
                <h3>Portfolios ({PortfolioPages.length})</h3>
                <div className="projectsPage_items portfolios">
                {PortfolioPages.map((item) =>
                    <Projects2 
                        key={item.id} img={item.img} link={item.link} 
                        heading={item.heading}
                        desc={item.desc}
                        tech={item.tech}
                        link1={item.link1}
                        link2={item.link2}
                 />)}
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage
