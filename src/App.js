import React, { Component } from "react";
import Products from "./Products";
import AddProduct from "./addProduct";

class App extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "Big Basket",
        place: "Mumbai",
        catagory: "Grocery",
        status: "Open",
      },
      {
        id: 2,
        name: "Fresh Chicken",
        place: "Pune",
        catagory: "Butcher",
        status: "Close",
      },
      {
        id: 3,
        name: "Big Bazar",
        place: "Thane",
        catagory: "Grocery",
        status: "Close",
      },
      {
        id: 4,
        name: "New Chicken",
        place: "Nagpur",
        catagory: "Butcher",
        status: "Open",
      },
    ],
  };
  addProduct = (product) => {
    product.id = Math.random();
    let products = [...this.state.products, product];
    this.setState({
      products: products,
    });
  };
  deleteProduct = (id) => {
    let products = this.state.products.filter((product) => {
      return product.id !== id;
    });
    this.setState({
      products: products,
    });
  };
  updateProduct = (product, index) => {
    const state = [...this.state.products];
    let currentProduct = { ...state[index] };
    currentProduct = product;
    state[index] = currentProduct;
    this.setState({
      products: state,
    });
  };
  render() {
    return (
      <div style={{ backgroundColor: "#b6edb6" }} className="crud-app">
        <header className="app-header">
          <h1 className="app-title">Shop List</h1>
        </header>
        <div className="container pt-5">
          <AddProduct addProduct={this.addProduct} />
          <Products
            products={this.state.products}
            deleteProduct={this.deleteProduct}
            updateProduct={this.updateProduct}
          />
        </div>
      </div>
    );
  }
}

export default App;
