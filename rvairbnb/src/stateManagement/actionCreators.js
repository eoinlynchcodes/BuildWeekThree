import * as actionTypes from './actionTypes';
import axios from 'axios';
import withAuth from '../axiosWithAuth';
import { useHistory } from 'react-router-dom';

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

export const postLandOwnerLogin = ({ username, password, is_land_owner}) => dispatch => {
    return axios.post(`${baseAPI}/api/auth/login`, {
        username,
        password,
        is_land_owner
    })
    .then(response => {
        console.log(response);
        // debugger
        localStorage.setItem('token', response.data.token)
        dispatch({
            type: actionTypes.LAND_OWNER_LOGIN,
            payload: response.data
        });
    })
    .catch(error => {
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

export const getListings = ({ is, owner_id, location, description, price_per_day, photo }) => dispatch => {
    axios.get(`${baseAPI}/api/listings`)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    })
}