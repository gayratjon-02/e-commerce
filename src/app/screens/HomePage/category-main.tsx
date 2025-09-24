import {
  Box,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Pagination,
  Stack,
} from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import Divider from "../../components/divider";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { NavLink } from "react-router-dom";

export default function CategoryMain() {
  return (
    <div className="category-main">
      {/* <Divider width="2" height="1" bg="#d9d9d9" /> */}
      <Container className="category-container">
        <Stack
          className="category-left"
          width={"233px"}
          height={"384px"}
          flexDirection={"row"}
        >
          <Stack
            className="left-catt"
            flexDirection={"column"}
            justifyContent={"space-between"}
          >
            <Stack className="catt-text-wrapper" flexDirection={"row"}>
              <NavLink to={""} className="catt-text">
                PHONE
              </NavLink>
              <img
                src="./icons/DropDownRight.png"
                alt=""
                width={"24px"}
                height={"24px"}
              />
            </Stack>

            <Stack
              className="catt-text-wrapper"
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <NavLink to={""} className="catt-text">
                COMPUTER
              </NavLink>
              <img
                src="./icons/DropDownRight.png"
                alt=""
                width={"24px"}
                height={"24px"}
              />
            </Stack>

            <NavLink to={""} className="catt-text">
              WATCH
            </NavLink>
            <NavLink to={""} className="catt-text">
              CAMERA
            </NavLink>
            <NavLink to={""} className="catt-text">
              HEADPHONE
            </NavLink>
            <NavLink to={""} className="catt-text">
              GAMING
            </NavLink>
            <NavLink to={""} className="catt-text">
              OTHERS
            </NavLink>
          </Stack>

          <Stack className="line-catt">
            <Divider height="384" w1="10" width="1" bg="#d9d9d9" />
          </Stack>
        </Stack>

        <Box className="category-right">
          <Stack
            className="category-box-wrapper"
            flexDirection={"row"}
            justifyContent={"space-between"}
          >
            <Box className="category-box-left">
              <Stack
                className="category-apple-logoText"
                flexDirection={"row"}
                alignItems={"center"}
              >
                <AppleIcon
                  sx={{ color: "white", width: "40px", height: "50px" }}
                />
                <span>iPhone 14 Series</span>
              </Stack>

              <Box className="catt-vaucher-text">
                <strong>Up to 10% off Voucher</strong>
              </Box>

              <Stack className="catt-shop-btn" flexDirection={"row"}>
                <NavLink to="" className={"catt-shopBtn"}>
                  Shop Now
                </NavLink>
                <ChevronRightIcon sx={{ color: "white" }} />
              </Stack>
            </Box>

            <Box className="category-box-right">
              <Box className="catt-iphone-logo">
                <img
                  src="/img/ipp.jpg"
                  alt="iphone-logo.webp"
                  width={"396px"}
                  height={"252px"}
                  className="logo-img"
                />
              </Box>
              <Box className="catt-pagination"></Box>
            </Box>
          </Stack>
        </Box>
      </Container>
    </div>
  );
}
