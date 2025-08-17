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
import "../../../css/home.css";

export default function HomePage() {
  return (
    <div className="home-page">
      <Container className="home-container">
        <CategoryMain />
        <FlashSales />
        <Divider width="2" height="1" bg="#d9d9d9" />
        <CategoryList />
        <BestSellingProducts />
        <Advertaisment />
        <ExploreProducts />
        <NewArrivalProducts />
        <CustomerService />
      </Container>
    </div>
  );
}
