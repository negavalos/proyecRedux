//ASYNC ACTIONS TYPES
export const API_CALL_REQUEST = 'API_CALL_REQUEST ';//WATCHER SAGA LISTENS
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS ';//DISPACHED BY WORKER SAGA
export const API_CALL_FAILURE = 'API_CALL_FAILURE ';//DISPACHED BY WORKER SAGA

export const login = (email, password)=>{
    return{
        type: API_CALL_REQUEST,
        payload: {
            request: {
                method: 'post',
                url: 'https://reqres.in/api/login',
                data: {
                    email: email,
                    password: password
                }
            }
        },
        okAction: API_CALL_SUCCESS,
        failAction: API_CALL_FAILURE
    }
}

/**
 * generic httpRequest action dispatcher
 */

export const httpRequest = (method, url, data) =>{
    return{
        type: API_CALL_REQUEST,
        payload: {
            request: {
                method: method,
                url: url,
                data: data
            },
            
            okAction: API_CALL_SUCCESS,
            failAction: API_CALL_FAILURE
        }
    }

}