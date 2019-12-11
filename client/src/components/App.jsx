import React, { Component } from 'react';
import GroceryStaticData from './GroceryStaticData.jsx';
import GroceryForm from './GroceryForm.jsx';
import GroceryList from './GroceryList.jsx';
//import GroceryItem from './GroceryItem.jsx';
import { ajax } from 'jquery';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      itemName: '',
      quantity: ''
    }
    this.handleItemNameChange = this.handleItemNameChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.getGroceries = this.getGroceries.bind(this);
    this.addGrocery = this.addGrocery.bind(this);
    this.insertGroceries=this.insertGroceries.bind(this);
  }



  handleItemNameChange(event) {
    //console.log(event.target.value);
    event.preventDefault();
    this.setState({
      itemName: event.target.value
    });
  }

  handleQuantityChange(event) {
    console.log(event.target.value);
    event.preventDefault();
    this.setState({
      quantity: event.target.value
    });
  }

  componentDidMount() {
    //console.log("in comonent did mount");
    this.getGroceries();
    this.addGrocery();
  }

  getGroceries() {
    //console.log("In GET method");
    ajax({
      url: '/api/groceries',
      method: 'GET',
      success: item => {
        //console.log(item[0]);
        this.setState({ items: item });
      }

    });
  }
  insertGroceries(e) {
   e.preventDefault();
    var obj={itemName: this.state.itemName , quantity : this.state.quantity};
    //console.log(obj);
    // this.state.items.push({ itemName: this.state.itemName, quantity: this.state.quantity });
    // console.log(this.state.items);
    // var itemArray = items;
    // console.log(obj);
    this.addGrocery(obj);

  }

  addGrocery(item) {
    console.log(item);
    ajax({
      url: '/api/item',
      method: 'POST',
      data: item,
      success: this.getGroceries
      //this.getGroceries
    });

    //  this.state.items.push({itemName: this.state.itemName , quantity : this.state.quantity});
    //  this.setState({
    //    itemName: '',
    //    quantity: ''
    //  });
    //event.preventDefault();
  }


  render() {
    return (
      <div>
        <GroceryStaticData />

        <GroceryForm itemName={this.state.itemName} quantity={this.state.quantity} handleItemNameChange={this.handleItemNameChange} handleQuantityChange={this.handleQuantityChange} addGrocery={this.addGrocery} insertGroceries={this.insertGroceries}/>

        <GroceryList items={this.state.items} />
      </div>

    );
  }
}


export default App;