import Navbar from './components/navbar';
import Intro from './components/intro';
import About from './components/about';
import Skills from './components/skills';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Footer from './components/footer';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <div className="content">
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
                    </Routes>
                <Footer />
                </div>
            </div>
        </Router>
    
)
};

export default App;