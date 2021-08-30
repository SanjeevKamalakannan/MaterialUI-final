import './App.css';
import React from 'react';
import Layout from './Layout';
import Login from './Login';
import Register from './Register';
import Products from './Products';
import Employees from './Employees';
import Addproduct from './Addproduct';
import Product from './Product';
import { BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import {ProductProvider} from './ProductContext'
function App() {
  return (
    <ProductProvider>
    <Router>
      <React.Fragment>
        <Switch>
            <Route exact path = "/" component = {Layout}/>
            <Route exact path = "/login" component = {Login}/>
            <Route exact path = "/register" component = {Register}/>
            <Route exact path = "/products" component = {Products}/>
            <Route exact path = "/employees" component = {Employees}/>
            <Route exact path = "/addproduct" component = {Addproduct}/>
            <Route exact path = "/product/:id" component = {Product}/>
        </Switch>
      </React.Fragment>
    </Router>
    </ProductProvider>
    
    
  );
}

export default App;
