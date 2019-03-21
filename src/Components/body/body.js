import React from 'react'
import Home from '../home/loader';
import Game1 from '../games/Game1/loader';
import Game2 from '../games/Game2/loader';
import Game3 from '../games/Game3/loader';
import Game4 from '../games/Game4/loader';
import Game5 from '../games/Game5/loader';
import Other1 from '../other/Other1/loader';
import Other2 from '../other/Other2/loader';
import NotFound from '../NotFound/loader';
import { Switch,Route } from 'react-router-dom';
export default function body() {
  return (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/game1" component={Game1}/>
        <Route exact path="/game2" component={Game2}/>
        <Route exact path="/game3" component={Game3}/>
        <Route exact path="/game4" component={Game4}/>
        <Route exact path="/game5" component={Game5}/>
        <Route exact path="/other1" component={Other1}/>
        <Route exact path="/other2" component={Other2}/>
        <Route path="*" component={NotFound} />
    </Switch>
  )
}

