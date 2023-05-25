import AboutContainer from './AboutContainer';
import TechnologiesContainer from "./TechnologiesContainer";
import ProjectsContainer from "./ProjectsContainer";

import './styles/maincontent.css';

const MainContent = () => {
    return (
    <main className='main-content'>
        <AboutContainer/>
        <TechnologiesContainer/>
        <ProjectsContainer/>
    </main>
    ) 
}
export default MainContent