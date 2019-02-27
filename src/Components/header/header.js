import React from 'react'
import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
export default function Header() {
    return (
        <React.Fragment>
            <div className="video-container">
                <iframe title="Introductory Video" className="video" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
            </div>
            <div className="text-center">
                <h1 className="name">Pavan Tummala</h1>
                <FontAwesomeIcon icon={faGamepad} color="white" size="2x" /> 
                <p><code>Game Programming Portfolio</code></p>
            </div>
        </React.Fragment>
    )
}
