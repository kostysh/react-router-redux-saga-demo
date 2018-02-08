import { call, put, fork, select, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as actions from '../actions';
import * as selectors from '../selectors';
import { fetchRates } from '../../services';

function* fetchRatesData() {
    try {
        const rates = yield call(fetchRates);
        return rates;
    } catch (error) {
        yield put(actions.failureRates(error));
    }
}

function* updateResource() {
    const rates = yield call(fetchRatesData);
    const errorMessage = yield select(selectors.errorMessage);

    if (!errorMessage) {
        yield put(actions.receiveRates(rates));        
    }        
}

function* pullingRates(a,b,c) {
    const pausePulling = yield select(selectors.pausePulling); 

    if (!pausePulling) {
        yield call(updateResource);
    }
    
    while (true) {
        yield call(delay, 5000);
        yield call(pullingRates);
    }
}

function* startPulling() {
    yield put(actions.requestRates());
}

function* watchRates() {
    yield takeLatest(actions.RATES_REQUEST, pullingRates);
    yield takeLatest(actions.RATES_REQUEST_RESUME, startPulling);
    yield takeLatest(actions.RATES_REFRESH, updateResource);
}

// Default set of sagas
export default [
    fork(watchRates),
    fork(startPulling)
]
