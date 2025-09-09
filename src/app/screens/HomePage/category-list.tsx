import { Box, Container, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";

export default function CategoryList() {
  return (
    <Stack className="category-list-main">
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
              <span>Categories</span>
            </Stack>

            <Stack className="discount-date-wrapper" flexDirection={"row"}>
              <strong>Browse By Category</strong>
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

      <Stack className="catt-wrapper" flexDirection={"row"}>
        <Stack
          className="catt-box"
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <img
            width={"56px"}
            height={"56px"}
            src="/icons/Category-CellPhone.png"
            alt="Category-CellPhone.png"
          />
          <Box marginTop={"16px"}>Phones</Box>
        </Stack>

        <Stack
          className="catt-box"
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <img
            width={"56px"}
            height={"56px"}
            src="/icons/Category-CellPhone.png"
            alt="Category-CellPhone.png"
          />
          <Box marginTop={"16px"}>Phones</Box>
        </Stack>

        <Stack
          className="catt-box"
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <img
            width={"56px"}
            height={"56px"}
            src="/icons/Category-CellPhone.png"
            alt="Category-CellPhone.png"
          />
          <Box marginTop={"16px"}>Phones</Box>
        </Stack>

        <Stack
          className="catt-box"
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <img
            width={"56px"}
            height={"56px"}
            src="/icons/Category-CellPhone.png"
            alt="Category-CellPhone.png"
          />
          <Box marginTop={"16px"}>Phones</Box>
        </Stack>

        <Stack
          className="catt-box"
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <img
            width={"56px"}
            height={"56px"}
            src="/icons/Category-CellPhone.png"
            alt="Category-CellPhone.png"
          />
          <Box marginTop={"16px"}>Phones</Box>
        </Stack>

        <Stack
          className="catt-box"
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <img
            width={"56px"}
            height={"56px"}
            src="/icons/Category-CellPhone.png"
            alt="Category-CellPhone.png"
          />
          <Box marginTop={"16px"}>Phones</Box>
        </Stack>
      </Stack>
    </Stack>
  );
}
