// import React, { useState } from "react";
// import styled from "styled-components";
// import { useHistory } from "react-router-dom";
// import { connect } from "react-redux";

// export const CardForListItem = props => {
//   const baseAPI = "https://rvairbnb.herokuapp.com";
//   const history = useHistory();
//   const dataForCard = props.item;
//   const Card = styled.div`
//     border: 1px solid black;
//     border-radius: 12px;
//     margin: 0 auto;
//   `;

//   const Button = styled.button`
//     border: 1px solid red;
//   `;

//   const deleteThis = event => {
//     console.log(event);
//     // Edit then refactor to use Redux
//   };

//   // const editThis = event => {
//   //   // const idToUse = localStorage.setItem('listingID', dataForCard.id);
//   //   withAuth()
//   //     .put(`${baseAPI}/api/listings/4`, editData)
//   //     .then(response => {
//   //       history.push("/editForm");
//   //     })
//   //     .catch(error => {
//   //       console.log(error);
//   //     });
//   // };

//   const [editData, setEditData] = useState({
//     location: "",
//     description: "",
//     price_per_day: "",
//     photo: ""
//   });

//   // const onChange = event => {
//   //   setEditData({
//   //     ...editData,
//   //     [event.target.name]: event.target.value
//   //   });
//   // };

  

//   return (
//     <div>
//       <Card>
//         <h1>{dataForCard.location}</h1>
//         <h1>{dataForCard.description}</h1>
//         <h1>{dataForCard.price_per_day}</h1>
//         <Button onClick={event => deleteThis(event)}>Delete</Button>
//         <Button onClick={() => history.push(`/editForm/${dataForCard.id}`)}>Edit</Button>
//       </Card>
//     </div>
//   );
// };

// // function mapStateToProps(state){
// //   return {

// //   }
// // }

// // export default connect(
// //   mapStateToProps,
// //   actionCreators,
// //   props
// // )(CardForListItem);
