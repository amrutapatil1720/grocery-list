import React from 'react';

const GroceryItem = (props) => {
  //console.log("props in grocery item", props);
  return (
    <div>
      {props.singleItem}:{props.singleQuantity}
    </div>
  )


}


export default GroceryItem;