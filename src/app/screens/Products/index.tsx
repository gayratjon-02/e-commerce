import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Detail from "./detail";
import "../../../css/products.css";

export default function ProductsPage() {
  const { path } = useRouteMatch(); // masalan: "/products"

  return (
    <div className="products-page">
      <Switch>
        {/* product detail sahifasi */}
        <Route path={`${path}/:productId`}>
          <Detail />
        </Route>

        {/* productlar ro‘yxati sahifasi */}
        <Route exact path={path}>
          <h2>All Products Page!</h2>
          {/* shu yerda productlar list componentini joylashtirasiz */}
        </Route>
      </Switch>
    </div>
  );
}
