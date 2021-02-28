import Navbar from './navbar'
import Cover from './cover'
import Projects from  './projects'
import Skills from './skills'
import Experience from './experience'


const Main = () => {
    return(
        <div>
        <div>Myapp</div>
        <Navbar/> 
        <Cover/> 
        <Skills />
        <Experience />
        <Projects/>
        </div>
    )
};


export default Main;