//class component for hero get whole array of objects from serverthen render each object in the array as a card using map

import React, { Component } from 'react';

export default function GetCards(props) {
  console.log(props.cards)
  let mappedCards = (props.cards.map(elem => {
    return <div key={elem.id}>
      <ul>
        <li><h3>{elem.secretIdentity}</h3></li>
        <li>{elem.gender}</li>
        <li> {elem.superName}</li>
        <li>{elem.superPower}</li>
        <li>{elem.coreConflict}</li>
        <li>{elem.alignment}</li>
      </ul>
    </div>
  }))

  
  
    return (
      <div>{mappedCards}</div>
    )
  }





