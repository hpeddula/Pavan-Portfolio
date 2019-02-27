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
                <div className="game-wrapper">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">This is some text within a card body.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">This is some text within a card body.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">This is some text within a card body.</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <p className="card-text">This is some text within a card body.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <p className="card-text">This is some text within a card body.</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
