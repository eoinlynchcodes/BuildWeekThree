import React, { useEffect } from 'react';

function Listings({
    getListings
}){

    useEffect(() => {
        getListings();
    }, [getListings])

    return(
        <div>


        </div>
    )
}

function mapStateToProps(state){
    console.log(state);

}

export default connect(
    mapStateToProps,
    actionCreato
)