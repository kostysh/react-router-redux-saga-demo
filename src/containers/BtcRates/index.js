import './BtcRates.scss';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import RatesGrid from '../../components/RatesGrid';
import Loading from '../../components/Loading';
import ScrollToTop from '../../components/ScrollToTop';

import {
    refreshRates,
    invalidateError,
    doPausePulling,
    doResumePulling
} from '../../store/actions';
import {
    isFetching,
    ratesRecords,    
    usdRate,
    lastUpdated,
    errorMessage,
    pausePulling
} from '../../store/selectors';

class BtcRates extends PureComponent {
    
    handleErrorCloseClick = e => {
        e.preventDefault();
        this.props.dispatch(invalidateError());
    }

    handleRefreshClick = e => {
        e.preventDefault();
        this.props.dispatch(refreshRates());
    }

    handlePausePullingClick = e => {
        e.preventDefault();
        this.props.dispatch(this.props.pausePulling ? doResumePulling() : doPausePulling());
    }

    render() {
        const {
            isFetching, 
            ratesRecords,
            lastUpdated, 
            errorMessage,
            pausePulling
        } = this.props;

        return (
            <div>
                <ScrollToTop />
                {errorMessage !== null &&
                    <p className="error">
                        {errorMessage}&nbsp;
                        <button onClick={this.handleErrorCloseClick}>X</button>
                    </p>
                }
                <p>
                    {lastUpdated !== null  &&
                        <span>
                            Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
                            {' '}
                        </span>
                    }
                    {!isFetching &&
                        <button
                            onClick={this.handleRefreshClick}>
                            Refresh
                        </button>
                    }
                </p>
                {isFetching && ratesRecords.length === 0 &&
                    <Loading />
                }
                {!isFetching && ratesRecords.length === 0 &&
                    <h3>Empty</h3>
                }
                {ratesRecords.length > 0 &&
                    <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                        <RatesGrid records={ratesRecords} />
                        <div>
                            {pausePulling ? 
                                (
                                    <button onClick={this.handlePausePullingClick}>Resume rates pulling</button>
                                ) : 
                                (
                                    <button onClick={this.handlePausePullingClick}>Pause rates pulling</button>
                                )
                            }
                        </div>
                    </div>                    
                }
            </div>            
        );
    }
}

BtcRates.propTypes = {
    ratesRecords: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    usdRate: PropTypes.object,
    lastUpdated: PropTypes.number,
    errorMessage: PropTypes.string,
    pausePulling: PropTypes.bool,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {

    return {
        ratesRecords: ratesRecords(state),
        isFetching: isFetching(state),
        lastUpdated: lastUpdated(state),
        usdRate: usdRate(state),
        errorMessage: errorMessage(state),
        pausePulling: pausePulling(state)
    }
}

export default connect(mapStateToProps)(BtcRates);
