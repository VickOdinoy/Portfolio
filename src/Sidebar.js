import SocialNetworks from './SocialNetworks';

import Avatar from './img/vict.jpg'

import Information from './information';



import './styles/Sidebar.css';


const Sidebar = () => {
    return(
    <aside className="sidebar">
        <img src={Avatar} alt="Victor Henrique"/>
        <p className="title">Desenvolvedor</p>
        <SocialNetworks />
        <Information />
        <a href="https://drive.google.com/file/d/1c3MEWaLoV7A8_B05eVR_O9o0Zuz9sUJG/view?usp=share_link" className="btn">
            Download curriculo
        </a>
    </aside>
    )
}
export default Sidebar