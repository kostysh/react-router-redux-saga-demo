import { all } from 'redux-saga/effects'
import rootBtcRatesSagas from './rates.saga';
import rootRouterSagas from './router.saga';

export default function* rootSaga() {
    yield all([
        ...rootRouterSagas,
        ...rootBtcRatesSagas
    ]);
}
