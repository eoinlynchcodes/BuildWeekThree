import * as actionTypes from './actionTypes';

const initialOwnerState = {
    username: '',
    password: '',
    is_land_owner: ''
}
export function ownerLoginReducer(state = initialOwnerState, action){
    switch(actionTypes.type){
        case actionTypes.OWNER_LOGIN:
        return {
            ...state,
            [action.payload.inputName]: action.payload.inputValue
        };
        default: 
        return state;
    }
}