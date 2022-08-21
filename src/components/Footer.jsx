import '../styles/footer.css'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
    return(
        <div id='footer'>
            <p id='footer-text'>Made by Ohm Patil<a id='footer-logo' href='https://github.com/OhmPatil' target='_blank' rel='noopener noreferrer'><FaGithub size={'1.5rem'}/></a></p>
        </div>
    )
}

export default Footer