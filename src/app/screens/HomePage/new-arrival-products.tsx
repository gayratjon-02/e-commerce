import { Badge, Box, Button, Container, Rating, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { NavLink } from "react-router-dom";

export default function NewArrivalProducts() {
  return (
    <Stack className="new-arrival-products-main">
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
              <span>Featured</span>
            </Stack>

            <Stack className="discount-date-wrapper" flexDirection={"row"}>
              <strong>New Arrival</strong>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        className="arrival-wrapper"
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        <Stack
          className="arrival-left"
          justifyContent={"flex-end"}
          alignItems={"center"}
        >
          <Box
            className="left-img"
            sx={{
              backgroundImage: "url(/img/ps-home.png)",
            }}
          >
            <Stack className="text-frame">
              <span>PlayStation 5</span>
              <p>Black and White version of the PS5 coming out on sale.</p>

              <Box className="shop-now">Show Now</Box>
            </Stack>
          </Box>
        </Stack>

        <Stack className="arrival-right">
          <Stack className="arrival-box-a" flexDirection={"row"}>
            <Stack className="box-text">
              <span>Women’s Collections</span>
              <p>Featured woman collections that give you another vibe.</p>

              <Box className="shop-now">Shop Now</Box>
            </Stack>

            <Stack
              sx={{
                backgroundImage: "url(/img/women-home.png)",
                backgroundSize: "cover",
              }}
              className="box-img"
            ></Stack>
          </Stack>

          <Stack
            className="arrival-box-b"
            flexDirection={"row"}
            justifyContent={"space-between"}
          >
            <Stack className="b-wrapper">
              <Stack
                className="b-left"
                sx={{
                  backgroundImage: "url(/img/speaker-home.png) ",
                }}
              >
                <Box className="b-left-text">
                  <span>Speakers</span>
                  <p>Amazon wireless speakers</p>

                  <Box className="b-btn">Shop Now</Box>
                </Box>
              </Stack>
            </Stack>

            <Stack className="b-wrapper">
              <Stack
                className="b-left"
                sx={{
                  backgroundImage: "url(/img/speaker-home.png) ",
                }}
              >
                <Box className="b-left-text">
                  <span>Speakers</span>
                  <p>Amazon wireless speakers</p>

                  <Box className="b-btn">Shop Now</Box>
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
