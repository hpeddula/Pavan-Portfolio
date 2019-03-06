import React, { Component } from 'react'
import './home.scss';
import '../header/header.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faKeyboard } from '@fortawesome/free-solid-svg-icons';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.navigateToGame1 = this.navigateToGame1.bind(this);
        this.scrollIntoView = this.scrollIntoView.bind(this);
    }
    navigateToGame1() {
        const { history } = this.props;
        history.push("/game1");
    }
    scrollIntoView() {
        let ele = document.getElementsByClassName('box');
        ele[0].scrollIntoView({ behavior: "smooth", block: "end" });
    }
    render() {
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
                    <div className="box" onClick={this.navigateToGame1}>
                        <img className="game-image" src="https://static.cdprojektred.com/thewitcher.com/media/wallpapers/witcher3/full/witcher3_en_wallpaper_the_witcher_3_wild_hunt_geralt_with_trophies_2560x1600_1449484679.png" />
                        <p>Game 1 Description</p>
                    </div>
                    <div className="box">
                        <img className="game-image" src="https://www.keengamer.com/Image/Image/69712?Size=STANDARD" /> 
                        <p>Game 2 Description</p>
                    </div>
                    <div className="box">
                        <img className="game-image" src="http://i.imgur.com/pgcqPXG.jpg" />
                        <p>Game 3 Description</p>
                    </div>
                    <div className="box">
                        <img className="game-image" src="https://images.g2a.com/newlayout/600x351/1x1x0/b0b35a4316e8/5a4f67e45bafe35fa63db642" />
                        <p>Game 4 Description</p>
                    </div>
                    <div className="box">
                        <img className="game-image" src="https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcOMCnvWKiOBBiiRl0irczQcXPqc58S3kBb_NdMRPibELaRmI97RknkDcd5_qy.gG8oS1vL3dr3QDP.IAAUKMh_KgFEQJefJwOVfs69M7u3YvZnHGXU9.ZHZRNIATZ2U8zXfuVwHM2h32czWU1KA.wsuKLGpHcAlSwNQgyzKOAQQs-&amp;h=1080&amp;w=1920&amp;format=jpg" />
                        <p>Game 5 Description</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
