import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import packageConfig from '../../package.json';

import rootReducer from './reducers';
import rootSaga from './sagas';

const persistConfig = {
    debug: process.env.NODE_ENV !== 'production',
    key: packageConfig.name,
    storage,
    stateReconciler: autoMergeLevel2,
    blacklist: ['router'] // exclude some states from the store
};

export const history = createHistory();

export function configureStore(initialState, rehydrated = () => {}) {    
    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? 
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : 
        compose;
    const combinedReducers = combineReducers({
        router: routerReducer,
        ...rootReducer
    });
    const persistedReducer = persistReducer(persistConfig, combinedReducers);

    const store = createStore(
        persistedReducer,
        initialState,
        composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
    );

    const persistor = persistStore(store, null, rehydrated);

    sagaMiddleware.run(rootSaga);

    return { store, persistor };
}
