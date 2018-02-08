import {
    RATES_REQUEST,
    RATES_RECEIVE,
    RATES_FAILURE,
    RATES_REQUEST_PAUSE,
    RATES_REQUEST_RESUME,
    INVALIDATE_ERROR
} from '../actions';

const initialState = {
    isFetching: false,
    records: [],
    receivedAt: null,
    pausePulling: false,
    errorMessage: null
};

export const reduce = (state = initialState, action = {}) => {

    switch (action.type) {
        
        case RATES_REQUEST:
            return { ...state, isFetching: true, errorMessage: null };

        case RATES_RECEIVE:
            return {
                ...state, 
                isFetching: false, 
                records: action.rates, 
                receivedAt: action.receivedAt, 
                errorMessage: null
            };

        case RATES_FAILURE:
            return { ...state, isFetching: false, errorMessage: action.error.message };

        case RATES_REQUEST_PAUSE:
            return { ...state, isFetching: false, pausePulling: true };

        case RATES_REQUEST_RESUME:
            return { ...state, pausePulling: false };

        case INVALIDATE_ERROR:
            return { ...state, errorMessage: null };
        
        default:
            return state;
    }
};
