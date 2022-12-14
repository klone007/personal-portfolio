import "./index.scss"
import React, { useState, useEffect } from 'react'
import LogoTitle from '../../assets/images/logo-s.png'
import {Link} from 'react-router-dom'
import AnimatedLetters from "../AnimatedLetters"
// import Logo from "./Logo"
import LogoS from '../../assets/images/logo-s.png'
import Loader from "react-loaders"

const Home = () =>{
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = "hivam".split("")
    const jobArray = "web developer".split("")


    useEffect(() => {
      return setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)
    }, [])

  return (
    <>
      <div className="container home-page">
            <div className = "text-zone2 mobile-version">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i</span> 
                <span className={`${letterClass} _12`}>,</span>    
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'</span>
                <span className={`${letterClass} _14`}>m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass} 
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass} 
                strArray={jobArray}
                idx={22} />
              
                </h1>
                <h2>Frontend Developer / </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>

      {/* <Logo /> */}
      <img className="solid-logo" src={LogoS} />
      
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default Home