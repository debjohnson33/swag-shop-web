import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from '../product/product';

import HttpService from '../services/http-services';

const http = new HttpService();

class App extends Component {
  constructor(props) {
    super(props);
    this.loadData = this.loadData.bind(this);
    this.loadData();
  }

  loadData = () => {
    http.getProducts().then(products => {
      console.log(products);
    }, err => {

    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Swag Shop</h1>
        </header>
        <div className="container App-main">
          <div className="row">
            <Product className="col-sm-4" price="4.23" title="Cool Toy Gun" imgUrl="https://images-na.ssl-images-amazon.com/images/I/61IgIqKfWTL._SL1296_.jpg" />
            <Product className="col-sm-4" price="4.23" title="Cool Toy Gun" imgUrl="https://images-na.ssl-images-amazon.com/images/I/61IgIqKfWTL._SL1296_.jpg" />
            <Product className="col-sm-4" price="4.23" title="Cool Toy Gun" imgUrl="https://images-na.ssl-images-amazon.com/images/I/61IgIqKfWTL._SL1296_.jpg" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
