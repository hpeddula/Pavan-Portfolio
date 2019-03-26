import React, { Component } from 'react';
import '../Game1/game1.scss';
import ImageGallery from 'react-image-gallery';
import { Link } from 'react-router-dom';
export default class Game2 extends Component {
  componentDidMount() {
    document.title = "Gothicvania";
  }
  render() {
    const images = [
      {
        original: require('../../../Assets/images/Gothicvania/Gothicvania-1.jpg'),
        thumbnail: require('../../../Assets/images/Gothicvania/Gothicvania-1.jpg'),
      },
      {
        original: require('../../../Assets/images/Gothicvania/Gothicvania-2.jpg'),
        thumbnail: require('../../../Assets/images/Gothicvania/Gothicvania-2.jpg')
      },
      {
        original: require('../../../Assets/images/Gothicvania/Gothicvania-3.jpg'),
        thumbnail: require('../../../Assets/images/Gothicvania/Gothicvania-3.jpg')
      }
    ]
    return (
      <React.Fragment>
        <div className="img-text-container">
          <div className="game-breadcrumb">
            <Link className="breadcrumb-item" to="/">Home</Link>
          </div>
          <div className="heading">
            <h2>Gothicvania</h2>
          </div>
          <div className="row">
            <div className="col-6">
              <h2>About</h2>
              <p>Gothicvania is a 2d platformer game inspired by games such as Celeste and Hollow Knight.</p>
              <h2>Details</h2>
              <ul>
                <li>Made in Unity with C#.</li>
                <li>Playable on Android or IOS Device.</li>
              </ul>
              <h2>Implemented Mechanics</h2>
              <ul>
                <li>Raycast based 2d character controller for precise movement.</li>
                <li>Tilemap environments and character keyframe animations created from spreadsheets.</li>
                <li>Character movement controls such as walk, crouch, sprint, jump, sheathe/unsheate weapon.</li>
                <li>Wall jump back, Wall Scale up and Wall sliding down mechanics.</li>
                <li>Moving platforms with waypoints, one/two way platforms.</li>
                <li>On Screen touch UI for mobile phones and main/pause menu.</li>
                <li>Attack chain for sword based on timing to deal more damage.</li>
                <li>Enemy AI each with different attacks and time between actions.</li>
                <li>Character dialogue tree system that responds to player actions.</li>
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
              <p>All external assets used are done so with permission from creator and are available to use in this project.</p>
              <ul>
                <li>Main Character and Enemies are all taken from <a href="https://rvros.itch.io/animated-pixel-hero">Animated Pixel Adventurer</a> and <a href="https://rvros.itch.io/pixel-monsters-3">Pixel Monster Pack by rvros</a>.</li>
                <li>Environments and NPC's are taken from <a href="https://ansimuz.itch.io/gothicvania-town">Gothicvania package by ansimuz</a></li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
