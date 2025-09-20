import React from "react";
// import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import HomePage from "./screens/HomePage";
import About from "./screens/About";
import Account from "./screens/Account";
import Cart from "./screens/Cart";
import Checkout from "./screens/Checkout";
import Contact from "./screens/Contact";
import ErrorPage from "./screens/ErrorPage";
import Login from "./screens/Login";
import ProductDetails from "./screens/ProductDetails";
import Signup from "./screens/Signup";
import HomeNavbar from "./components/headers/HomeNavbar";
import Wishlist from "./screens/Wishlist";

import OtherNavbar from "./components/headers/OtherNavbar";
import Footer from "./components/footer";

import "../css/app.css";
import "../css/navbar.css";
import "../css/footer.css";
import "../css/product.css";

function App() {
  const location = useLocation();

  return (
    <>
      <HomeNavbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/productDetails">
          <ProductDetails />
        </Route>

        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/wishlist">
          <Wishlist />
        </Route>

        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>

        <Route path={"/errorPage"}>
          <ErrorPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
