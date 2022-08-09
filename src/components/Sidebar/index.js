import { faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/LogoSub.png'
import './index.scss'

const Sidebar = () => {
    return(
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className = 'sub-logo' src={LogoSubtitle} alt="logo_subtitle" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/personal-portfolio">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/personal-portfolio/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="projects-link" to="/personal-portfolio/projects">
                <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/personal-portfolio/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target = "_blank" rel="noreferrer" 
                href="https://www.linkedin.com/in/shivammpanchal/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target = "_blank" rel="noreferrer" 
                href="https://github.com/klone007">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>

        </ul>
    </div>
    ) 

}

export default Sidebar