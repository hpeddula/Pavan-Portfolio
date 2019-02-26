import React from 'react'
import './header.scss';
export default function Header() {
    return (
        <React.Fragment>
            <div className="video-container">
                <iframe title="Introductory Video" className="video" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
            </div>
            <div className="text-center">
                <h1 className="name">Pavan Tummala</h1>
                <strong><code>Game Programming Portfolio</code></strong>
            </div>
        </React.Fragment>
    )
}
