import * as actionTypes from "./actionTypes";

const initialREGState = {
  id: "",
  username: "",
  password: "",
  is_land_owner: true
};
export function landOwnerRegisterAndLoginReducer(state = initialREGState, action) {
  switch (action.type) {
    case actionTypes.LAND_OWNER_REGISTER:
      return initialREGState;
      case actionTypes.LAND_OWNER_LOGIN:
          return {
            ...state,
            id: action.payload.id,
            username: "",
            password: "",
            is_land_owner: true
          };
    case actionTypes.CHANGE_INPUT:
      return {
        ...state,
        [action.payload.inputName]: action.payload.inputValue
      };
    default:
      return state;
  }
}

export function rvOwnerRegisterReducer(state = initialREGState, action) {
  switch (action.type) {
    case actionTypes.RV_OWNER_REGISTER:
        // The following line is incorrect.
      return state.concat(action.payload);
    default:
      return state;
  }
}

const initialListingState = {
  listings: []
};

export function listingsReducer(state = initialListingState, action){
  switch(action.type){
    case actionTypes.GET_LISTINGS:
      return {
      ...state, 
      listings: action.payload
      };
      case actionTypes.PUT_LISTING:
        return state;
      case actionTypes.DELETE_LISTING:
        return state;
      default:
        return state;
  }
}