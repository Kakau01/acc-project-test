import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Login from '../pages/Login';
import RecoveryPass from '../pages/RecoveryPass';

const Routes: React.FC = () => {
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/error" exact component={Error} />
            <Route path="/pass" exact component={RecoveryPass} />
            <Route path="/dashboard" exact component={Dashboard} />
        </Switch>

    )
}

export default Routes;