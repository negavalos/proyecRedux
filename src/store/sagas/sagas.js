import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { API_CALL_REQUEST } from '../accions/asyncActions';

// watcher Saga
// listens the API_CALL_REQUEST actions
export  function* watcherSaga(){
    //listens the action and start a worker saga
    yield takeLatest(API_CALL_REQUEST, workerSaga)
}

// create worker saga
//is called from watcher saga, does the login and dispaches an action
export function* workerSaga(action){
    try {
        const response = yield call(fetchHttp(action.payload.request))
        //generate token from response 
        const token = response.data.token;
        yield put({
            type: action.payload.okAction, // API_CALL_SUCCESS
            payload: {
                token: token
            }
        });
    } catch (error) {
        yield put({
            type: action.payload.failAction,//API_CALL_FAILURE
            payload: {
                error: error
            }
        })
    }
}
function fetchHttp(request) {
    return function(){
        return(axios(request))
    }
}