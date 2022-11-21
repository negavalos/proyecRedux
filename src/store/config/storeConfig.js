import {  createStore, compose,  applyMiddleware } from 'redux';
import  createSagaMiddleware  from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import { rootReducer } from '../reducers/rootReducer';
import { watcherSaga } from '../sagas/sagas';


export const createAppStore = () =>{
    let store =  createStore(rootReducer, composeWithDevTools());
    return store;
}

///Minuto 10.58
export const createAppAsyncStore = () =>{
    const sagaMiddleware = createSagaMiddleware();
    let store = createStore(
        rootReducer,
        
        compose(
            applyMiddleware(sagaMiddleware), composeWithDevTools()
         )
        )
        // we init the watcher saga
        sagaMiddleware.run(watcherSaga)
    return store;
}