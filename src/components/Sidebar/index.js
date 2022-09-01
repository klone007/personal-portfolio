import { faEnvelope, faHome, faSuitcase, faUser, faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/LogoSub.png'
import './index.scss'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return(
    <div className='nav-bar'>
        <Link className='logo' to='/personal-portfolio/' onClick={() => setShowNav(false)}>
            <img src={LogoS} alt="logo" />
            <img className = 'sub-logo' src={LogoSubtitle} alt="logo_subtitle" />
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink exact="true" activeclassname="active" to="/personal-portfolio/"  onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/personal-portfolio/about"  onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="projects-link" to="/personal-portfolio/projects"  onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/personal-portfolio/contact"  onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
        </nav>
        <ul>
            <li>
                <a target = "_blank" rel="noreferrer" 
                href="https://www.linkedin.com/in/shivammpanchal/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" className="anchor-icon"/>
                </a>
            </li>
            <li>
                <a target = "_blank" rel="noreferrer" 
                href="https://github.com/klone007">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" className="anchor-icon"/>
                </a>
            </li>

        </ul>
        <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>
    ) 

}

export default Sidebar