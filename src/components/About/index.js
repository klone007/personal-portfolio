import { useEffect, useState } from 'react'
import {
  faSass,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone about">
          <div className="heading-about">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={"About me".split("")}
                idx={15}
              />
            </h1>
          </div>

          <div className="content">
            <p>
            I'm a very ambitious front-end developer searching for a 
            position at a reputable IT firm where I can use the 
            newest technology on difficult and varied projects.
            </p>
            <p align="LEFT">
            I have a low-key sense of confidence, am innately interested,
            and am always aiming to hone my skills one design challenge 
            at a time.
            </p>
            <p>
              If I need to define myself in one sentence that would be a , and tech-obsessed!!!
            </p>
          </div>
          
        </div>

        <div className="stage-cube-cont mob">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faSass} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About