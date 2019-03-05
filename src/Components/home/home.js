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
            isHovering: false,
            isHovering1: false,
            isHovering2: false,
            isHovering3: false,
            isHovering4: false
        }
        this.navigateToGame1 = this.navigateToGame1.bind(this);
        this.scrollIntoView = this.scrollIntoView.bind(this);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.handleMouseHover1 = this.handleMouseHover1.bind(this);
        this.handleMouseHover2 = this.handleMouseHover2.bind(this);
        this.handleMouseHover3 = this.handleMouseHover3.bind(this);
        this.handleMouseHover4 = this.handleMouseHover4.bind(this);
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
        this.setState(this.toggleHoverState);
    }
    handleMouseHover1() {
        this.setState({ isHovering1: !this.state.isHovering1 });
    }
    handleMouseHover2() {
        this.setState({ isHovering2: !this.state.isHovering2 });
    }
    handleMouseHover3() {
        this.setState({ isHovering3: !this.state.isHovering3 });
    }
    handleMouseHover4() {
        this.setState({ isHovering4: !this.state.isHovering4 });
    }
    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        };
    }
    render() {
        const { isHovering, isHovering1, isHovering2, isHovering3, isHovering4 } = this.state;
        const game1 = !isHovering ? <img className="game-image" src="https://static.cdprojektred.com/thewitcher.com/media/wallpapers/witcher3/full/witcher3_en_wallpaper_the_witcher_3_wild_hunt_geralt_with_trophies_2560x1600_1449484679.png" /> : <h2>Game1 Description</h2>;
        const game2 = !isHovering1 ? <img className="game-image" src="https://www.keengamer.com/Image/Image/69712?Size=STANDARD" /> : <h2>Game2 Description</h2>;
        const game3 = !isHovering2 ? <img className="game-image" src="http://i.imgur.com/pgcqPXG.jpg" /> : <h2>Game3 Description</h2>;
        const game4 = !isHovering3 ? <img className="game-image" src="https://images.g2a.com/newlayout/600x351/1x1x0/b0b35a4316e8/5a4f67e45bafe35fa63db642" /> : <h2>Game4 Description</h2>;
        const game5 = !isHovering4 ? <img className="game-image" src="https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcOMCnvWKiOBBiiRl0irczQcXPqc58S3kBb_NdMRPibELaRmI97RknkDcd5_qy.gG8oS1vL3dr3QDP.IAAUKMh_KgFEQJefJwOVfs69M7u3YvZnHGXU9.ZHZRNIATZ2U8zXfuVwHM2h32czWU1KA.wsuKLGpHcAlSwNQgyzKOAQQs-&amp;h=1080&amp;w=1920&amp;format=jpg" /> : <h2>Game5 Description</h2>;
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
                        onClick={this.navigateToGame1}
                    >
                        {game1}
                    </div>
                    <div className="box"
                        onMouseEnter={this.handleMouseHover1}
                        onMouseLeave={this.handleMouseHover1}
                    >
                        {game2}
                    </div>
                    <div className="box"
                        onMouseEnter={this.handleMouseHover2}
                        onMouseLeave={this.handleMouseHover2}>
                        {game3}
                    </div>
                    <div className="box"
                        onMouseEnter={this.handleMouseHover3}
                        onMouseLeave={this.handleMouseHover3}>
                        {game4}
                    </div>
                    <div className="box"
                        onMouseEnter={this.handleMouseHover4}
                        onMouseLeave={this.handleMouseHover4}>
                        {game5}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
