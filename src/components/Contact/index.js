
import { useEffect, useState, useRef } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_0asnv17',
        'template_o8em2y9',
        refForm.current,
        '_Ig7oRfsW-5mGuyO_'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <div className="heading">
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={"Contact me".split("")}
                  idx={15}
                />
              </h1>
          </div>
 
          <div className="para">
            <p>
              I am interested in freelance opportunities - especially ambitious or
              large projects. However, if you have other request or question,
              don't hesitate to contact me using below form either.
            </p>
          </div>
  
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
        Shivam Panchal,
        <br />
        Canada <br />
        <span>shivammpanchal@gmail.com</span>

      </div>
      <div className="map-wrap">
          <MapContainer center={[43.651070, -79.347015]} zoom={9}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
              <Marker position={[43.763700, -79.250540]}>
                 <Popup>Shivam lives here :)</Popup>
              </Marker>
          </MapContainer>
      </div>
        
      </div>
      

      

      <Loader type="pacman" />
    </>
  )
}

export default Contact


