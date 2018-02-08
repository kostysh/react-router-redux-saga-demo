import Loadable from 'react-loadable';
import Loading from '../../components/Loading'

const LoadableRates = Loadable({
    loader: () => import('./Rates'),
    loading: Loading,
});

export const route = {
    path: '/rates',
    exact: true,
    label: 'BTC rates',
    component: LoadableRates
};
