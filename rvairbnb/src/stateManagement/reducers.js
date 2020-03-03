import * as actionTypes from "./actionTypes";

const initialREGState = {
  username: "",
  password: "",
  is_land_owner: true
};
export function landOwnerRegisterReducer(state = initialREGState, action) {
  switch (action.type) {
    case actionTypes.LAND_OWNER_REGISTER:
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
      return state.concat(action.payload);
    default:
      return state;
  }
}

// export function regFormChangeHandlerReducer(state = initialREGState, action){
//     switch(action.type){
//         case actionTypes.CHANGE_INPUT:
//         return {
//             ...state,
//             [action.payload.inputName]: action.payload.inputValue
//         };
//         default:
//             return state;
//     }
// }
