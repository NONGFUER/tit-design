import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,hashHistory} from 'react-router';

import Frame from '../layouts/Frame'
import Home from '../views/Home/Home'
import GridDemo from '../views/Grid/GridDemo'
const routes = (
        <Router history={hashHistory}>
            <Route  path='/' component={Frame}>
                <IndexRoute component={Home} />
                <Route path="/grid" component={GridDemo}/>
            </Route>
        </Router>
);

export default routes;