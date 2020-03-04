import React from "react";

export const CardForListItem = props => {
  console.log(props.item);

  const dataForCard = props.item;

  return (
    <div>
      <h1>{dataForCard.location}</h1>
      <h1>{dataForCard.description}</h1>
      <h1>{dataForCard.price_per_day}</h1>
    </div>
  );
};
