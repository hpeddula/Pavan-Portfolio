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
          <div className="row">
            <div className="col-6">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
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
