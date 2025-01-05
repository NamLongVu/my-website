
import NavigationBar from './components/Header/NavigationBar.jsx'
import Intro from './components/Header/Intro.jsx'
import About from './components/Body/About.jsx'
import Education from './components/Body/Education.jsx'
import Project from './components/Body/Project.jsx'
import Footer from './components/Footer/Footer.jsx'
import ScrollToTop from "react-scroll-to-top";
import Contact from "./components/Body/Contact.jsx";


const App = () => {
    return (
        <div className='overflow-hidden'>
            <NavigationBar/>
            <Intro/>
            <About/>
            <Education/>
            <Project/>
            <Contact/>
            <Footer/>
            <ScrollToTop smooth color='white' style={{backgroundColor: '#3BB2F6', display:'flex',alignItems:'center', justifyContent:'center'}}/>
        </div>
    )
}

export default App