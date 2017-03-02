import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,hashHistory} from 'react-router';

import Frame from '../layouts/Frame'
import Home from '../views/Home/Home'
const routes = (
        <Router history={hashHistory}>
            <Route  path='/' component={Frame}>
                <IndexRoute component={Home} />
            
            </Route>
        </Router>
);

export default routes;