import * as actionTypes from './actionTypes';
import axios from 'axios';

const baseAPI = 'https://rvairbnb.herokuapp.com';

export const ownerRegister = ({ username, password, is_land_owner }) => dispatch => {
    axios
    ,post(`baseAPI/api/auth/register`, {
        username, 
        password, 
        is_land_owner
    })
    .then((response) => {
        dispatch({
            type: actionTypes.OWNER_REGISTER,
            payload: response.data
        });
    })
    .catch((error) => {
       // could put a dispath here and manage errors correctly.
       console.log(error);
    })
}


export const ownerLogin = () => dispatch => {
    axios
    .post(`baseAPI/api/auth/login`, { 
        username, 
        password
    })
    .then((response) => {
        dispatch({
            type: actionTypes.OWNER_LOGIN,
            payload: response.data
        })
    })
    .catch(error => {
        console.log(error);
    })
}
