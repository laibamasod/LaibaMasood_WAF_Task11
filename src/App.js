import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import OrderConfirm from "./components/Orderconfirm";
import Error from "./components/Error";
import Products from "./components/Product";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProducts from "./components/NewProducts";
import User from "./components/User";
import { UserDataProvider } from './UserDataContext';

function App() {
  return (
    <div className="App">
       <UserDataProvider>
      {/* part of exam : */}
      {/* Prop drilling from parent to grandchild where child does not need the state of the parent */}
      {/* to solve the mess of prop drilling , useContext  */}
      <Router>
        <Navbar  />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<User />} />
          <Route path="/order-confirmation" element={<OrderConfirm />} />
          <Route path="/products" element={<Products />} >
            {/* <Route index  element={ <NewProducts productData={productData} />} /> */}
            {/* <Route path='featured' element={ <FeaturedProducts />} /> */}
            <Route path='new' element={ <NewProducts  />} />
            </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      </UserDataProvider>
    </div>
  );
}
export default App;
