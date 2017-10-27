import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeView from './components/HomeView';
import NewView from './components/NewView/NewView';
import LastView from './components/LastView/LastView';

export default (
    <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/new-view" render={() => {
            return (
                <NewView>
                    <Switch>
                        <Route path='/new-view/lastView' component={LastView} />
                    </Switch>
                </NewView>
            )
        }} />
    </Switch>
)