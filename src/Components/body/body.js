import React from 'react'
import Home from '../home/home';
import game1 from '../games/game1';
import game2 from '../games/game2';
import game3 from '../games/game3';
import game4 from '../games/game4';
import game5 from '../games/game5';
import { Switch,Router,Route,withRouter } from 'react-router-dom';
function body() {
  return (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/game1" component={game1}/>
        <Route exact path="/game2" component={game2}/>
        <Route exact path="/game3" component={game3}/>
        <Route exact path="/game4" component={game4}/>
        <Route exact path="/game5" component={game5}/>
    </Switch>
  )
}
export default withRouter(body);
