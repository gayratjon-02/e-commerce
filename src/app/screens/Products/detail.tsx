import React, { useState, MouseEvent, useEffect } from "react";
import {
  Stack,
  Box,
  Breadcrumbs,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { NavLink, useParams } from "react-router-dom";
import Divider from "../../components/divider";
import { createSelector } from "@reduxjs/toolkit";
import { Product } from "../../../lib/types/product";
import { setChosenProducts } from "./slice";
import { retrieveChosenProducts } from "./selector";
import ProductService from "../../services/ProductService";
import { useDispatch, useSelector } from "react-redux";
import { serverApi } from "../../../lib/config";
import { CartItem } from "../../../lib/types/search";

/** REDUX SELECTOR **/
const chosenProductRetriever = createSelector(
  retrieveChosenProducts,
  (chosenProduct) => ({ chosenProduct })
);

export type ProductsPageProps = {
  onAdd: (item: CartItem) => void;
};

export default function Detail({ onAdd }: ProductsPageProps) {
  const { productId } = useParams<{ productId: string }>();
  const dispatch = useDispatch();
  const { chosenProduct } = useSelector(chosenProductRetriever);

  /** HANDLERs **/

  const handleAddToBasket = () => {
    if (!chosenProduct) return;

    const firstImage =
      images.length > 0 ? images[0] : "/icons/shopping-bag.svg";

    onAdd({
      _id: chosenProduct._id,
      name: chosenProduct.productName,
      price: chosenProduct.productPrice,
      image: firstImage,
      quantity,
    });
  };

  // Asosiy katta rasm uchun indeks (default: 0)
  const [activeImgIdx, setActiveImgIdx] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(2);

  // Product fetch — faqat productId o‘zgarganda
  useEffect(() => {
    if (!productId) return;
    const product = new ProductService();
    product
      .getProduct(productId)
      .then((data: Product) => {
        dispatch(setChosenProducts(data));
        setActiveImgIdx(0); // har yangi productda 1-rasmga qaytamiz
      })
      .catch((err) => console.log(err));
  }, [productId, dispatch]);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDecrease = () => setQuantity((q) => (q > 1 ? q - 1 : q));
  const handleIncrease = () => setQuantity((q) => q + 1);

  if (!chosenProduct) return null;

  const images = Array.isArray(chosenProduct.productImages)
    ? chosenProduct.productImages
    : [];

  const mainImagePath =
    images.length > 0
      ? `${serverApi}/${images[activeImgIdx]}`
      : "/productsImg/gamepad-2.png";

  return (
    <Stack className="products-detail">
      {/* ======= Breadcrumbs ======= */}
      <Stack className="error-details">
        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            {/* Dinamik URL ko‘rsatishni istasang: <span>Details ({productId})</span> */}
            <span>Details</span>
          </Breadcrumbs>
        </div>
      </Stack>

      {/* ======= Main Detail Section ======= */}
      <Stack className="product-detail-box" flexDirection="row">
        {/* === Left image area === */}
        <Stack
          className="detail-img-box"
          flexDirection="row"
          justifyContent="space-between"
        >
          {/* Thumbnails */}
          <Stack className="detail-box-small" justifyContent="space-between">
            {images.length > 0 ? (
              images.map((img, idx) => {
                const thumb = `${serverApi}/${img}`;
                const isActive = idx === activeImgIdx;
                return (
                    <Box
                      key={img + idx}
                      className="small-box"
                      sx={{
                        border: isActive
                          ? "2px solid #d32f2f"
                          : "1px solid #e0e0e0",
                        borderRadius: "8px",
                        cursor: "pointer",
                        overflow: "hidden",
                        backgroundColor: "#fff",
                      }}
                      onClick={() => setActiveImgIdx(idx)}
                    >
                      <img
                        className="detail-img"
                        src={thumb}
                        alt={`small-${idx}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          display: "block",
                        }}
                      />
                    </Box>
                );
              })
            ) : (
              // Agar rasm bo‘lmasa ham layout buzilmasin
              <Box className="small-box">
                <img
                  className="detail-img"
                  src="/productsImg/gamepad-2.png"
                  alt="small-0"
                />
              </Box>
            )}
          </Stack>

          {/* Main big image */}
          <Stack className="detail-box-big">
            <Box className="main-img-box">
              <img
                className="detail-big-img"
                src={mainImagePath}
                alt="product-main"
              />
            </Box>
          </Stack>
        </Stack>

        {/* === Right description area === */}
        <Stack className="product-details-wrapper">
          <Stack className="detail-desc">
            <Box className="product-name">{chosenProduct.productName}</Box>

            <Stack
              className="product-collection"
              flexDirection="row"
              alignItems="center"
              gap={1}
              sx={{ marginTop: "12px" }}
            >
              <Box className="detail-collection">Category</Box>
              <Divider width="2" height="1" bg="#d9d9d9" />
              <Box className="detail-collection-text">
                {chosenProduct.productCollection}
              </Box>
            </Stack>

            <Stack
              className="price-desc"
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              sx={{ marginTop: "16px", padding: "12px 0", borderTop: "1px solid #e0e0e0", borderBottom: "1px solid #e0e0e0" }}
            >
              <span className="detail-price" style={{ color: "#d32f2f", fontWeight: 700, fontSize: "24px" }}>
                ${chosenProduct.productPrice}
              </span>

              <span className="detail-price" style={{ color: "#666", fontSize: "16px", fontWeight: 500 }}>
                Stock: {chosenProduct.productLeftCount}
              </span>
            </Stack>
            {chosenProduct.productDesc && (
              <Box sx={{ marginTop: "10px" }} className="detail-des">
                {chosenProduct.productDesc}
              </Box>
            )}

            <Box className="divider-detail" sx={{ marginTop: "20px", marginBottom: "8px" }}>
              <Divider width="2" height="1" bg="#e0e0e0" />
            </Box>

            {/* Colors */}
            <Stack
              className="detail-color"
              flexDirection="row"
              alignItems="center"
            >
              <Box className="color-text">Colors:</Box>
              <Stack
                className="color-options"
                flexDirection="row"
                gap={1.5}
                sx={{ marginLeft: "12px" }}
              >
                <Box
                  className="color-opt"
                  sx={{
                    backgroundColor: "#e07575",
                    cursor: "pointer",
                    "&:hover": { transform: "scale(1.15)" },
                    transition: "transform 0.2s ease",
                  }}
                />
                <Box
                  className="color-opt"
                  sx={{
                    backgroundColor: "#4a90e2",
                    cursor: "pointer",
                    "&:hover": { transform: "scale(1.15)" },
                    transition: "transform 0.2s ease",
                  }}
                />
                <Box
                  className="color-opt"
                  sx={{
                    backgroundColor: "#50c878",
                    cursor: "pointer",
                    "&:hover": { transform: "scale(1.15)" },
                    transition: "transform 0.2s ease",
                  }}
                />
              </Stack>
            </Stack>
          </Stack>

          {/* ======= Purchase Box ======= */}
          <Stack
            className="purchase-box"
            sx={{ marginTop: "32px" }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box display="flex" gap={2} alignItems="center" flexWrap="wrap">
              {/* Quantity control */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                }}
              >
                <Button
                  onClick={handleDecrease}
                  sx={{
                    minWidth: 36,
                    height: 36,
                    color: "#333",
                    backgroundColor: "#f5f5f5",
                    borderRight: "1px solid #ccc",
                    "&:hover": {
                      backgroundColor: "#e0e0e0",
                    },
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  –
                </Button>

                <TextField
                  value={quantity}
                  inputProps={{
                    readOnly: true, // foydalanuvchi bevosita tahrir qilmaydi
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
                  fontWeight: 700,
                  fontSize: "15px",
                  height: 44,
                  paddingX: 3,
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(211, 47, 47, 0.3)",
                  "&:hover": { 
                    backgroundColor: "#b71c1c",
                    boxShadow: "0 6px 16px rgba(211, 47, 47, 0.4)",
                    transform: "translateY(-1px)",
                  },
                  transition: "all 0.2s ease",
                }}
                onClick={handleAddToBasket}
              >
                Add to Cart
              </Button>

              {/* Heart icon */}
              <IconButton
                sx={{
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  width: 44,
                  height: 44,
                  backgroundColor: "#fff",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                  "&:hover": { 
                    backgroundColor: "#f5f5f5",
                    borderColor: "#d32f2f",
                    transform: "scale(1.05)",
                  },
                  transition: "all 0.2s ease",
                }}
              >
                <FavoriteBorderIcon sx={{ fontSize: "20px" }} />
              </IconButton>
            </Box>
          </Stack>

          {/* ======= Delivery ======= */}
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
    </Stack>
  );
}
