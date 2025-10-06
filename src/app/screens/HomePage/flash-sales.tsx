import {
  Badge,
  Box,
  Button,
  CssVarsProvider,
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
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveFlashSales } from "./selector";
import { serverApi } from "../../../lib/config";
import { useCountdown } from "./useCountdown";
import { red } from "@mui/material/colors";

/**  REDUX SELECTOR **/
const flashSalesRetriever = createSelector(
  retrieveFlashSales,
  (flashSales) => flashSales
);

export default function FlashSales() {
  const flashSales = useSelector(flashSalesRetriever);
  console.log("flashSales:", flashSales);
  const [days, hours, minutes, seconds] = useCountdown("2025-09-25T23:59:59");

  return (
    <Stack sx={{ padding: "0" }} className="flash-sales-main">
      <Stack className="flash-sales-wrapper" flexDirection={"column"}>
        {/* TOP SECTION */}
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
                    <p>{days}</p>
                  </Stack>

                  <Box className="equal">:</Box>

                  <Stack className="dynamic-box">
                    <span>Hours</span>
                    <p>{hours}</p>
                  </Stack>

                  <Box className="equal">:</Box>

                  <Stack className="dynamic-box">
                    <span>Minutes</span>
                    <p>{minutes}</p>
                  </Stack>

                  <Box className="equal">:</Box>

                  <Stack className="dynamic-box">
                    <span>Seconds</span>
                    <p>{seconds} </p>
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

        {/* BOTTOM PRODUCTS */}
        <Stack
          className="flash-sales-bottom"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Stack className="products-wrapper" flexDirection={"row"}>
            {flashSales.map((ele) => {
              const imagePath = ele.productImages?.length
                ? `${serverApi}/${ele.productImages[0]}`
                : "/productsImg/gamepad-2.png";

              return (
                <Stack className="product-box-main">
                  <span className="discount-percentage">-40%</span>
                  <img className="product-images" src={imagePath} alt="image" />
                  <Stack className="like-wiew" justifyContent={"space-between"}>
                    <Badge
                      badgeContent={ele.productLikes}
                      sx={{
                        "& .MuiBadge-badge": {
                          backgroundColor: "#ff5500bf", // o‘zing xohlagan rang
                          color: "white", // matn rangi
                        },
                      }}
                    >
                      <FavoriteBorderIcon className="like-view-icon" />
                    </Badge>

                    <Badge
                      badgeContent={ele.productViews}
                      sx={{
                        "& .MuiBadge-badge": {
                          backgroundColor: "#ff5500bf", // o‘zing xohlagan rang
                          color: "white", // matn rangi
                        },
                      }}
                    >
                      <RemoveRedEyeOutlinedIcon className="like-view-icon" />
                    </Badge>
                  </Stack>

                  <Typography
                    variant="h6"
                    component="h2"
                    className="productName"
                  >
                    {ele.productName}
                  </Typography>

                  <Stack className="product-price" flexDirection={"row"}>
                    <Box className="exact-price">${ele.productPrice}</Box>
                    <Box ml={2} className="discount-price">
                      $144
                    </Box>
                    <Typography
                      variant="h3"
                      component={"h2"}
                      className="sold-count"
                    >
                      PURCHASE
                    </Typography>
                  </Stack>
                </Stack>
              );
            })}
          </Stack>
        </Stack>

        {/* VIEW ALL */}
        <Stack
          className="view-all-products"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <NavLink className={"view-all-butt"} to="">
            View All Products
          </NavLink>
        </Stack>
      </Stack>
    </Stack>
  );
}
