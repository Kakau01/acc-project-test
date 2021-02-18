import React, { Component, ComponentType } from 'react';
import { Redirect, Route, RouteProps, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Login from '../pages/Login';
import RecoveryPass from '../pages/RecoveryPass';
import { isAuth } from '../services/Auth';

interface PrivateRouteProps extends RouteProps {
    component: ComponentType;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({component: Component,...rest}) => (
    <Route {...rest} render={props => isAuth ? (<Component />) :
    (
        <Redirect to={{pathname:'/', state:{from: props.location}}} />
    )} />

)

const Routes: React.FC = () => {
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/error" exact component={Error} />
            <Route path="/pass" exact component={RecoveryPass} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <Route path="/dashboard" exact component={Dashboard} />
        </Switch>

    )
}

export default Routes;