import React, { Component } from 'react';
import '../Game1/game1.scss';
import ImageGallery from 'react-image-gallery';
import { Link } from 'react-router-dom';
export default class Game4 extends Component {
  componentDidMount() {
    document.title = "Project Gaia";
  }
  render() {
    const images = [
      {
        original: require('../../../Assets/images/Project Gaia/ProjectGaia-1.png'),
        thumbnail: require('../../../Assets/images/Project Gaia/ProjectGaia-1.png'),
      },
      {
        original: require('../../../Assets/images/Project Gaia/ProjectGaia-2.png'),
        thumbnail: require('../../../Assets/images/Project Gaia/ProjectGaia-2.png')
      },
      {
        original: require('../../../Assets/images/Project Gaia/ProjectGaia-3.png'),
        thumbnail: require('../../../Assets/images/Project Gaia/ProjectGaia-3.png')
      }
    ]
    return (
      <React.Fragment>
        <div className="img-text-container">
          <div className="game-breadcrumb">
            <Link className="breadcrumb-item" to="/">Home</Link>
          </div>
          <div className="heading">
            <h2>Project Gaia</h2>
          </div>
          <div className="row">
            <div className="col-6">
              <h2>About</h2>
              <p>Project Gaia is a survival shooter and resource management game developed for submission to the Global Game Jam 2019.</p>
              <h2>Details</h2>
              <ul>
                <li>Made in Unity with C#.</li>
                <li>Playable with Keyboard/Mouse.</li>
                <li>Developed in 48 hours.</li>
                <li>Team of 3.</li>
              </ul>
              <h2>Implemented Mechanics</h2>
              <ul>
                <li>Character controller with isometric camera view.</li>
                <li>Enemies spawning in waves which destroy environment on path to target.</li>
                <li>Mouse controlled gun to destroy enemies.</li>
                <li>Resource spawning at periodic intervals to manage requirement.</li>
                <li>Enemies drop scrap which can be used to rebuild broken walls or bullets for the gun.</li>
                <li>Particle system for gun bullet and explosions.</li>
                <li>Two different enemy bot behavior depending on closest target and obstacles in path.</li>
              </ul>
            </div>
            <div className="col-6">
              <div className="gallery">
                <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false} showNav={false} showBullets={true} lazyLoad={true} />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
