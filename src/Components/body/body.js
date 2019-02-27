import React, { Component } from 'react'
import Game1 from '../games/game1';
import Game2 from '../games/game2';
import { Switch, Route } from 'react-router-dom';
export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: [{ id: 1, name: 'Game 1' },
            { id: 2, name: 'Game 2' },
            { id: 3, name: 'Game 3' },
            { id: 4, name: 'Game 4' },
            { id: 5, name: 'Game 5' }]
        }
    }
    render() {
        const { games } = this.state;
        return (
            <div>
                {
                    games.map((game, index) => (
                        <div class="card" style={{width:'18rem'}}>
                            <div class="card-body">
                                <h5 class="card-title" style={{backgroundColor:'black',color:'white'}}>Card title</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    ))
                }
            </div >)
    }
}
