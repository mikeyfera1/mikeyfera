import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPython, faCss3, faGitAlt, faHtml5, faJava, faReact, } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import './index.scss';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')


    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [])


    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                Hello! My name is Michael Fera, and I am a Computer Science student 
                at the University of Minnesota Twin Cities. I am passionate about 
                software engineering and am actively seeking an internship to apply 
                my knowledge and skills in a professional setting.   
                </p>
                <p>
                I am set to graduate in May 2026 with a 3.80 GPA out of 4.00. I have 
                developed proficiency in programming languages such as Java, Python, 
                JavaScript, HTML/CSS, SQL, and more. My experience in developing a 
                Minefield game and creating the front end of Gopher Grades Chrome 
                extension demonstrates my problem-solving skills. I have also created 
                a Discord Bot for a Football League, which showcases my proficiency in 
                API integration using Node.js. I recently completed CS50's Introduction
                to Computer Science from Harvard University, which helped me improve my
                skills in abstraction, data structures, algorithms, security, and 
                software engineering.
                </p>
                <p>
                Apart from coding, I enjoy playing video games and cheering for my favorite 
                sports teams. I always bring enthusiasm and dedication to every aspect of my 
                life. If you want to connect, let's explore the exciting intersection of technology, 
                humor, and shared interests!
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faPython} color="#3c6a9a" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJava} color="#e9342e" />
                    </div>
                    <div className='face6'>
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