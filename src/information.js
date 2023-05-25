import './styles/informationcontainer.css'

import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'

const Information = () => {
    return (
        <section className='information'>
        <div className='info-card'>
            <AiFillPhone className='phone-icon'/>
            <div>
                <h3>Telefone</h3>
                <p>(11)99866-5165</p>
            </div>
        </div>
        <div className='info-card'>
            <AiOutlineMail className='email-icon'/>
            <div>
                <h3>E-mail</h3>
                <p>vhdc2017@gmail.com</p>
            </div>
        </div>
        <div className='info-card'>
            <AiFillEnvironment className='pin-icon'/>
            <div>
                <h3>Localização</h3>
                <p>Cotia / SP</p>
            </div>
        </div>
</section>
    )
}

export default Information