import React, { Component } from 'react'
import './home.scss';
import '../header/header.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faKeyboard } from '@fortawesome/free-solid-svg-icons';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovering: false
        }
        this.navigateToGame1 = this.navigateToGame1.bind(this);
        this.scrollIntoView = this.scrollIntoView.bind(this);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.handleMouseHover1 = this.handleMouseHover1.bind(this);
    }
    navigateToGame1() {
        const { history } = this.props;
        history.push("/game1");
    }
    scrollIntoView() {
        let ele = document.getElementsByClassName('box');
        ele[0].scrollIntoView({ behavior: "smooth", block: "end" });
    }
    handleMouseHover(e) {
        console.log('Event',e.target);
        this.setState(this.toggleHoverState);
    }
    handleMouseHover1(e) {
        console.log('Event',e.target);
        this.setState(this.toggleHoverState);
    }
    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        };
    }
    render() {
        const { isHovering } = this.state;
        const game1 = !isHovering?<img className="game-image" src="https://static.cdprojektred.com/thewitcher.com/media/wallpapers/witcher3/full/witcher3_en_wallpaper_the_witcher_3_wild_hunt_geralt_with_trophies_2560x1600_1449484679.png" onClick={this.navigateToGame1} />:<h2>Game1 Description</h2>;
        const game2 = !isHovering?<img className="game-image" src="https://www.keengamer.com/Image/Image/69712?Size=STANDARD" />:<h2>Game2 Description</h2>;
        return (
            <React.Fragment>
                <div className="text-center" ref={node => this.parentNode = node}>
                    <h1 className="name">Pavan Tummala</h1>
                    <FontAwesomeIcon icon={faGamepad} color="white" size="2x" className="gamePad" onClick={this.scrollIntoView} />
                    <FontAwesomeIcon icon={faKeyboard} color="white" size="2x" className="gamePad" onClick={this.scrollIntoView} />
                    <p><code>Game Programming Portfolio</code></p>
                </div>
                <div className="video-container">
                    <div className="video">
                        <iframe width="560" height="349" title="Introductory Video" src="https://www.youtube.com/embed/W3DBpti5giI?rel=0&modestbranding=1"></iframe>
                    </div>
                </div>
                <h2 className="text-center game-heading">Games</h2>
                <div className="game-wrapper">
                    <div className="box"
                        onMouseEnter={this.handleMouseHover}
                        onMouseLeave={this.handleMouseHover}
                    >
                    {game1}
                    </div>
                    <div className="box"
                        onMouseEnter={this.handleMouseHover1}
                        onMouseLeave={this.handleMouseHover1}
                    >
                    {game2}    
                    </div>
                    <div className="box">
                        <img className="game-image" src="http://i.imgur.com/pgcqPXG.jpg" />
                    </div>
                    <div className="box">
                        <img className="game-image" src="https://images.g2a.com/newlayout/600x351/1x1x0/b0b35a4316e8/5a4f67e45bafe35fa63db642" />
                    </div>
                    <div className="box">
                        <img className="game-image" src="https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcOMCnvWKiOBBiiRl0irczQcXPqc58S3kBb_NdMRPibELaRmI97RknkDcd5_qy.gG8oS1vL3dr3QDP.IAAUKMh_KgFEQJefJwOVfs69M7u3YvZnHGXU9.ZHZRNIATZ2U8zXfuVwHM2h32czWU1KA.wsuKLGpHcAlSwNQgyzKOAQQs-&amp;h=1080&amp;w=1920&amp;format=jpg" />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
