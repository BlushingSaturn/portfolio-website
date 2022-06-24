import './Footer.css';

import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';


function Footer() {
    return (
        <div className='footer'>
            <div className='socials'>
                <a href='https://twitter.com/VictoryScreech9' target='_blank' rel='noopener noreferrer'><FaTwitter size={30}/></a>
                <a href='https://github.com/BlushingSaturn' target='_blank' rel='noopener noreferrer'><FaGithub size={30}/></a>
                <a href='https://www.linkedin.com/in/summer-burgess-167262230/' target='_blank' rel='noopener noreferrer'><FaLinkedin size={30}/></a>
            </div>
            <div className='copyright'>
                &#9400; 2022 Summer Burgess
            </div>
        </div>
    );
}


export default Footer;