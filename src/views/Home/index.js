import React, { Component } from 'react';

export default class Home extends Component {

    render() {
        return (
            <div>
                <h2>Hello</h2>
                <p>
                    This is the demo React application (CRA based) with an almost complete bunch 
                    of most needed features as for simple as for a complex application.
                </p>
                <p>
                    Useful for learning of setup and usage of:
                </p>                
                <ul>
                    <li>React Router 4</li>
                    <li>Redux</li>
                    <li>Redux Saga</li>
                    <li>Persistent redux state</li>
                    <li>SASS for component styling</li>
                    <li>Code splitting</li>
                    <li>etc...</li>
                </ul>
            </div>
        );
    }
}

export const route = {
    path: '/',
    exact: true,
    label: 'Home',
    component: Home
};
