import React from 'react';

const GroceryForm=(props) =>  {
 // console.log(props.insertGroceries);
  return (
    <div>
    <form onSubmit={props.insertGroceries}>
      <label>Item</label>
      <input type="text" defaultValue={props.itemName} placeholder="Add items here..." onChange={props.handleItemNameChange}/>
      <label>Quantity</label>
      <input type="text" value={props.quantity} placeholder="Enter quantity here..."  onChange={props.handleQuantityChange}/>
      <input type="submit" value="Add Grocery" />
    </form>
    </div>
  );
}

export default GroceryForm;