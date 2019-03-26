import React, { Component } from 'react';
import '../../games/Game1/game1.scss';
import ImageGallery from 'react-image-gallery';
import { Link } from 'react-router-dom';
export default class Other2 extends Component {
  componentDidMount() {
    document.title = "Other2";
  }
  render() {
    const images = [
      {
        original: require('../../../Assets/images/witcher3_en_wallpaper_the_witcher_3_wild_hunt_geralt_with_trophies_2560x1600_1449484679.png'),
        thumbnail: require('../../../Assets/images/witcher3_en_wallpaper_the_witcher_3_wild_hunt_geralt_with_trophies_2560x1600_1449484679.png'),
      },
      {
        original: require('../../../Assets/images/pubg.jpeg'),
        thumbnail: require('../../../Assets/images/pubg.jpeg')
      },
      {
        original: require('../../../Assets/images/pgcqPXG.jpg'),
        thumbnail: require('../../../Assets/images/pgcqPXG.jpg')
      }
    ]
    return (
      <React.Fragment>
        <div className="img-text-container">
          <div className="game-breadcrumb">
            <Link className="breadcrumb-item" to="/">Home</Link>
          </div>
          <div className="heading">
            <h2>Rope Physics</h2>
          </div>
          <div className="row">
            <div className="col-6">
              <h2>Rope Simulation With Verlet Integration.</h2>
              <p>Reference: This implementation is mostly based on <a href="http://web.archive.org/web/20080410171619/http://www.teknikus.dk/tj/gdc2001.htm">Advanced Character Physics </a> by Thomas Jakobsen.</p>
              <ul>
                <li>Particle system based approach to simulate rope.</li>
                <li>Uses Verlet Integration to calculate the position of next particle by storing current and previous position instead of doing it by storing each particle position and velocity.</li>
                <li>Same principles can be extended to create cloth physics and ragdolls.</li>
              </ul>
            </div>
            <div className="col-6">
              <div className="gallery">
              <img id="comp-jto8amfyimgimage" alt="ropegif.gif" data-type="image" src="https://static.wixstatic.com/media/1b3a09_f253234b7e4248fcb5ebe07fd73a45cd~mv2.gif" />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
