import React, { Component } from 'react'
import Game1 from '../games/game1';
import Game2 from '../games/game2';
import { Switch, Route } from 'react-router-dom';
import './body.scss';
export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: [{ id: 1, name: Game1 }]
        }
    }
    render() {
        return (
            <React.Fragment>
                <h2 className="text-center game-heading">Games</h2>
                <div className="game-wrapper">
                    <div className="box">
                        <p className="card-text">This is some text within a card body.</p>
                    </div>
                    <div className="box">
                        <p className="card-text">This is some text within a card body.</p>
                    </div>
                    <div className="box">
                        <p className="card-text">This is some text within a card body.</p>
                    </div>
                </div>
                <div className="game-wrapper">
                    <div className="box">
                        <p className="card-text">This is some text within a card body.</p>
                    </div>
                    <div className="box">
                        <p className="card-text">This is some text within a card body.</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
