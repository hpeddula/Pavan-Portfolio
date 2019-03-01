import React from 'react'
import Home from '../home/home';
import game1 from '../games/game1';
import game2 from '../games/game2';
import { Switch,Router,Route } from 'react-router-dom';
export default function body() {
  return (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/game1" component={game1}/>
        <Route exact path="/game2" component={game2}/>
    </Switch>
  )
}
