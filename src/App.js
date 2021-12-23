import Navbar from './components/navbar';
import Intro from './components/intro';
import About from './components/about';
import Skills from './components/skills';
import Portfolio from './components/portfolio';
import ProjectsPage from './components/projects_page';
import Contact from './components/contact';
import Footer from './components/footer';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';



const App = () => {
    return (
        
            <div>
                <Navbar />
                
                    <Routes>
                        <Route path="/" exact element={
                            <>
                                <Intro />
                                <About/>
                                <Skills />
                                <Portfolio />
                                <Contact />
                                </>
                            } />
                        <Route path="/Intro" caseSensitive={false} element={<Intro />} />
                        <Route path="/About" caseSensitive={false} element={<About />} />
                        <Route path="/Skills" caseSensitive={false} element={<Skills />} />
                        <Route path="/Portfolio" caseSensitive={false} element={<Portfolio />} />
                        <Route path="/Contact" caseSensitive={false} element={<Contact />} />
                        <Route path="/Projects_page" caseSensitive={false} element={<ProjectsPage />} />
                    </Routes>
                
                <Footer />
            </div>
        
    
)
};

export default App;