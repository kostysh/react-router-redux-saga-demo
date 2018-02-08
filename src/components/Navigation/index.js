import './Navigation.scss';

import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import routes from '../../router';

class Navigation extends Component {

    render() {
        return (
            <div>
                <ul>
                    {routes.map(route => (
                        <li key={route.path.toString()}>
                            <NavLink
                                to={{ pathname: route.path, state: { prevPath: this.props.location.pathname } }}
                                exact={route.exact} 
                                activeClassName="nav-selected">{route.label}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default withRouter(Navigation);
