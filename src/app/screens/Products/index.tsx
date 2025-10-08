import React, { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Detail from "./detail";
import {
  Stack,
  InputBase,
  Select,
  MenuItem,
  Typography,
  Box,
  Badge,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useSelector, useDispatch } from "react-redux";
import { retrieveFlashSales } from "../HomePage/selector";
import { setBestSellingProducts, setFlashSales } from "../HomePage/slice";
import { serverApi } from "../../../lib/config";
import { CartItem } from "../../../lib/types/search";
import { Product } from "../../../lib/types/product";
import axios from "axios";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";

interface ProductsPageProps {
  onAdd: (item: CartItem) => void;
  onRemove: (item: CartItem) => void;
  onDelete: (item: CartItem) => void;
  onDeleteAll: () => void;
}

export default function ProductsPage(props: ProductsPageProps) {
  const { onAdd } = props;
  const { path } = useRouteMatch();
  const dispatch = useDispatch();

  const flashSales = useSelector(retrieveFlashSales);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const product = new ProductService();

        const [latest] = await Promise.all([
          product.getProducts({
            page: 1,
            limit: 8,
            order: "latest",
            productCollection: ProductCollection.PHONE,
          }),
        ]);

        dispatch(setFlashSales(latest));
      } catch (err) {
        console.error("Product fetch error:", err);
      }
    };

    fetchProducts();
  }, []);

  // 🔹 Search bo‘yicha filtrlash
  const filteredProducts = flashSales?.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="products-page">
      <Switch>
        <Route path={`${path}/:productId`}>
          <Detail />
        </Route>

        <Route exact path={path}>
          <div className="product-main">
            <Stack className="product-main-wrapper" flexDirection="row">
              {/* === CHAP TOMON: FILTER PANEL === */}
              <Stack className="sorting-wrapper">
                <Stack className="filter-box">
                  {/* CATEGORY SECTION */}
                  <div className="filter-section">
                    <h4 className="filter-title">CATEGORY</h4>
                    <div className="filter-options">
                      <label>
                        <input type="radio" name="category" /> Computer
                      </label>
                      <label>
                        <input type="radio" name="category" defaultChecked />{" "}
                        Phone
                      </label>
                      <label>
                        <input type="radio" name="category" /> AirPods
                      </label>
                      <label>
                        <input type="radio" name="category" /> Watch
                      </label>
                      <label>
                        <input type="radio" name="category" /> Other
                      </label>
                    </div>
                  </div>

                  {/* PRICE RANGE SECTION */}
                  <div className="filter-section">
                    <h4 className="filter-title">PRICE RANGE</h4>
                    <div className="slider-box">
                      <input type="range" min="0" max="100" defaultValue="20" />
                    </div>

                    <div className="price-inputs">
                      <input type="text" placeholder="Min price" />
                      <input type="text" placeholder="Max price" />
                    </div>

                    <div className="filter-options">
                      <label>
                        <input type="radio" name="price" /> All Price
                      </label>
                      <label>
                        <input type="radio" name="price" /> Under $2000
                      </label>
                      <label>
                        <input type="radio" name="price" /> $10000 - $18000
                      </label>
                      <label>
                        <input type="radio" name="price" /> $700 - $999
                      </label>
                      <label>
                        <input type="radio" name="price" /> $400 - $699
                      </label>
                      <label>
                        <input type="radio" name="price" /> Above $399
                      </label>
                    </div>
                  </div>
                </Stack>
              </Stack>

              {/* === O‘RTADAGI QISM: SEARCH + SORT + PRODUCTLAR === */}
              <Stack className="main-middle" flexDirection="column">
                {/* SEARCH + SORT HEADER */}
                <Stack className="product-content-top">
                  <div className="product-toolbar">
                    {/* SEARCH BAR */}
                    <div className="search-box">
                      <SearchIcon className="search-icon" />
                      <InputBase
                        placeholder="Search..."
                        className="search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>

                    {/* SORT SELECT */}
                    <div className="sort-box">
                      <Typography className="sort-label">Sort By:</Typography>
                      <Select defaultValue="Popular" className="sort-select">
                        <MenuItem value="Popular">Popular</MenuItem>
                        <MenuItem value="Newest">Newest</MenuItem>
                        <MenuItem value="PriceLowHigh">
                          Price: Low to High
                        </MenuItem>
                        <MenuItem value="PriceHighLow">
                          Price: High to Low
                        </MenuItem>
                      </Select>
                    </div>

                    {/* RESULT COUNT */}
                    <Typography className="results-text">
                      Result: {filteredProducts?.length || 0}
                    </Typography>
                  </div>
                </Stack>

                {/* PRODUCT LIST */}
                <Stack className="product-content-middle">
                  <Stack
                    className="products-wrapper"
                    flexDirection="row"
                    flexWrap="wrap"
                    gap={3}
                  >
                    {filteredProducts && filteredProducts.length > 0 ? (
                      filteredProducts.map((ele) => {
                        const imagePath = ele.productImages?.length
                          ? `${serverApi}/${ele.productImages[0]}`
                          : "/productsImg/gamepad-2.png";

                        return (
                          <Stack key={ele._id} className="product-box-main">
                            <span className="discount-percentage">-40%</span>
                            <img
                              className="product-images"
                              src={imagePath}
                              alt={ele.productName}
                            />

                            {/* LIKE + VIEW BADGES */}
                            <Stack
                              className="like-wiew"
                              justifyContent="space-between"
                            >
                              <Badge
                                badgeContent={ele.productLikes}
                                sx={{
                                  "& .MuiBadge-badge": {
                                    backgroundColor: "#ff5500bf",
                                    color: "white",
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
                                    color: "white",
                                  },
                                }}
                              >
                                <RemoveRedEyeOutlinedIcon className="like-view-icon" />
                              </Badge>
                            </Stack>

                            {/* PRODUCT NAME */}
                            <Typography variant="h6" className="productName">
                              {ele.productName}
                            </Typography>

                            {/* PRICE + PURCHASE */}
                            <Stack
                              className="product-price"
                              flexDirection="row"
                              alignItems="center"
                            >
                              <Box className="exact-price">
                                ${ele.productPrice}
                              </Box>
                              <Box ml={2} className="discount-price">
                                $144
                              </Box>
                              <Typography
                                sx={{ cursor: "pointer", marginLeft: "auto" }}
                                variant="h3"
                                className="sold-count"
                                onClick={(e) => {
                                  onAdd({
                                    _id: ele._id,
                                    quantity: 1,
                                    name: ele.productName,
                                    price: ele.productPrice,
                                    image: ele.productImages[0],
                                  });
                                  e.stopPropagation();
                                }}
                              >
                                PURCHASE
                              </Typography>
                            </Stack>
                          </Stack>
                        );
                      })
                    ) : (
                      <Typography className="no-products">
                        No products found
                      </Typography>
                    )}
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </div>
        </Route>
      </Switch>
    </div>
  );
}
