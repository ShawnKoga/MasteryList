import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeView from './components/HomeView';
import NewView from './components/NewView/NewView';
import LastView from './components/LastView/LastView';
import DetailView from './components/DetailView/DetailView';

export default (
    <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/detail-view/:name/:desc" component={DetailView} />
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