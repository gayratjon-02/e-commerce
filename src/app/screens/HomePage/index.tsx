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
import { setBestSellingProducts, setFlashSales } from "./slice";

import "../../../css/home.css";
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import ProductsPage from "../Products";
import { CartItem } from "../../../lib/types/search";

/**  REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setFlashSales: (data: Product[]) => dispatch(setFlashSales(data)),
  setBestSellingProducts: (data: Product[]) =>
    dispatch(setBestSellingProducts(data)),
});

interface HomePageProps {
  onAdd: (item: CartItem) => void;
  onRemove: (item: CartItem) => void;
  onDelete: (item: CartItem) => void;
  onDeleteAll: () => void;
}

export default function HomePage(props: HomePageProps) {
  const { setFlashSales } = actionDispatch(useDispatch());
  const { setBestSellingProducts } = actionDispatch(useDispatch());
  const { onAdd, onRemove, onDelete, onDeleteAll } = props;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const product = new ProductService();

        const [latest, bestSelling] = await Promise.all([
          product.getProducts({
            page: 1,
            limit: 4,
            order: "latest",
            productCollection: ProductCollection.PHONE,
          }),
          product.getProducts({
            page: 1,
            limit: 4,
            order: "bySold",
            productCollection: ProductCollection.PHONE,
          }),
        ]);

        setFlashSales(latest);
        setBestSellingProducts(bestSelling);
      } catch (err) {
        console.error("Product fetch error:", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="home-page">
      <Container className="home-container">
        <CategoryMain />
        <FlashSales onAdd={onAdd} />
        <Divider width="2" height="1" bg="#d9d9d9" />
        <CategoryList />
        <Divider width="2" height="1" bg="#d9d9d9" />
        <BestSellingProducts onAdd={onAdd} />
        <Advertaisment />
        <ExploreProducts />
        <NewArrivalProducts />
        <CustomerService />
      </Container>
    </div>
  );
}
