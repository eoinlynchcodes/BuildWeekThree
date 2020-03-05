import React, { useState } from 'react';
import withAuth from '../axiosWithAuth';
import { useHistory } from 'react-router-dom';

export default function AddListingForm(){

    const baseAPI = 'https://rvairbnb.herokuapp.com';
    const history = useHistory();

    const [ addListing, setAddListing ] = useState({
        location: '',
        description: '',
        price_per_day: '',
        photo: ''
    })


    const onSubmit = event => {
        event.preventDefault();
        console.log(addListing)
        withAuth().post(`${baseAPI}/api/listings`, addListing)
        .then(response => {
            console.log(response.data);
            setAddListing(response.data)
            history.push('/seeAllListings');
        })
        .catch(error => {
            console.log(error);
        })
    }

    const onChange = event => {
        setAddListing({
            ...addListing,
            [event.target.name]: event.target.value
        });
    };

    return(
        <div>
            <form onSubmit={onSubmit}>
                <label>Location:</label>
                <input 
                placeholder="Location"
                name="location"
                onChange={onChange}
                value={addListing.location}
                />

                <label>Description:</label>
                <input 
                placeholder="Description:"
                name="description"
                onChange={onChange}
                value={addListing.description}
                />

                <label>Price Per Day:</label>
                <input 
                placeholder="Price Per Day:"
                type="number"
                name="price_per_day"
                onChange={onChange}
                value={addListing.price_per_day}
                />

                <label>Photos:</label>
                <input 
                placeholder="Photos:"
                type="text"
                name="photo"
                onChange={onChange}
                value={addListing.photo}
                />
                <button type="submit">Add Listing</button>
            </form>
        </div>
    )
}