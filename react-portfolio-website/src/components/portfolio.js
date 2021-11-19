import Projects from './projects';
import {SampleProjects} from './data_module';



const Portfolio = () => {
    return (
            <div className="portfolio">
                <h2 className="title">Portfolio</h2>
                <div className="title_headingLine"></div>
                <div className="portfolio_wrapper">
                    {SampleProjects.map((item) => (
                    <Projects key={item.id} img={item.img} link={item.link} />
                    ))}
                    
                    
                </div>
                <button>See more projects</button>
                <div className="horizontalLine"></div>
            </div>
        
    )
}

export default Portfolio