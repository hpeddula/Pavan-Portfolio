import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './home.scss';
import '../header/header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faWrench } from '@fortawesome/free-solid-svg-icons';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.navigateToGame = this.navigateToGame.bind(this);
        this.scrollIntoViewGames = this.scrollIntoViewGames.bind(this);
        this.scrollIntoViewOther = this.scrollIntoViewOther.bind(this);
    }
    componentDidMount() {
        document.title ="Pavan Portfolio";
    }
    navigateToGame(name) {
        const { history } = this.props;
        switch (name) {
            case 'game1':
                window.location.replace('/the-dark-valley');
                break;
            case 'game2':
                window.location.replace('/gothicvania');
                break;
            case 'game3':
                window.location.replace('/blades-of-time');
                break;
            case 'game4':
                window.location.replace('/gaia');
                break;
            case 'other1':
                window.location.replace('/maze-generation');
                break;
            case 'other2':
                window.location.replace('/other2');
                break;
            default:
                break;
        }
    }
    scrollIntoViewOther() {
        let ele = document.getElementsByClassName('other');
        ele[0].scrollIntoView({ behavior: "smooth", block: "end" });
    }
    scrollIntoViewGames() {
        let ele = document.getElementsByClassName('box');
        ele[0].scrollIntoView({ behavior: "smooth", block: "end" });
    }
    render() {
        return (
            <React.Fragment>
                <div className="text-center" ref={node => this.parentNode = node}>
                    <h1 className="name">Pavan Tummala</h1>
                    <FontAwesomeIcon icon={faGamepad} color="white" size="2x" className="gamePad" onClick={this.scrollIntoViewGames} />
                    <FontAwesomeIcon icon={faWrench} color="white" size="2x" className="gamePad" onClick={this.scrollIntoViewOther} />
                    <p><code>Game Programming Portfolio</code></p>
                </div>
                <div className="video-container">
                    <div className="video">
                        <iframe width="560" height="349" title="Introductory Video" src="https://www.youtube.com/embed/erbQxha3SB8?rel=0&modestbranding=1"></iframe>
                    </div>
                </div>
                <div className="games-title">
                    <FontAwesomeIcon icon={faGamepad} color="white" size="2x" className="games-title-gamepad" /> <h2>Games</h2>
                </div>
                <div className="game-wrapper">
                    <div className="box">
                        <a href="/the-dark-valley">
                            <img className="game-image" alt="Game1" src={require('../../Assets/images/Dark Valley/DarkValley-1.png')} />
                            <div className="game-description">
                                <h3>The Dark Valley</h3><br />
                                {/* <p></p> */}
                                <button className="btn btn-primary" onClick={() => this.navigateToGame('game1')}>View Project</button>
                            </div>
                        </a>
                    </div>
                    <div className="box">
                        <a href="/gothicvania">
                            <img className="game-image" alt="Game2" src={require('../../Assets/images/Gothicvania/Gothicvania-1.jpg')} />
                            <div className="game-description">
                                <h3>Gothicvania</h3><br />
                                {/* <p></p> */}
                                <button className="btn btn-primary" onClick={() => this.navigateToGame('game2')}>View Project</button>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="game-wrapper">
                    <div className="box">
                        <a href="/blades-of-time">
                            <img className="game-image" alt="Game3" src={require('../../Assets/images/Blades of Time/BladesOfTime-1.png')} />
                            <div className="game-description">
                                <h3>Blades Of Time</h3><br />
                                {/* <p></p> */}
                                <button className="btn btn-primary" onClick={() => this.navigateToGame('game3')}>View Project</button>
                            </div>
                        </a>
                    </div>
                    <div className="box">
                        <a href="/gaia">
                            <img className="game-image" alt="Game4" src={require('../../Assets/images/Project Gaia/ProjectGaia-1.png')} />
                            <div className="game-description">
                                <h3>Gaia</h3><br />
                                {/* <p></p> */}
                                <button className="btn btn-primary" onClick={() => this.navigateToGame('game4')}>View Project</button>
                            </div>
                        </a>
                    </div>
                </div>
                {/* <a href="/game5">
                        <div className="box">
                            <img className="game-image" alt="Game5" src={require('../../Assets/images/image.jpeg')} />
                            <div className="game-description">
                                <h2>Game5 Title</h2>
                                <p>Game5 Description</p>
                                <button className="btn btn-primary" onClick={() => this.navigateToGame('game5')}>View Project</button>
                            </div>
                        </div>
                    </a> */}
            <div className="games-title">
                <FontAwesomeIcon icon={faWrench} color="white" size="2x" className="games-title-wrench" /> <h2>Others</h2>
            </div>
            <div className="game-wrapper">
                <a href="/maze-generation">
                    <div className="other">
                        <img className="game-image" alt="Game1" src={require('../../Assets/images/MazeGen/MazeGen.png')} />
                        <div className="game-description">
                            <h2>Maze Generation</h2><br />
                            {/* <p></p> */}
                            <button className="btn btn-primary" onClick={() => this.navigateToGame('other1')}>View Project</button>
                        </div>
                    </div>
                </a>
                <a href="/other2">
                    <div className="other">
                        <img className="game-image" alt="Game2" src={require('../../Assets/images/pubg.jpeg')} />
                        <div className="game-description">
                            <h2>Other2 Title</h2><br />
                            {/* <p>Other2 Description</p> */}
                            <button className="btn btn-primary" onClick={() => this.navigateToGame('other2')}>View Project</button>
                        </div>
                    </div>
                </a>
            </div>
            </React.Fragment >
        )
    }
}
Home.propTypes = {
    navigateToGame: PropTypes.func,
    scrollIntoView: PropTypes.func,
    listen: PropTypes.func,
    history: PropTypes.object
}