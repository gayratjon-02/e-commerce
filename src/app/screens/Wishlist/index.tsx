import {
  Badge,
  Box,
  Button,
  colors,
  Container,
  Rating,
  Stack,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { NavLink } from "react-router-dom";
import "../../../css/wishlist.css";

export default function Wishlist() {
  return (
    <Container className="wishlist-container">
      <Stack className="wishlist-main">
        <Stack className="wishlist-top">
          <Stack className="best-selling-products-main" sx={{ margin: "0" }}>
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
                    sx={{ marginTop: "30px" }}
                  >
                    <div className="discount-red"></div>
                    <Box sx={{ color: "black", marginLeft: "10px" }}>
                      WishList (4)
                    </Box>
                  </Stack>
                </Stack>

                <Stack className="discount-right" flexDirection={"row"}>
                  <Box
                    sx={{
                      padding: "10px",
                      border: "1px solid  rgba(85, 87, 110)",
                      borderRadius: "10px",
                    }}
                  >
                    Move All To Bag
                  </Box>
                </Stack>
              </Stack>
            </Stack>

            {/* Test */}

            <Stack className="products-wrapper" flexDirection={"row"}>
              <Stack className="product-box">
                <Stack
                  className="product-box-top"
                  flexDirection={"column"}
                  justifyContent={"space-between"}
                >
                  <Stack
                    className="product-a"
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                  >
                    <Box className="discount-percentage">
                      <span>-35%</span>
                    </Box>

                    <Stack
                      className="product-image"
                      sx={{
                        backgroundImage: "url('/productsImg/gamepad-2.png')",
                        backgroundSize: "cover", // fonni to‘liq yopish
                        backgroundPosition: "center",
                      }}
                    ></Stack>

                    <Stack
                      className="view-like-box"
                      flexDirection={"column"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <DeleteForeverIcon />
                    </Stack>
                  </Stack>

                  <Stack className="product-b">
                    <Button className="cart-butt">Add to Cart</Button>
                  </Stack>
                </Stack>

                <Stack
                  className="product-box-bott"
                  flexDirection={"column"}
                  justifyContent={"space-between"}
                >
                  <span>HAVIT HV-G92 Gamepad</span>

                  <Stack className="product-price-box" flexDirection={"row"}>
                    <p className="curr-price">$120</p>
                    <p className="down-price">$160</p>
                  </Stack>

                  <Box>
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={1}
                      icon={
                        <StarIcon
                          fontSize="inherit"
                          style={{ color: "gold" }}
                        />
                      }
                      emptyIcon={
                        <StarBorderIcon
                          fontSize="inherit"
                          style={{ color: "gold" }}
                        />
                      }
                    />
                  </Box>
                </Stack>
              </Stack>
              <Stack className="product-box">
                <Stack
                  className="product-box-top"
                  flexDirection={"column"}
                  justifyContent={"space-between"}
                >
                  <Stack
                    className="product-a"
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                  >
                    <Box className="discount-percentage">
                      <span>-35%</span>
                    </Box>

                    <Stack
                      className="product-image"
                      sx={{
                        backgroundImage: "url('/productsImg/gamepad-2.png')",
                        backgroundSize: "cover", // fonni to‘liq yopish
                        backgroundPosition: "center",
                      }}
                    ></Stack>

                    <Stack
                      className="view-like-box"
                      flexDirection={"column"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <DeleteForeverIcon />
                    </Stack>
                  </Stack>

                  <Stack className="product-b">
                    <Button className="cart-butt">Add to Cart</Button>
                  </Stack>
                </Stack>

                <Stack
                  className="product-box-bott"
                  flexDirection={"column"}
                  justifyContent={"space-between"}
                >
                  <span>HAVIT HV-G92 Gamepad</span>

                  <Stack className="product-price-box" flexDirection={"row"}>
                    <p className="curr-price">$120</p>
                    <p className="down-price">$160</p>
                  </Stack>

                  <Box>
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={1}
                      icon={
                        <StarIcon
                          fontSize="inherit"
                          style={{ color: "gold" }}
                        />
                      }
                      emptyIcon={
                        <StarBorderIcon
                          fontSize="inherit"
                          style={{ color: "gold" }}
                        />
                      }
                    />
                  </Box>
                </Stack>
              </Stack>

              <Stack className="product-box">
                <Stack
                  className="product-box-top"
                  flexDirection={"column"}
                  justifyContent={"space-between"}
                >
                  <Stack
                    className="product-a"
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                  >
                    <Box className="discount-percentage">
                      <span>-35%</span>
                    </Box>

                    <Stack
                      className="product-image"
                      sx={{
                        backgroundImage: "url('/productsImg/gamepad-2.png')",
                        backgroundSize: "cover", // fonni to‘liq yopish
                        backgroundPosition: "center",
                      }}
                    ></Stack>

                    <Stack
                      className="view-like-box"
                      flexDirection={"column"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <DeleteForeverIcon />
                    </Stack>
                  </Stack>

                  <Stack className="product-b">
                    <Button className="cart-butt">Add to Cart</Button>
                  </Stack>
                </Stack>

                <Stack
                  className="product-box-bott"
                  flexDirection={"column"}
                  justifyContent={"space-between"}
                >
                  <span>HAVIT HV-G92 Gamepad</span>

                  <Stack className="product-price-box" flexDirection={"row"}>
                    <p className="curr-price">$120</p>
                    <p className="down-price">$160</p>
                  </Stack>

                  <Box>
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={1}
                      icon={
                        <StarIcon
                          fontSize="inherit"
                          style={{ color: "gold" }}
                        />
                      }
                      emptyIcon={
                        <StarBorderIcon
                          fontSize="inherit"
                          style={{ color: "gold" }}
                        />
                      }
                    />
                  </Box>
                </Stack>
              </Stack>

              <Stack className="product-box">
                <Stack
                  className="product-box-top"
                  flexDirection={"column"}
                  justifyContent={"space-between"}
                >
                  <Stack
                    className="product-a"
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                  >
                    <Box className="discount-percentage">
                      <span>-35%</span>
                    </Box>

                    <Stack
                      className="product-image"
                      sx={{
                        backgroundImage: "url('/productsImg/gamepad-2.png')",
                        backgroundSize: "cover", // fonni to‘liq yopish
                        backgroundPosition: "center",
                      }}
                    ></Stack>

                    <Stack
                      className="view-like-box"
                      flexDirection={"column"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <DeleteForeverIcon />
                    </Stack>
                  </Stack>

                  <Stack className="product-b">
                    <Button className="cart-butt">Add to Cart</Button>
                  </Stack>
                </Stack>

                <Stack
                  className="product-box-bott"
                  flexDirection={"column"}
                  justifyContent={"space-between"}
                >
                  <span>HAVIT HV-G92 Gamepad</span>

                  <Stack className="product-price-box" flexDirection={"row"}>
                    <p className="curr-price">$120</p>
                    <p className="down-price">$160</p>
                  </Stack>

                  <Box>
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={1}
                      icon={
                        <StarIcon
                          fontSize="inherit"
                          style={{ color: "gold" }}
                        />
                      }
                      emptyIcon={
                        <StarBorderIcon
                          fontSize="inherit"
                          style={{ color: "gold" }}
                        />
                      }
                    />
                  </Box>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        <Stack className="wishlist-buttom">
          <Stack className="best-selling-products-main" sx={{ margin: "0" }}>
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
                    sx={{ marginTop: "30px" }}
                  >
                    <div className="discount-red"></div>
                    <Box sx={{ color: "black", marginLeft: "10px" }}>
                      Just For You
                    </Box>
                  </Stack>
                </Stack>

                <Stack className="discount-right" flexDirection={"row"}>
                  <Box
                    sx={{
                      margin: "40px",
                      padding: "10px",
                      border: "1px solid  rgba(85, 87, 110)",
                      borderRadius: "10px",
                    }}
                  >
                    See All
                  </Box>
                </Stack>
              </Stack>
            </Stack>

            {/* Test */}

            <Stack className="products-wrapper" flexDirection={"row"}>
              <Stack className="product-box">
                <Stack
                  className="product-box-top"
                  flexDirection={"column"}
                  justifyContent={"space-between"}
                >
                  <Stack
                    className="product-a"
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                  >
                    <Box className="discount-percentage">
                      <span>-35%</span>
                    </Box>

                    <Stack
                      className="product-image"
                      sx={{
                        backgroundImage: "url('/productsImg/gamepad-2.png')",
                        backgroundSize: "cover", // fonni to‘liq yopish
                        backgroundPosition: "center",
                      }}
                    ></Stack>

                    <Stack
                      className="view-like-box"
                      flexDirection={"column"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <RemoveRedEyeOutlinedIcon />
                    </Stack>
                  </Stack>

                  <Stack className="product-b">
                    <Button className="cart-butt">Add to Cart</Button>
                  </Stack>
                </Stack>

                <Stack
                  className="product-box-bott"
                  flexDirection={"column"}
                  justifyContent={"space-between"}
                >
                  <span>HAVIT HV-G92 Gamepad</span>

                  <Stack className="product-price-box" flexDirection={"row"}>
                    <p className="curr-price">$120</p>
                    <p className="down-price">$160</p>
                  </Stack>

                  <Box>
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={1}
                      icon={
                        <StarIcon
                          fontSize="inherit"
                          style={{ color: "gold" }}
                        />
                      }
                      emptyIcon={
                        <StarBorderIcon
                          fontSize="inherit"
                          style={{ color: "gold" }}
                        />
                      }
                    />
                  </Box>
                </Stack>
              </Stack>

              <Stack className="product-box">
                <Stack
                  className="product-box-top"
                  flexDirection={"column"}
                  justifyContent={"space-between"}
                >
                  <Stack
                    className="product-a"
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                  >
                    <Box className="discount-percentage">
                      <span>-35%</span>
                    </Box>

                    <Stack
                      className="product-image"
                      sx={{
                        backgroundImage: "url('/productsImg/gamepad-2.png')",
                        backgroundSize: "cover", // fonni to‘liq yopish
                        backgroundPosition: "center",
                      }}
                    ></Stack>

                    <Stack
                      className="view-like-box"
                      flexDirection={"column"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <RemoveRedEyeOutlinedIcon />
                    </Stack>
                  </Stack>

                  <Stack className="product-b">
                    <Button className="cart-butt">Add to Cart</Button>
                  </Stack>
                </Stack>

                <Stack
                  className="product-box-bott"
                  flexDirection={"column"}
                  justifyContent={"space-between"}
                >
                  <span>HAVIT HV-G92 Gamepad</span>

                  <Stack className="product-price-box" flexDirection={"row"}>
                    <p className="curr-price">$120</p>
                    <p className="down-price">$160</p>
                  </Stack>

                  <Box>
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={1}
                      icon={
                        <StarIcon
                          fontSize="inherit"
                          style={{ color: "gold" }}
                        />
                      }
                      emptyIcon={
                        <StarBorderIcon
                          fontSize="inherit"
                          style={{ color: "gold" }}
                        />
                      }
                    />
                  </Box>
                </Stack>
              </Stack>

              <Stack className="product-box">
                <Stack
                  className="product-box-top"
                  flexDirection={"column"}
                  justifyContent={"space-between"}
                >
                  <Stack
                    className="product-a"
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                  >
                    <Box className="discount-percentage">
                      <span>-35%</span>
                    </Box>

                    <Stack
                      className="product-image"
                      sx={{
                        backgroundImage: "url('/productsImg/gamepad-2.png')",
                        backgroundSize: "cover", // fonni to‘liq yopish
                        backgroundPosition: "center",
                      }}
                    ></Stack>

                    <Stack
                      className="view-like-box"
                      flexDirection={"column"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <RemoveRedEyeOutlinedIcon />
                    </Stack>
                  </Stack>

                  <Stack className="product-b">
                    <Button className="cart-butt">Add to Cart</Button>
                  </Stack>
                </Stack>

                <Stack
                  className="product-box-bott"
                  flexDirection={"column"}
                  justifyContent={"space-between"}
                >
                  <span>HAVIT HV-G92 Gamepad</span>

                  <Stack className="product-price-box" flexDirection={"row"}>
                    <p className="curr-price">$120</p>
                    <p className="down-price">$160</p>
                  </Stack>

                  <Box>
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={1}
                      icon={
                        <StarIcon
                          fontSize="inherit"
                          style={{ color: "gold" }}
                        />
                      }
                      emptyIcon={
                        <StarBorderIcon
                          fontSize="inherit"
                          style={{ color: "gold" }}
                        />
                      }
                    />
                  </Box>
                </Stack>
              </Stack>

              <Stack className="product-box">
                <Stack
                  className="product-box-top"
                  flexDirection={"column"}
                  justifyContent={"space-between"}
                >
                  <Stack
                    className="product-a"
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                  >
                    <Box className="discount-percentage">
                      <span>-35%</span>
                    </Box>

                    <Stack
                      className="product-image"
                      sx={{
                        backgroundImage: "url('/productsImg/gamepad-2.png')",
                        backgroundSize: "cover", // fonni to‘liq yopish
                        backgroundPosition: "center",
                      }}
                    ></Stack>

                    <Stack
                      className="view-like-box"
                      flexDirection={"column"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <RemoveRedEyeOutlinedIcon />
                    </Stack>
                  </Stack>

                  <Stack className="product-b">
                    <Button className="cart-butt">Add to Cart</Button>
                  </Stack>
                </Stack>

                <Stack
                  className="product-box-bott"
                  flexDirection={"column"}
                  justifyContent={"space-between"}
                >
                  <span>HAVIT HV-G92 Gamepad</span>

                  <Stack className="product-price-box" flexDirection={"row"}>
                    <p className="curr-price">$120</p>
                    <p className="down-price">$160</p>
                  </Stack>

                  <Box>
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={1}
                      icon={
                        <StarIcon
                          fontSize="inherit"
                          style={{ color: "gold" }}
                        />
                      }
                      emptyIcon={
                        <StarBorderIcon
                          fontSize="inherit"
                          style={{ color: "gold" }}
                        />
                      }
                    />
                  </Box>
                </Stack>
              </Stack>˝

          
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
