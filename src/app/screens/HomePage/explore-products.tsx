import {
  Badge,
  Box,
  Button,
  Container,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { NavLink, useHistory } from "react-router-dom";
import { createSelector, Dispatch } from "@reduxjs/toolkit";
import { retrieveMixedProducts } from "./selector";
import { CartItem } from "../../../lib/types/search";
import { useDispatch, useSelector } from "react-redux";
import { serverApi } from "../../../lib/config";
import { useEffect } from "react";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import { setMixedProducts } from "./slice";

/** === REDUX SELECTOR === */
const mixedProductsRetriever = createSelector(
  retrieveMixedProducts,
  (mixedProducts) => mixedProducts
);
// === REDUX DISPATCH HELPER ===
const actionDispatch = (dispatch: Dispatch) => ({
  setMixedProducts: (data: any) => dispatch(setMixedProducts(data)),
});

interface FlashSalesProps {
  onAdd: (item: CartItem) => void;
}

export default function ExploreProducts(props: FlashSalesProps) {
  const { onAdd } = props;
  const history = useHistory();
  const { setMixedProducts } = actionDispatch(useDispatch());
  const mixedProducts = useSelector(mixedProductsRetriever);

  const chooseProductHandler = (id: string) => {
    history.push(`/products/${id}`);
  };

  useEffect(() => {
    const categories = Object.values(ProductCollection);
    const product = new ProductService();
    const randomCategories = Array.from(
      { length: 8 },
      () => categories[Math.floor(Math.random() * categories.length)]
    );

    //  fetch each

    Promise.all(
      randomCategories.map((cat) =>
        product.getProducts({
          page: 1,
          limit: 1, // har kategoriyadan 1 ta
          order: "createdAt",
          productCollection: cat,
          search: "",
        })
      )
    )
      .then((data) => {
        const mixed = data.flatMap((r) => r[0] || []);
        setMixedProducts(mixed);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Stack className="explore-products-main">
      <Stack className="flash-sales-top">
        <Stack
          className="sales-discount"
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Stack className="discount-left" flexDirection={"column"}>
            <Stack
              className="discount-today"
              flexDirection={"row"}
              alignItems={"center"}
            >
              <div className="discount-red"></div>
              <span>Our Products</span>
            </Stack>

            <Stack className="discount-date-wrapper" flexDirection={"row"}>
              <strong>Random Products</strong>
            </Stack>
          </Stack>

          <Stack className="discount-right" flexDirection={"row"}>
            <ArrowBackIcon
              sx={{
                backgroundColor: " rgba(255, 255, 255, 0.619)",
                borderRadius: "50%",
              }}
            />
            <ArrowForwardIcon
              sx={{
                backgroundColor: " rgba(255, 255, 255, 0.619)",
                borderRadius: "50%",
              }}
            />
          </Stack>
        </Stack>
      </Stack>

      {/* Test */}
      <div className="explore-products-wrapper">
        <Stack
          className="products-wrapper"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          gap={3}
        >
          {mixedProducts.length > 0 ? (
            mixedProducts.map((ele) => {
              const imagePath = ele.productImages?.length
                ? `${serverApi}/${ele.productImages[0]}`
                : "/productsImg/gamepad-2.png";

              return (
                <Stack
                  key={ele._id}
                  className="product-box-main"
                  onClick={() => chooseProductHandler(ele._id)}
                >
                  {/* DISCOUNT */}
                  <span className="discount-percentage">-40%</span>

                  {/* IMAGE */}
                  <img
                    className="product-images"
                    src={imagePath}
                    alt={ele.productName}
                  />

                  {/* LIKE + VIEW */}
                  <Stack
                    className="like-wiew"
                    flexDirection={"column"}
                    justifyContent="space-between"
                  >
                    <Badge
                      badgeContent={ele.productLikes}
                      sx={{
                        "& .MuiBadge-badge": {
                          backgroundColor: "#ff5500bf",
                          color: "#fff",
                        },
                      }}
                    >
                      <FavoriteBorderIcon className="like-view-icon" />
                    </Badge>

                    <Badge
                      badgeContent={ele.productViews}
                      sx={{
                        "& .MuiBadge-badge": {
                          backgroundColor: "#ff5500bf",
                          color: "#fff",
                        },
                      }}
                    >
                      <RemoveRedEyeOutlinedIcon className="like-view-icon" />
                    </Badge>
                  </Stack>

                  {/* PRODUCT NAME */}
                  <Typography
                    variant="h6"
                    component="h2"
                    className="productName"
                  >
                    {ele.productName}
                  </Typography>

                  {/* PRICE + BUTTON */}
                  <Stack
                    className="product-price"
                    flexDirection="row"
                    alignItems="center"
                    gap={2}
                  >
                    <Box className="exact-price">${ele.productPrice}</Box>
                    <Box className="discount-price">$144</Box>

                    <Typography
                      variant="h3"
                      component="h2"
                      className="sold-count"
                      sx={{ cursor: "pointer", marginLeft: "auto" }}
                      onClick={(e: React.MouseEvent<HTMLHeadingElement>) => {
                        e.stopPropagation();
                        onAdd({
                          _id: ele._id,
                          quantity: 1,
                          name: ele.productName,
                          price: ele.productPrice,
                          image: ele.productImages[0],
                        });
                      }}
                    >
                      PURCHASE
                    </Typography>
                  </Stack>
                </Stack>
              );
            })
          ) : (
            <Typography className="no-products">No products found</Typography>
          )}
        </Stack>
      </div>

      <Stack
        className="view-all-products"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <NavLink className={"view-all-butt"} to="/products">
          View All Products
        </NavLink>
      </Stack>
    </Stack>
  );
}
