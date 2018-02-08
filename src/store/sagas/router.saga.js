import { put, fork, takeLatest } from 'redux-saga/effects';
import * as ratesActions from '../actions';

function* onLocationChange(e) {

    if (e && e.payload && e.payload.pathname === '/rates' && 
        e.payload.state && e.payload.state.prevPath && e.payload.state.prevPath !== '/rates') {
        
            yield put(ratesActions.doResumePulling());
    } else {
        yield put(ratesActions.doPausePulling());
    }
}

function* watchRouter() {
    yield takeLatest('@@router/LOCATION_CHANGE', onLocationChange);
}

// Default set of sagas
export default [
    fork(watchRouter)
]
