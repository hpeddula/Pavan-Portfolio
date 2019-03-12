import React, { Component } from 'react';
import './game1.scss';
import ImageGallery from 'react-image-gallery';
export default class Game1 extends Component {
  componentDidMount() {
    document.title = "Game1"
  }
  render() {
    const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ]
    return (
      <div className="container-fluid">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">Home</li>
          </ol>
        </nav>
        {/* <div className="aaa"> */}
          {/* <div className="bbb"> */}
            {/* <img className="game-image" alt="Game1" src={require('../../../Assets/images/image.jpeg')} align="right" /> */}
          {/* </div> */}
        {/* </div> */}
        <div className="gallery">
              <ImageGallery items={images} originalClass="originalClass" />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
      </div>
    )
  }
}
