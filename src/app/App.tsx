import React, { useState } from "react";
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

import ProductsPage from "./screens/Products";
import { CartItem } from "../lib/types/search";
import useBasket from "./hooks/useBasket";
import "../css/app.css";
import "../css/navbar.css";
import "../css/footer.css";
import "../css/products.css";

function App() {
  const location = useLocation();
  const { cartItems, onAdd, onRemove, onDelete, onDeleteAll } = useBasket();

  return (
    <>
      <HomeNavbar
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
        onDelete={onDelete}
        onDeleteAll={onDeleteAll}
      />
      <Switch>
        <Route exact path="/">
          <HomePage
            onAdd={onAdd}
            onRemove={onRemove}
            onDelete={onDelete}
            onDeleteAll={onDeleteAll}
          />
        </Route>

        <Route path="/products">
          <ProductsPage
            onAdd={onAdd}
            onRemove={onRemove}
            onDelete={onDelete}
            onDeleteAll={onDeleteAll}
          />
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
