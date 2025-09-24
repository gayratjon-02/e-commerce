import Divider from "../../components/divider";
import CategoryMain from "./category-main";
import FlashSales from "./flash-sales";
import CategoryList from "./category-list";
import BestSellingProducts from "./best-selling-products";
import Advertaisment from "./advertaisment";
import ExploreProducts from "./explore-products";
import NewArrivalProducts from "./new-arrival-products";
import CustomerService from "./customer-service";
import { Container } from "@mui/material";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setFlashSales } from "./slice";
import { retrieveFlashSales } from "./selector";

import "../../../css/home.css";
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";

/**  REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setFlashSales: (data: Product[]) => dispatch(setFlashSales(data)),
});

export default function HomePage() {
  const { setFlashSales } = actionDispatch(useDispatch());

  useEffect(() => {
    // Backend fetch data
    const product = new ProductService();
    product
      .getProducts({
        page: 1,
        limit: 4,
        order: "latest",
        productCollection: ProductCollection.PHONE,
      })
      .then((data) => {
        console.log("data", data);
        setFlashSales(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="home-page">
      <Container className="home-container">
        <CategoryMain />
        <FlashSales />
        <Divider width="2" height="1" bg="#d9d9d9" />
        <CategoryList />
        <Divider width="2" height="1" bg="#d9d9d9" />
        <BestSellingProducts />
        <Advertaisment />
        <ExploreProducts />
        <NewArrivalProducts />
        <CustomerService />
      </Container>
    </div>
  );
}
