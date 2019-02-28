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
                    {/* <img class="irc_mi" src="https://static.cdprojektred.com/thewitcher.com/media/wallpapers/witcher3/full/witcher3_en_wallpaper_the_witcher_3_wild_hunt_geralt_with_trophies_2560x1600_1449484679.png"/> */}
                    </div>
                    <div className="box">
                        <p className="card-text">This is some text within a card body.</p>
                    </div>
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
            </React.Fragment>
        )
    }
}
