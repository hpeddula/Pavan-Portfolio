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
    navigateToGame(name) {
        const { history } = this.props;
        switch (name) {
            case 'game1':
                history.push('/game1');
                break;
            case 'game2':
                history.push('/game2');
                break;
            case 'game3':
                history.push('/game3');
                break;
            case 'game4':
                history.push('/game4');
                break;
            case 'other1':
                history.push('/other1');
                break;
            case 'other2':
                history.push('/other2');
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
                        <iframe width="560" height="349" title="Introductory Video" src="https://www.youtube.com/embed/W3DBpti5giI?rel=0&modestbranding=1"></iframe>
                    </div>
                </div>
                <div className="games-title">
                    <FontAwesomeIcon icon={faGamepad} color="white" size="2x" className="games-title-gamepad" /> <h2>Games</h2>
                </div>
                <div className="game-wrapper">
                    <div className="box">
                        <a href="/game1">
                            <img className="game-image" alt="Game1" src={require('../../Assets/images/witcher3_en_wallpaper_the_witcher_3_wild_hunt_geralt_with_trophies_2560x1600_1449484679.png')} />
                            <div className="game-description">
                                <h2>Game1 Title</h2>
                                <p>Game1 Description</p>
                                <button className="btn btn-primary" onClick={() => this.navigateToGame('game1')}>View Project</button>
                            </div>
                        </a>
                    </div>
                    <div className="box">
                        <a href="/game2">
                            <img className="game-image" alt="Game2" src={require('../../Assets/images/pubg.jpeg')} />
                            <div className="game-description">
                                <h2>Game2 Title</h2>
                                <p>Game2 Description</p>
                                <button className="btn btn-primary" onClick={() => this.navigateToGame('game2')}>View Project</button>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="game-wrapper">
                    <div className="box">
                        <a href="/game3">
                            <img className="game-image" alt="Game3" src={require('../../Assets/images/pgcqPXG.jpg')} />
                            <div className="game-description">
                                <h2>Game3 Title</h2>
                                <p>Game3 Description</p>
                                <button className="btn btn-primary" onClick={() => this.navigateToGame('game3')}>View Project</button>
                            </div>
                        </a>
                    </div>
                    <div className="box">
                        <a href="/game4">
                            <img className="game-image" alt="Game4" src={require('../../Assets/images/5a4f67e45bafe35fa63db642.jpeg')} />
                            <div className="game-description">
                                <h2>Game4 Title</h2>
                                <p>Game4 Description</p>
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
                <a href="/other1">
                    <div className="other">
                        <img className="game-image" alt="Game1" src={require('../../Assets/images/witcher3_en_wallpaper_the_witcher_3_wild_hunt_geralt_with_trophies_2560x1600_1449484679.png')} />
                        <div className="game-description">
                            <h2>Other1 Title</h2>
                            <p>Other1 Description</p>
                            <button className="btn btn-primary" onClick={() => this.navigateToGame('other1')}>View Project</button>
                        </div>
                    </div>
                </a>
                <a href="/other2">
                    <div className="other">
                        <img className="game-image" alt="Game2" src={require('../../Assets/images/pubg.jpeg')} />
                        <div className="game-description">
                            <h2>Other2 Title</h2>
                            <p>Other2 Description</p>
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