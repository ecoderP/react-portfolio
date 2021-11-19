import Navbar from './components/navbar';
import Intro from './components/intro';
import About from './components/about';
import Skills from './components/skills';
import Portfolio from './components/portfolio';
import Contact from './components/contact';



const App = () => {
    return (
    <div>
        <Navbar />
        <Intro />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
    </div>
)
};

export default App;