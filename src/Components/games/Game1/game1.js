import React, { Component } from 'react';
import './game1.scss';
export default class Game1 extends Component {
  componentDidMount() {
    document.title = "Game1"
  }
  render() {
    return (
      <div className="container-fluid">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">Home</li>
          </ol>
        </nav>
        <div className="aaa">
          <div className="bbb">
            <h1>This is game1</h1>
          </div>
        </div>
      </div>
    )
  }
}
