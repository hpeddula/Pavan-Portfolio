import React, { Component } from 'react'
import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faKeyboard } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.scrollIntoView = this.scrollIntoView.bind(this);
    }
    scrollIntoView() {
        let ele = document.getElementsByClassName('box');
        ele[0].scrollIntoView({behavior: "smooth", block: "end"});
    }
    render() {
        return (
            <React.Fragment>
                <div className="text-center" ref={node => this.parentNode = node}>
                    <h1 className="name">Pavan Tummala</h1>
                    <FontAwesomeIcon icon={faGamepad} color="white" size="2x" className="gamePad" onClick={this.scrollIntoView} />
                    <FontAwesomeIcon icon={faKeyboard} color="white" size="2x" className="gamePad" onClick={this.scrollIntoView}/>
                    <p><code>Game Programming Portfolio</code></p>
                </div>
                <div className="video-container">
                    <div className="video">
                        <iframe width="560" height="349" title="Introductory Video" src="https://www.youtube.com/embed/W3DBpti5giI?rel=0&modestbranding=1"></iframe>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
