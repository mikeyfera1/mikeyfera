import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from "react";
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['M', 'i', 'c', 'h', 'a', 'e', 'l', ' ', 'F', 'e', 'r', 'a']
    const jobArray = ['C', 'o', 'm', 'p', 'u', 't', 'e', 'r', ' ', 'S', 'c', 'i', 'e', 'n', 'c', 'e', ' ', 'U', 'G']

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1> Hi, 
                <br /> I'm <AnimatedLetters letterClass={letterClass} 
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass} 
                strArray={jobArray}
                idx={22} />
                </h1>
                <h2> Aritificial Intelligence | Software Engineering </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>

        </div>
    );
}

export default Home