import React, { useEffect, useState } from 'react';
import axios from 'axios';
import withAuth from '../axiosWithAuth';
import { CardForListItem } from './CardForListItem';
// Here to line 42 is for when refactoring to Redux.

// import { connect } from 'react-redux';
// import * as actionCreators from '../stateManagement/actionCreators';


// function Listings({
//     getListings, 
//     fullListData
// }){

//     useEffect(() => {
//         getListings();
//     }, [getListings])

//     return(
//         <div>
            
//             <h1>Data:</h1>
            
//             {
//                 fullListData.map((item, key) => {
//                     return item, key;
//                 })
//             }

//         </div>
//     )
// }

// function mapStateToProps(state){
//     console.log(state);
//     fullListData: state.fullListData
// }

// export default connect(
//     mapStateToProps,
//     actionCreators
// )(Listings)


export default function Listings(){

    const [ allListings, setAllListings ] = useState([]);
    const baseAPI = 'https://rvairbnb.herokuapp.com';

    useEffect(() => {
        withAuth().get(`${baseAPI}/api/listings`)
        .then(response => {
            console.log(response.data);
            setAllListings(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])

    return (
        <div>
            {allListings.map((item, key) => {
                    console.log(item, key)
                    return <CardForListItem item={item} key={key}/>;
                })
            }

        </div>
    )
}