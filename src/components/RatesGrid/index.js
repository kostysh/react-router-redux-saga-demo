import './RatesGrid.scss';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class RatesGrid extends PureComponent {
    
    render() {
        const records = this.props.records;

        return (
            <table className="rates-grid-tb">
                <thead>
                    <tr>
                        <td>&nbsp;</td>
                        <td>Curr</td>
                        <td>Buy</td>
                        <td>Last</td>
                        <td>Sell</td>
                    </tr>
                </thead>
                <tbody>
                    {records.map((rate, index) => (
                        <tr key={rate.label.toString()}>
                            <td>{index}</td>
                            <td>{rate.label}</td>
                            <td>{rate.buy}</td>
                            <td>{rate.last}</td>
                            <td>{rate.sell}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

RatesGrid.propTypes = {
    records: PropTypes.array.isRequired
}

RatesGrid.defaultProps = {
    records: []
};
