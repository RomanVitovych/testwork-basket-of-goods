import React, { Component } from 'react';

import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Cart from './Components/Cart/Cart';

import productsData from './db/products.json';
import sizesData from './db/sizes.json';
import './App.css';


class App extends Component {
  state = {
    isCartOpen: false,
    order: [],
    products: productsData,
    sizes: sizesData,
  };
  
  
  toggleCart = () => {
    this.setState(prevStatus => ({
      isCartOpen: !prevStatus.isCartOpen
    }));
  };

  handleChooseSize = (value) => {
    const sizeItem = (this.state.products
      .map(el => el.availableSizes
        .includes(value)));
    console.log(sizeItem);
  };

  addToCart = id => {
    const productItem = this.state.products.find(product => product.id === id);
    const productOrder = this.state.order.find(orderItem => orderItem.id === id);
    if (productOrder) {
      this.setState(prev => ({
        order: prev.order.map(orderItem => (orderItem.id === id
          ? { ...orderItem, count: orderItem.count + 1 }
          : orderItem))
      }));
    } else {      
      productItem.count = 1;
      productItem.otherCount = 0;
      this.setState(prev => ({
        order: [...prev.order, productItem]
      }));
    };
  };

  removeFromCart = id => {
    const result = this.state.order.filter(orderItem => orderItem.id !== id);
    this.setState({ order: result });
  };

  handleChange = (e, id) => {
    this.setState(prev => ({
      order: prev.order.map(orderItem => (orderItem.id === id
        ? { ...orderItem, otherCount: e.target.value }
        : orderItem))
      }));
      if (e.target.value < 0) {
        alert('Please enter the correct number!!!');
        e.target.value = 0;
      }
    };

  handleSortNameA = (order) => {
    const nameA = order.sort((a, b) => {
      if (a.title < b.title) {
        return -1
      }
      if (a.title > b.title) {
        return 1
      }
      return 0
    }
    );
    this.setState({ order: nameA });
  };
  handleSortNameB = (order) => {
    const nameB = order.sort((a, b) => {
      if (a.title > b.title) {
        return -1
      }
      if (a.title < b.title) {
        return 1
      }
      return 0
    }
    );
    this.setState({ order: nameB });
  };

  handleSortPriceA = (order,) => {
    const priceA = order.sort((a, b) => a.price - b.price);
    this.setState({ order: priceA });
  };
  handleSortPriceB = (order) => {
    const priceB = order.sort((a, b) => b.price - a.price);
    this.setState({ order: priceB });
  };

  handleSortQuantityA = (order) => {
    const quantityA = order.sort((a, b) => (a.count + a.otherCount) - (b.count + b.otherCount));
    this.setState({ order: quantityA });
  };
  handleSortQuantityB = (order) => {
    const quantityB = order.sort((a, b) => (b.count + b.otherCount) - (a.count + a.otherCount));
    this.setState({ order: quantityB });
  };
  

  render() {
    const { isCartOpen, order, products, sizes } = this.state;
    return (
      <>
        <Header />
        <Main
          sizes={sizes}
          products={products}
          addToCart={this.addToCart}
          onChooseSize={this.handleChooseSize}
        />
        <Cart
          cartStatus={isCartOpen}
          onToggle={this.toggleCart}
          order={order}
          removeFromCart={this.removeFromCart}
          onHandleChange={this.handleChange}
          onSortByNameA={this.handleSortNameA}
          onSortByNameB={this.handleSortNameB}
          onSortByPriceA={this.handleSortPriceA}
          onSortByPriceB={this.handleSortPriceB}
          onSortByQuantityA={this.handleSortQuantityA}
          onSortByQuantityB={this.handleSortQuantityB}
        />
      </>
    );
  }
}

export default App;



