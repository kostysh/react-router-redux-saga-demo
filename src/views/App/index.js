import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from '../../components/Header';

import routes from '../../router';

export default class App extends Component {    
    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.component} />
                    ))}
                </div>
            </div>
        );
    }
}
