import React from 'react';
import GroceryItem from './GroceryItem.jsx';

const  GroceryList= (props)  => {
  //console.log("props in grocery list" ,props.items);
  return (
    <div>

    {
      props.items.map( (list) => { return <GroceryItem singleItem={list.item} singleQuantity={list.quantity} /> } )}


      </div>

  )

}
export default GroceryList;