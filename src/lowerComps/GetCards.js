//class component for hero get whole array of objects from serverthen render each object in the array as a card using map

import React from 'react';
import Delete from '../upperComps/Delete'
import Edit from '../upperComps/Edit'

export default function GetCards(props) {
  console.log('this', props.cards)
  let mappedCards = props.cards.map(elem => {
    console.log('id', elem.id)
    console.log(elem)
    return( 
    <div class='get-hero' key={elem.id}>
      
        <h2>{elem.secretIdentity}</h2>
        <p>Secret Identity:</p>
        <p>{elem.secretIdentity}</p>
        <Edit card={elem} cardsUp = {props.cardsUp} />  
         <p>Gender:</p>
         <p>{elem.gender}</p> 
        <Edit card={elem} cardsUp = {props.cardsUp} />  
                        {/* <button className="btn btn-sp" onClick={() => props.delete(elem)}>Delete</button> */}
        <p>Hero Name:</p>
        <p>{elem.superName}</p> 
        <Edit card={elem} cardsUp = {props.cardsUp} />  
                        {/* <button className="btn btn-sp" onClick={() => props.delete(elem.id)}>Delete</button> */}
        <p>Super Power:</p>                
        <p>{elem.superPower}</p> 
        <Edit card={elem} cardsUp = {props.cardsUp} />  
                        {/* <button className="btn btn-sp" onClick={() => props.delete(elem.id)}>Delete</button> */}
        <p>Core Conflict:</p>                
        <p>{elem.coreConflict}</p> 
        <Edit card={elem} cardsUp = {props.cardsUp} />  
                        {/* <button className="btn btn-sp" onClick={() => props.delete(elem.id)}>Delete</button> */}
        <p>Alignment:</p>                
        <p>{elem.alignment}</p>
              <Edit card={elem} cardsUp = {props.cardsUp} />   
            
                        {/* <button className='btn btn-sp'  onClick={() => props.delete(elem)}></button> */}
      
                                        {/* <button className="btn btn-sp" onClick={() => props.delete(elem.id)}>Delete</button> */}
      <button className="btn btn-sp" onClick={(result) => props.delete(elem.id)}>Delete</button>
    </div>
    )
  })

  
  
    return (
      <div class='cardAlign'>
      {mappedCards}
      </div>
    )
  }





