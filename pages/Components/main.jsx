import Navbar from './navbar'
import Cover from './cover'
import Projects from  './projects'
import Skills from './skills'
import Experience from './experience'
import About from './about'


const Main = () => {
    return(
        <div>
        <div>Myapp</div>
        <Navbar/> 
        <Cover/> 
        <About />
        <Projects/>
        <Skills />
        <Experience />
        
        </div>
    )
};


export default Main;