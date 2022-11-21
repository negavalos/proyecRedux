import { SET_VISIBILITY_FILTER } from "../accions/actions";

// initial values for filterstate
let initialState = 'SHOW_ALL'

export const filterReducer = (state=initialState, action) =>{
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.payload.filter

        default:
            return state;
    }
} 