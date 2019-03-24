import React, { Component } from 'react';
import './game1.scss';
import ImageGallery from 'react-image-gallery';
import { Link } from 'react-router-dom';
export default class Game1 extends Component {
  componentDidMount() {
    document.title = "The Dark Valley";
  }
  render() {
    const images = [
      {
        original: require('../../../Assets/images/Dark Valley/DarkValley-1.png'),
        thumbnail: require('../../../Assets/images/Dark Valley/DarkValley-1.png')
      },
      {
        original: require('../../../Assets/images/Dark Valley/DarkValley-2.png'),
        thumbnail: require('../../../Assets/images/Dark Valley/DarkValley-2.png')
      },
      {
        original: require('../../../Assets/images/Dark Valley/DarkValley-3.png'),
        thumbnail: require('../../../Assets/images/Dark Valley/DarkValley-3.png')
      }
    ]
    return (
      <React.Fragment>
        <div className="img-text-container">
          <div className="game-breadcrumb">
            <Link className="breadcrumb-item" to="/">Home</Link>
          </div>
          <div className="heading">
            <h2>The Dark Valley</h2>
          </div>
          <div className="row">
            <div className="col-6">
              <h2>About</h2>
              <p>The Dark Valley is an Action RPG game set in the mountains. It's inspired by games such as Dark Souls and Diablo.</p>
              <h2>Details</h2>
              <ul>
                <li>Made in Unity with C#.</li>
                <li>Playable with Keyboard/Mouse or Controller.</li>
              </ul>
              <h2>Implemented Mechanics</h2>
              <ul>
                <li>3d Player and Camera Controller.</li>
                <li>Inventory with switchable weapons and spells.</li>
                <li>Dual wielding weapons.</li>
                <li>Separate move sets and damage values for different weapons.</li>
                <li>Character stats such as health, stamina, defense, stagger resistance etc.</li>
                <li>Critical attacks when standing behind enemies or when enemy attacks are parried.</li>
                <li>Replenishment items for health and mana.</li>
                <li>Character dialogue system with quest lines for defeating enemies.</li>
                <li>Sprint, Roll away or backstep to avoid damage.</li>
                <li>Animations setup in Mecanim with Inverse Kinematics for smooth gameplay.</li>
                <li>Enemy AI for mobs and boss fights.</li>
                <li>Particle system used in creating spell and environment effects.</li>
                <li>On screen UI for weapons, quick slot items and stats bars.</li>
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
              <div>All external assets used in this game that are listed below are freely available for use in projects.</div>
              <ul>
                <li>Character models and all animations are taken from <a href="https://www.mixamo.com/">Mixamo</a>.</li>
                <li>House models taken from Medieval Buildings package and Tents from <a href="https://assetstore.unity.com/packages/3d/environments/fantasy/campfire-pack-11256">Campfire pack</a></li>
                <li>Skybox taken from <a href="https://assetstore.unity.com/packages/2d/textures-materials/sky/skybox-series-free-103633">Skybox Series</a></li>
                <li>Weapon models are taken from <a href="https://assetstore.unity.com/packages/3d/props/weapons/medieval-weapon-set-01-97120">Medieval Weapon Set</a></li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
