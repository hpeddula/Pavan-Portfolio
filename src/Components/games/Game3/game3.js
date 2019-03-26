import React, { Component } from 'react';
import '../Game1/game1.scss';
import ImageGallery from 'react-image-gallery';
import { Link } from 'react-router-dom';
export default class Game3 extends Component {
  componentDidMount() {
    document.title = "BladesOfTime";
  }
  render() {
    const images = [
      {
        original: require('../../../Assets/images/Blades of Time/BladesOfTime-1.png'),
        thumbnail: require('../../../Assets/images/Blades of Time/BladesOfTime-1.png')
      },
      {
        original: require('../../../Assets/images/Blades of Time/BladesOfTime-2.png'),
        thumbnail: require('../../../Assets/images/Blades of Time/BladesOfTime-2.png')
      },
      {
        original: require('../../../Assets/images/Blades of Time/BladesOfTime-3.png'),
        thumbnail: require('../../../Assets/images/Blades of Time/BladesOfTime-3.png')
      }
    ]
    return (
      <React.Fragment>
        <div className="img-text-container">
          <div className="game-breadcrumb">
            <Link className="breadcrumb-item" to="/">Home</Link>
          </div>
          <div className="heading">
            <h2>The Blades Of Time</h2>
          </div>
          <div className="row">
            <div className="col-6">
              <h2>About</h2>
              <p>Blades of Time is an action adventure game inspired by games such as Prince of Persia and Braid</p>
              <h2>Details</h2>
              <ul>
                <li>Made in Unity with C#.</li>
                <li>Playable with Keyboard/Mouse or Controller.</li>
              </ul>
              <h2>Implemented Mechanics</h2>
              <ul>
                <li>3d Player and Camera Controller.</li>
                <li>Rewind Time mechanic to fix mistakes or solve puzzles.</li>
                <li>Time can be played at any speed and can be added to any game object, music also responds to time rewinding.</li>
                <li>Wall climb system that allows to hang on to specific ledges to climb and traverse level.</li>
                <li>Particle system used to create portals.</li>
              </ul>
            </div>
            <div className="col-6">
              <div className="gallery">
                <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false} showNav={false} showBullets={true} lazyLoad={true} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2>External Assets Used</h2>
              <p>All external assets used in this game that are listed below are freely available for use in projects.</p>
              <ul>
                <li>Character models and all animations are taken from <a href="https://www.mixamo.com/">Mixamo.</a></li>
                <li>Traps models taken from <a href="https://assetstore.unity.com/packages/3d/environments/dungeons/dungeon-traps-50655">Dungeon Traps</a> package.</li>
                <li>Skybox taken from <a href="https://assetstore.unity.com/packages/2d/textures-materials/sky/skybox-series-free-103633">Skybox</a> Series.</li>
                <li>Tomb/Temple models taken from <a href="https://assetstore.unity.com/packages/3d/environments/fantasy/make-your-fantasy-game-lite-8312">Fantasy Game Lite</a> package.</li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
