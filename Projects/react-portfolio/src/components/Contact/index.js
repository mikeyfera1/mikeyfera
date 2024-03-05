import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()


    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_tkfnpz7',
                'template_sdqmo3a',
                refForm.current,
                {publicKey: 'SXXEw1-aLz-3W96YD',
            })
            .then (
                () => {
                alert('Message successfully sent!')
                window.location.reload(false)
                },
                () => {
                    alert('Failed to send message, please try again')
                }
            )
    }
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass = {letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                        idx={15}
                        />
                    </h1>
                    <p>
                    If you are interested in learning more about my experiences, or discussing potential 
                    collaborations, please feel free to reach out! I am always open to connecting with like-minded 
                    individuals and organizations. To contact me, simply use the form below. Whether you are a 
                    fellow enthusiast, a potential collaborator, or just someone passionate about technology and 
                    innovation, I look forward to hearing from you and discovering the possibilities of future 
                    endeavors together. Let's connect and embark on a journey of shared interests and exciting projects!
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type='text' name='subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Michael Fera,
                    <br />
                    United States,
                    <br />
                    Pittsburgh PA, 15241 <br />
                    <span>mikeyfera1@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[40.440624, -79.995888]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[40.440624, -79.995888]}>
                            <Popup>Pittsburgh, Pennsylvania</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact