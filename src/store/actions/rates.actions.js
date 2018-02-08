export const RATES_REQUEST = 'RATES_REQUEST';
export const RATES_RECEIVE = 'RATES_RECEIVE';
export const RATES_FAILURE = 'RATES_FAILURE';
export const RATES_REFRESH = 'RATES_REFRESH';
export const INVALIDATE_ERROR = 'INVALIDATE_ERROR';
export const RATES_REQUEST_PAUSE = 'RATES_REQUEST_PAUSE';
export const RATES_REQUEST_RESUME = 'RATES_REQUEST_RESUME';

function action(type, payload = {}) {
    return { type, ...payload }
}

export const requestRates = () => action(RATES_REQUEST);
export const refreshRates = () => action(RATES_REFRESH);
export const receiveRates = rates => action(RATES_RECEIVE, { rates, receivedAt: Date.now() });
export const failureRates = (error) => action(RATES_FAILURE, { error });
export const invalidateError = () => action(INVALIDATE_ERROR);
export const doPausePulling = () => action(RATES_REQUEST_PAUSE);
export const doResumePulling = () => action(RATES_REQUEST_RESUME);
