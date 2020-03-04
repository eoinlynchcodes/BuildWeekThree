import * as actionTypes from "./actionTypes";

const initialREGState = {
  username: "",
  password: "",
  is_land_owner: true
};
export function landOwnerRegisterAndLoginReducer(state = initialREGState, action) {
  switch (action.type) {
    case actionTypes.LAND_OWNER_REGISTER:
      return initialREGState;
      case actionTypes.LAND_OWNER_LOGIN:
          return initialREGState;
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
  id: null,
  owner_id: null,
  location: "",
  description: "",
  price_per_day: null,
  photo: ""
}

export function listingsReducer(state = initialListingState, action){

  switch(action.type){
    case actionTypes.GET_LISTINGS:
      return action.payload;
      default:
        return state;
  }
}