import React, { Component } from 'react';

import BtcRates from '../../containers/BtcRates';

export default class Rates extends Component {

    render() {
        return (
            <div>
                <h2>Current BTC rates</h2>
                <p>from the&nbsp;  
                    <a href="https://blockchain.info/api/exchange_rates_api">https://blockchain.info/api/exchange_rates_api</a>
                </p>
                <BtcRates />
            </div>
        );
    }
}
