import React, { useState, MouseEvent, useEffect } from "react";
import {
  Stack,
  Box,
  Breadcrumbs,
  IconButton,
  TextField,
  Button,
  Table,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { NavLink, useParams } from "react-router-dom";
import Divider from "../../components/divider";
import { createSelector, Dispatch } from "@reduxjs/toolkit";
import { Product } from "../../../lib/types/product";
import { setChosenProducts, setSeller } from "./slice";
import { retrieveChosenProducts, retrieveSeller } from "./selector";
import ProductService from "../../services/ProductService";
import { Member } from "../../../lib/types/member";
import { useDispatch, useSelector } from "react-redux";
import { serverApi } from "../../../lib/config";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setSeller: (data: Member) => dispatch(setSeller(data)),
  setChosenProducts: (data: Product) => dispatch(setChosenProducts(data)),
});

const chosenProductretriever = createSelector(
  retrieveChosenProducts,
  (chosenProduct) => ({
    chosenProduct,
  })
);

const sellerretriever = createSelector(retrieveSeller, (seller) => ({
  seller,
}));

export default function Detail() {
  const [quantity, setQuantity] = useState<number>(2);
  const { productId } = useParams<{ productId: string }>();
  const { chosenProduct } = useSelector(chosenProductretriever);
  const { setChosenProducts } = actionDispatch(useDispatch());

  useEffect(() => {
    const product = new ProductService();
    product
      .getProduct(productId)
      .then((data) => setChosenProducts(data))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.info("Breadcrumb clicked");
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  if (!chosenProduct) return null;
  return (
    <Stack className="products-detail">
      {/* ======= Breadcrumbs ======= */}
      <Stack className="error-details">
        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/products/:id">Details</NavLink>
          </Breadcrumbs>
        </div>
      </Stack>

      {/* ======= Main Detail Section ======= */}

      {chosenProduct?.productImages.map((ele: string, index: number) => {
        const imagePath = `${serverApi}/${ele}`;
        return (
          <Stack className="product-detail-box" flexDirection="row">
            {/* === Left image area === */}
            <Stack
              className="detail-img-box"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Stack
                className="detail-box-small"
                justifyContent="space-between"
              >
                {[
                  "61d2f96992b57c0004c64748 (1).png",
                  "14Promax.png",
                  "17ProMax.png",
                  "14Promax.png",
                ].map((img, idx) => (
                  <Box key={idx} className="small-box">
                    <img
                      className="detail-img"
                      src={imagePath}
                      alt={`small-${idx}`}
                    />
                  </Box>
                ))}
              </Stack>

              <Stack className="detail-box-big">
                <Box className="main-img-box">
                  <img
                    className="detail-big-img"
                    src={imagePath}
                    alt="product-main"
                  />
                </Box>
              </Stack>
            </Stack>

            {/* === Right description area === */}
            <Stack className="product-details-wrapper">
              <Stack className="detail-desc">
                <Box className="product-name">{chosenProduct?.productName}</Box>

                <Stack
                  className="product-collection"
                  flexDirection="row"
                  justifyContent="space-evenly"
                  alignItems="center"
                >
                  <Box className="detail-collection">Category</Box>
                  <Divider width="2" height="1" bg="#d9d9d9" />
                  <Box className="detail-collection-text">
                    {chosenProduct?.productCollection}
                  </Box>
                </Stack>

                <Stack className="price-desc">
                  <Box className="detail-price">
                    ${chosenProduct.productPrice}
                  </Box>
                  <Box className="detail-des">{chosenProduct.productDesc}</Box>
                </Stack>

                <Box className="divider-detail" mt={4}>
                  <Divider width="2" height="1" bg="#d9d9d9" />
                </Box>

                <Stack
                  className="detail-color"
                  flexDirection="row"
                  // justifyContent="center"
                  alignItems="center"
                >
                  <Box className="color-text">Colors:</Box>
                  <Stack
                    className="color-options"
                    flexDirection="row"
                    justifyContent="space-between"
                    gap={1}
                  >
                    <Box className="color-opt" />
                    <Box className="color-opt" />
                    <Box className="color-opt" />
                  </Stack>
                </Stack>
              </Stack>

              {/* ======= Purchase Box ======= */}
              <Stack
                className="purchase-box"
                mt={4}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box display="flex" gap={4}>
                  {/* Quantity control */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      overflow: "hidden",
                    }}
                  >
                    <Button
                      onClick={handleDecrease}
                      sx={{
                        minWidth: 36,
                        height: 36,
                        color: "black",
                        borderRight: "1px solid #ccc",
                      }}
                    >
                      –
                    </Button>

                    <TextField
                      value={quantity}
                      inputProps={{
                        style: {
                          textAlign: "center",
                          width: 40,
                          height: 30,
                          border: "none",
                        },
                      }}
                      variant="standard"
                      sx={{
                        "& input": { textAlign: "center", fontWeight: 500 },
                      }}
                    />

                    <Button
                      onClick={handleIncrease}
                      sx={{
                        minWidth: 36,
                        height: 36,
                        backgroundColor: "#d32f2f",
                        color: "#fff",
                        borderLeft: "1px solid #ccc",
                        "&:hover": { backgroundColor: "#b71c1c" },
                      }}
                    >
                      +
                    </Button>
                  </Box>

                  {/* Buy Now button */}
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#d32f2f",
                      color: "#fff",
                      textTransform: "none",
                      fontWeight: "bold",
                      height: 36,
                      "&:hover": { backgroundColor: "#b71c1c" },
                    }}
                  >
                    Buy Now
                  </Button>

                  {/* Heart icon */}
                  <IconButton
                    sx={{
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      width: 36,
                      height: 36,
                      "&:hover": { backgroundColor: "#f9f9f9" },
                    }}
                  >
                    <FavoriteBorderIcon />
                  </IconButton>
                </Box>
              </Stack>

              {/* delivery */}

              <Stack className="delivery-wrapper">
                <Box className="delivery-row">
                  <img src="/icons/icon-delivery.png" alt="delivery" />
                  <Box className="delivery-texts">
                    <Box className="title">Free Delivery</Box>
                    <Box className="desc">
                      Enter your postal code for Delivery Availability
                    </Box>
                  </Box>
                </Box>

                <Box className="delivery-row">
                  <img src="/icons/icon-return.png" alt="return" />
                  <Box className="delivery-texts">
                    <Box className="title">Return Delivery</Box>
                    <Box className="desc">
                      Free 30 Days Delivery Returns. <a href="#">Details</a>
                    </Box>
                  </Box>
                </Box>
              </Stack>
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
}
