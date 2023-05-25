import './styles/informationcontainer.css'

import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'


const InformationContainer = () => {
    <section className='information'>
        <div className='info-card'>
            <AiFillPhone id='phone-icon'/>
            <div>
                <h3>Telefone</h3>
                <p>(11)99866-5165</p>
            </div>
        </div>
        <div className='info-card'>
            <AiOutlineMail id='email-icon'/>
            <div>
                <h3>E-mail</h3>
                <p>vhdc2017@gmail.com</p>
            </div>
        </div>
        <div className='info-card'>
            <AiFillEnvironment id='pin-icon'/>
            <div>
                <h3>Localização</h3>
                <p>Cotia / SP</p>
            </div>
        </div>
</section>
}
export default InformationContainer