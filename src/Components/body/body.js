import React, { Component } from 'react'
import Game1 from '../games/game1';
import Game2 from '../games/game2';
import { Switch, Route } from 'react-router-dom';
export default class Body extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/game1" component={Game1} />
                <Route exact path="/game2" component={Game2} />
            </Switch>
        )
    }
}
