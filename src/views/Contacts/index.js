import Loadable from 'react-loadable';
import Loading from '../../components/Loading'

const LoadableContacts = Loadable({
    loader: () => import('./Contacts'),
    loading: Loading,
});

export const route = {
    path: '/contacts',
    exact: true,
    label: 'Contacts',
    component: LoadableContacts
};
