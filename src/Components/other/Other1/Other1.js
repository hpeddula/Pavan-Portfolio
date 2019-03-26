import React, { Component } from 'react';
import '../../games/Game1/game1.scss';
import ImageGallery from 'react-image-gallery';
import { Link } from 'react-router-dom';
export default class Other1 extends Component {
  componentDidMount() {
    document.title = "MazeGen";
  }
  render() {
    const images = [
      {
        original: require('../../../Assets/images/MazeGen/MazeGen.png'),
        thumbnail: require('../../../Assets/images/MazeGen/MazeGen.png'),
      },
      {
        original: require('../../../Assets/images/MazeGen/MazeGen.png'),
        thumbnail: require('../../../Assets/images/MazeGen/MazeGen.png')
      },
      {
        original: require('../../../Assets/images/MazeGen/MazeGen.png'),
        thumbnail: require('../../../Assets/images/MazeGen/MazeGen.png')
      }
    ]
    return (
      <React.Fragment>
        <div className="img-text-container">
          <div className="game-breadcrumb">
            <Link className="breadcrumb-item" to="/">Home</Link>
          </div>
          <div className="heading">
            <h2>Maze Generation</h2>
          </div>
          <div className="row">
            <div className="col-6">
              <h2>Maze Generation</h2>
              <ul>
                <li>Uses Growing Tree Algorithm to generate maze.</li>
                <li>Generates path through maze and each room is differentiated by textured floor.</li>
                <li>Places doors throughout maze based on probability that can be pre determined.</li>
                <li>Size constraints of the maze can be changed in editor.</li>
              </ul>
            </div>
            <div className="col-6">
              <div className="gallery">
                <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false} showNav={false} showBullets={true} lazyLoad={true} />
              </div>
            </div>
          </div>
          <div className="row" style={{marginTop:'2em'}}>
            <div className="col-6">
              <h2>Game Map Generation</h2>
              <ul>
                <li>Uses Binary Space Partitioning to create game maps.</li>
                <li>Configurable room sizes.</li>
              </ul>
            </div>
            <div className="col-6">
              <img alt="gifbsp.gif" src="https://static.wixstatic.com/media/1b3a09_be163b5d4b7c4a689dd845b173b7ff4c~mv2.gif" />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
