import React, { useState } from "react";
import { useParams } from 'react-router-dom';


export default function EditForm() {

    const { listingID } = useParams();
 
    console.log(listingID);

    

const [ inputs, setInputs ] = useState()

  return (
    <div>
      {/* <form>
        Form to Edit data.
        <label>Location</label>
        <input
          placeholder="Location"
          name="location"
        //   onChange={onChange}
          // value={dataForCard.location}
        />
        <label>Description:</label>
        <input
          placeholder="Description:"
          name="description"
          onChange={onChange}
          // value={dataForCard.description}
        />
        <label>Price:</label>
        <input
          placeholder="Price:"
          name="price_per_day"
          onChange={onChange}
          // value={dataForCard.price_per_day}
        />
        <Button onClick={editThis}>Edit</Button>
      </form> */}
    </div>
  );
}
