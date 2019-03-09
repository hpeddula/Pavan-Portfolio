import React from 'react'
import Home from '../home/loader';
import Game1 from '../games/Game1/loader';
import Game2 from '../games/Game2/loader';
import game3 from '../games/Game3/game3';
import game4 from '../games/Game4/game4';
import game5 from '../games/Game5/game5';
import { Switch,Route } from 'react-router-dom';
export default function body() {
  return (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/game1" component={Game1}/>
        <Route exact path="/game2" component={Game2}/>
        <Route exact path="/game3" component={game3}/>
        <Route exact path="/game4" component={game4}/>
        <Route exact path="/game5" component={game5}/>
    </Switch>
  )
}

