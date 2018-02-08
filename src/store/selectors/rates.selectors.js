import { createSelector } from 'reselect';

export const isFetching = state => !!state.rates.isFetching;
export const ratesRecordsRaw = state => state.rates.records;
export const ratesRecords = createSelector(
    ratesRecordsRaw,
    ratesObj => ratesObj ? Object.keys(ratesObj).map(label => ({label, ...ratesObj[label]})) : []
);
export const usdRate = createSelector(
    ratesRecordsRaw,
    ratesObj => ratesObj ? ratesObj['USD'] : null
);
export const lastUpdated = state => state.rates.receivedAt;
export const errorMessage = state => state.rates.errorMessage;
export const pausePulling = state => state.rates.pausePulling;
