import * as actionTypes from './actionTypes';
import axios from 'axios';

const baseAPI = 'https://rvairbnb.herokuapp.com';

export const postLandOwnerAccount = ({ username, password, is_land_owner }) => dispatch => {
    return axios.post(`${baseAPI}/api/auth/register`, {
        username, 
        password, 
        is_land_owner
    })
    .then(response => {
        dispatch({
            type: actionTypes.LAND_OWNER_REGISTER,
            payload: response.data
        });

    })
    .catch((error) => {
       // could put a dispath here and manage errors correctly.
       console.log(error);
    })
}

export const postRVOwnerAccount = ({ username, password, is_land_owner }) => dispatch => {
    axios.post(`${baseAPI}/api/auth/register`, {
        username,
        password,
        is_land_owner
    })
    .then(response => {
        dispatch({
            type: actionTypes.RV_OWNER_REGISTER,
            payload: response.data
        });
    })
}

export const changeInput = ({inputName, inputValue}) => dispatch =>{
        dispatch({
        type: actionTypes.CHANGE_INPUT,
        payload: { inputName, inputValue}
        })
}