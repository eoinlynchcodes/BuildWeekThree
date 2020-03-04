import React from "react";
import styled from 'styled-components';

export const CardForListItem = props => {
  console.log(props.item);

  const dataForCard = props.item;
  const Card = styled.div`
  border: 1px solid black;
  border-radius: 12px;
  margin: 0 auto;
  `
  return (
    <Card>
      <h1>{dataForCard.location}</h1>
      <h1>{dataForCard.description}</h1>
      <h1>{dataForCard.price_per_day}</h1>
    </Card>
  );
};
