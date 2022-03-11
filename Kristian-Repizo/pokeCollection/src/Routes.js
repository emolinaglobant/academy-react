import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Welcome from './components/Welcome';
import GameInfoContainer from './containers/GameInfoContainer';

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path='/Games' component={Home} />
            <Route exact path="/game-info/:gameIndex/:gameName" component={GameInfoContainer} />
        </Switch>
    )
}

export default Routes;