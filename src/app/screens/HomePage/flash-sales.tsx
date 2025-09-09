import { Badge, Box, Button, Container, Rating, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { NavLink } from "react-router-dom";

export default function FlashSales() {
  return (
    <Stack sx={{ padding: "0" }} className="flash-sales-main">
      <Stack className="flash-sales-wrapper" flexDirection={"column"}>
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
                <span>Today's</span>
              </Stack>

              <Stack className="discount-date-wrapper" flexDirection={"row"}>
                <strong>Flash Sales</strong>

                <Stack
                  className="dynamic-wrapper"
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                >
                  <Stack className="dynamic-box">
                    <span>Days</span>
                    <p>03</p>
                  </Stack>

                  <Box className="equal">:</Box>

                  <Stack className="dynamic-box">
                    <span>Hours</span>
                    <p>23</p>
                  </Stack>

                  <Box className="equal">:</Box>

                  <Stack className="dynamic-box">
                    <span>Minutes</span>
                    <p>19</p>
                  </Stack>

                  <Box className="equal">:</Box>

                  <Stack className="dynamic-box">
                    <span>Seconds</span>
                    <p>56</p>
                  </Stack>
                </Stack>
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

        <Stack
          className="flash-sales-bottom"
          justifyContent={"center"}
          alignItems={"center"}
        >
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
                    <FavoriteBorderIcon />

                    <Badge badgeContent={4} color="secondary">
                      <RemoveRedEyeOutlinedIcon />
                    </Badge>
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
                      <StarIcon fontSize="inherit" style={{ color: "gold" }} />
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
                    <FavoriteBorderIcon />

                    <Badge badgeContent={4} color="secondary">
                      <RemoveRedEyeOutlinedIcon />
                    </Badge>
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
                      <StarIcon fontSize="inherit" style={{ color: "gold" }} />
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
                    <FavoriteBorderIcon />

                    <Badge badgeContent={4} color="secondary">
                      <RemoveRedEyeOutlinedIcon />
                    </Badge>
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
                      <StarIcon fontSize="inherit" style={{ color: "gold" }} />
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
                    <FavoriteBorderIcon />

                    <Badge badgeContent={4} color="secondary">
                      <RemoveRedEyeOutlinedIcon />
                    </Badge>
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
                      <StarIcon fontSize="inherit" style={{ color: "gold" }} />
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

        <Stack
          className="view-all-products"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <NavLink className={"view-all-butt"} to="">View All Products</NavLink>
        </Stack>
      </Stack>
    </Stack>
  );
}
